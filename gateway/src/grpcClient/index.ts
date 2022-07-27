import * as grpc from '@grpc/grpc-js';
import grpcDataSource from '../grpcDataSource';
import { IStoreManagerClient, StoreManagerClient } from '../../proto/djtestpoms_grpc_pb';
import { GetProductsRequest, Product, ProductStreamResponse } from '../../proto/djtestpoms_pb';
import { ClientReadableStream } from '@grpc/grpc-js';

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
      const stream: ClientReadableStream<ProductStreamResponse> = this.client.getProducts(request);
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
}

