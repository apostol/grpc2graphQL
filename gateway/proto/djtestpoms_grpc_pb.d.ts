// package: djtestpoms
// file: proto/djtestpoms.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_djtestpoms_pb from "../proto/djtestpoms_pb";

interface IStoreManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createProduct: IStoreManagerService_ICreateProduct;
    editProduct: IStoreManagerService_IEditProduct;
    getProducts: IStoreManagerService_IGetProducts;
    searchProducts: IStoreManagerService_ISearchProducts;
    getCategories: IStoreManagerService_IGetCategories;
    createOrder: IStoreManagerService_ICreateOrder;
    changeOrderStatus: IStoreManagerService_IChangeOrderStatus;
    getOrders: IStoreManagerService_IGetOrders;
}

interface IStoreManagerService_ICreateProduct extends grpc.MethodDefinition<proto_djtestpoms_pb.CreateProductRequest, proto_djtestpoms_pb.Product> {
    path: "/djtestpoms.StoreManager/CreateProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_djtestpoms_pb.CreateProductRequest>;
    requestDeserialize: grpc.deserialize<proto_djtestpoms_pb.CreateProductRequest>;
    responseSerialize: grpc.serialize<proto_djtestpoms_pb.Product>;
    responseDeserialize: grpc.deserialize<proto_djtestpoms_pb.Product>;
}
interface IStoreManagerService_IEditProduct extends grpc.MethodDefinition<proto_djtestpoms_pb.ProductRequest, proto_djtestpoms_pb.Product> {
    path: "/djtestpoms.StoreManager/EditProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_djtestpoms_pb.ProductRequest>;
    requestDeserialize: grpc.deserialize<proto_djtestpoms_pb.ProductRequest>;
    responseSerialize: grpc.serialize<proto_djtestpoms_pb.Product>;
    responseDeserialize: grpc.deserialize<proto_djtestpoms_pb.Product>;
}
interface IStoreManagerService_IGetProducts extends grpc.MethodDefinition<proto_djtestpoms_pb.GetProductsRequest, proto_djtestpoms_pb.ProductStreamResponse> {
    path: "/djtestpoms.StoreManager/GetProducts";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_djtestpoms_pb.GetProductsRequest>;
    requestDeserialize: grpc.deserialize<proto_djtestpoms_pb.GetProductsRequest>;
    responseSerialize: grpc.serialize<proto_djtestpoms_pb.ProductStreamResponse>;
    responseDeserialize: grpc.deserialize<proto_djtestpoms_pb.ProductStreamResponse>;
}
interface IStoreManagerService_ISearchProducts extends grpc.MethodDefinition<proto_djtestpoms_pb.SearchProductsRequest, proto_djtestpoms_pb.ProductStreamResponse> {
    path: "/djtestpoms.StoreManager/SearchProducts";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_djtestpoms_pb.SearchProductsRequest>;
    requestDeserialize: grpc.deserialize<proto_djtestpoms_pb.SearchProductsRequest>;
    responseSerialize: grpc.serialize<proto_djtestpoms_pb.ProductStreamResponse>;
    responseDeserialize: grpc.deserialize<proto_djtestpoms_pb.ProductStreamResponse>;
}
interface IStoreManagerService_IGetCategories extends grpc.MethodDefinition<proto_djtestpoms_pb.EmptyRequest, proto_djtestpoms_pb.Category> {
    path: "/djtestpoms.StoreManager/GetCategories";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_djtestpoms_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<proto_djtestpoms_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<proto_djtestpoms_pb.Category>;
    responseDeserialize: grpc.deserialize<proto_djtestpoms_pb.Category>;
}
interface IStoreManagerService_ICreateOrder extends grpc.MethodDefinition<proto_djtestpoms_pb.CreateOrderRequest, proto_djtestpoms_pb.Order> {
    path: "/djtestpoms.StoreManager/CreateOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_djtestpoms_pb.CreateOrderRequest>;
    requestDeserialize: grpc.deserialize<proto_djtestpoms_pb.CreateOrderRequest>;
    responseSerialize: grpc.serialize<proto_djtestpoms_pb.Order>;
    responseDeserialize: grpc.deserialize<proto_djtestpoms_pb.Order>;
}
interface IStoreManagerService_IChangeOrderStatus extends grpc.MethodDefinition<proto_djtestpoms_pb.ChangeOrderStatusRequest, proto_djtestpoms_pb.Order> {
    path: "/djtestpoms.StoreManager/ChangeOrderStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_djtestpoms_pb.ChangeOrderStatusRequest>;
    requestDeserialize: grpc.deserialize<proto_djtestpoms_pb.ChangeOrderStatusRequest>;
    responseSerialize: grpc.serialize<proto_djtestpoms_pb.Order>;
    responseDeserialize: grpc.deserialize<proto_djtestpoms_pb.Order>;
}
interface IStoreManagerService_IGetOrders extends grpc.MethodDefinition<proto_djtestpoms_pb.EmptyRequest, proto_djtestpoms_pb.Order> {
    path: "/djtestpoms.StoreManager/GetOrders";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_djtestpoms_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<proto_djtestpoms_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<proto_djtestpoms_pb.Order>;
    responseDeserialize: grpc.deserialize<proto_djtestpoms_pb.Order>;
}

export const StoreManagerService: IStoreManagerService;

export interface IStoreManagerServer {
    createProduct: grpc.handleUnaryCall<proto_djtestpoms_pb.CreateProductRequest, proto_djtestpoms_pb.Product>;
    editProduct: grpc.handleUnaryCall<proto_djtestpoms_pb.ProductRequest, proto_djtestpoms_pb.Product>;
    getProducts: grpc.handleServerStreamingCall<proto_djtestpoms_pb.GetProductsRequest, proto_djtestpoms_pb.ProductStreamResponse>;
    searchProducts: grpc.handleServerStreamingCall<proto_djtestpoms_pb.SearchProductsRequest, proto_djtestpoms_pb.ProductStreamResponse>;
    getCategories: grpc.handleServerStreamingCall<proto_djtestpoms_pb.EmptyRequest, proto_djtestpoms_pb.Category>;
    createOrder: grpc.handleUnaryCall<proto_djtestpoms_pb.CreateOrderRequest, proto_djtestpoms_pb.Order>;
    changeOrderStatus: grpc.handleUnaryCall<proto_djtestpoms_pb.ChangeOrderStatusRequest, proto_djtestpoms_pb.Order>;
    getOrders: grpc.handleServerStreamingCall<proto_djtestpoms_pb.EmptyRequest, proto_djtestpoms_pb.Order>;
}

export interface IStoreManagerClient {
    createProduct(request: proto_djtestpoms_pb.CreateProductRequest, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Product) => void): grpc.ClientUnaryCall;
    createProduct(request: proto_djtestpoms_pb.CreateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Product) => void): grpc.ClientUnaryCall;
    createProduct(request: proto_djtestpoms_pb.CreateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Product) => void): grpc.ClientUnaryCall;
    editProduct(request: proto_djtestpoms_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Product) => void): grpc.ClientUnaryCall;
    editProduct(request: proto_djtestpoms_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Product) => void): grpc.ClientUnaryCall;
    editProduct(request: proto_djtestpoms_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Product) => void): grpc.ClientUnaryCall;
    getProducts(request: proto_djtestpoms_pb.GetProductsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.ProductStreamResponse>;
    getProducts(request: proto_djtestpoms_pb.GetProductsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.ProductStreamResponse>;
    searchProducts(request: proto_djtestpoms_pb.SearchProductsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.ProductStreamResponse>;
    searchProducts(request: proto_djtestpoms_pb.SearchProductsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.ProductStreamResponse>;
    getCategories(request: proto_djtestpoms_pb.EmptyRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.Category>;
    getCategories(request: proto_djtestpoms_pb.EmptyRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.Category>;
    createOrder(request: proto_djtestpoms_pb.CreateOrderRequest, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Order) => void): grpc.ClientUnaryCall;
    createOrder(request: proto_djtestpoms_pb.CreateOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Order) => void): grpc.ClientUnaryCall;
    createOrder(request: proto_djtestpoms_pb.CreateOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Order) => void): grpc.ClientUnaryCall;
    changeOrderStatus(request: proto_djtestpoms_pb.ChangeOrderStatusRequest, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Order) => void): grpc.ClientUnaryCall;
    changeOrderStatus(request: proto_djtestpoms_pb.ChangeOrderStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Order) => void): grpc.ClientUnaryCall;
    changeOrderStatus(request: proto_djtestpoms_pb.ChangeOrderStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Order) => void): grpc.ClientUnaryCall;
    getOrders(request: proto_djtestpoms_pb.EmptyRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.Order>;
    getOrders(request: proto_djtestpoms_pb.EmptyRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.Order>;
}

export class StoreManagerClient extends grpc.Client implements IStoreManagerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createProduct(request: proto_djtestpoms_pb.CreateProductRequest, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Product) => void): grpc.ClientUnaryCall;
    public createProduct(request: proto_djtestpoms_pb.CreateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Product) => void): grpc.ClientUnaryCall;
    public createProduct(request: proto_djtestpoms_pb.CreateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Product) => void): grpc.ClientUnaryCall;
    public editProduct(request: proto_djtestpoms_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Product) => void): grpc.ClientUnaryCall;
    public editProduct(request: proto_djtestpoms_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Product) => void): grpc.ClientUnaryCall;
    public editProduct(request: proto_djtestpoms_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Product) => void): grpc.ClientUnaryCall;
    public getProducts(request: proto_djtestpoms_pb.GetProductsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.ProductStreamResponse>;
    public getProducts(request: proto_djtestpoms_pb.GetProductsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.ProductStreamResponse>;
    public searchProducts(request: proto_djtestpoms_pb.SearchProductsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.ProductStreamResponse>;
    public searchProducts(request: proto_djtestpoms_pb.SearchProductsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.ProductStreamResponse>;
    public getCategories(request: proto_djtestpoms_pb.EmptyRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.Category>;
    public getCategories(request: proto_djtestpoms_pb.EmptyRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.Category>;
    public createOrder(request: proto_djtestpoms_pb.CreateOrderRequest, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Order) => void): grpc.ClientUnaryCall;
    public createOrder(request: proto_djtestpoms_pb.CreateOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Order) => void): grpc.ClientUnaryCall;
    public createOrder(request: proto_djtestpoms_pb.CreateOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Order) => void): grpc.ClientUnaryCall;
    public changeOrderStatus(request: proto_djtestpoms_pb.ChangeOrderStatusRequest, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Order) => void): grpc.ClientUnaryCall;
    public changeOrderStatus(request: proto_djtestpoms_pb.ChangeOrderStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Order) => void): grpc.ClientUnaryCall;
    public changeOrderStatus(request: proto_djtestpoms_pb.ChangeOrderStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_djtestpoms_pb.Order) => void): grpc.ClientUnaryCall;
    public getOrders(request: proto_djtestpoms_pb.EmptyRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.Order>;
    public getOrders(request: proto_djtestpoms_pb.EmptyRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_djtestpoms_pb.Order>;
}
