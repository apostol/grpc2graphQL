import * as grpc from '@grpc/grpc-js';
import grpcDataSource from '../grpcDataSource';
import { IStoreManagerClient, StoreManagerClient } from '../../proto/djtestpoms_grpc_pb';
import { Category, CreateOrderRequest, EmptyRequest, GetProductsRequest, Product, ProductStreamResponse, Order, OrderStatus } from '../../proto/djtestpoms_pb';

export default class djTestPomsAPI extends grpcDataSource {
  client: IStoreManagerClient;
  private _apiKey: string;
  private _apiHost: string;

  constructor(apiHost: string, apiKey: string) {
    super();
    this._apiKey = apiKey
    this._apiHost = apiHost
    this.client = new StoreManagerClient(
        this._apiHost,
        grpc.credentials.createInsecure(),
    );
  }

  async getProducts(ids: number[]):Promise<Product.AsObject[]> {
    return new Promise<Product.AsObject[]>((resolve) => {
      let result: Product.AsObject[] = []
      const request = new GetProductsRequest();
      request.setApikey(this._apiKey)
      request.setIdsList(ids)
      console.log(`[getProducts] Request: ${JSON.stringify(request.toObject())}`);
      const stream: grpc.ClientReadableStream<ProductStreamResponse> = this.client.getProducts(request);
      stream.on("data", (data: ProductStreamResponse) => {
        console.log(`[getProducts] Product: ${JSON.stringify(data.toObject())}`);
        if (data.hasProduct()){
          let product = data.getProduct() as Product
          result.push(product.toObject())
        }
      });
      stream.on("end", () => {
        console.log("[getProducts] Done.");
        resolve(result);
      });
    });
  };

  async getCategories(id: number): Promise<Category.AsObject>{
    return new Promise<Category.AsObject>((resolve) => {
      let result: Category.AsObject
      const request = new EmptyRequest()
      request.setApikey(this._apiKey)
      console.log(`[getCategories] Request: ${JSON.stringify(request.toObject())}`);
      const stream: grpc.ClientReadableStream<Category> = this.client.getCategories(request)
      stream.on("data", (data: Category) => {
        console.log(`[getCategory] Category: ${JSON.stringify(data.toObject())}`);
        if (data.getId() == id)
          result = data.toObject()
      });
      stream.on("end", () => {
        console.log("[getCategory] Done.");
        resolve(result);
      });
    });
  }

  async createOrder(ids: [Record<string, number>]):Promise<Order.AsObject> {
    const request = new CreateOrderRequest()
    request.setApikey(this._apiKey)
    const items = request.getItemsMap() as Map<number,number>
    ids.forEach((c)=>items.set(c.key, c.value))
    return new Promise( (resolve, reject) =>
      this.client.createOrder(request, (err, resp)=>{
        if (err) return reject(err)
        return resolve(resp.toObject())
      })
    )
  };

  async getOrderStatus(id: number){
    switch (id) {
      case 0: return "CREATED"
      case 1: return "READY_TO_SHIP"
      case 2: return "SHIPPED"
      case 3: return "DELIVERED"
      case 4: return "CANCELLED"
    }
  }
}
