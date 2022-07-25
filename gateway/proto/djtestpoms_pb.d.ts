// package: djtestpoms
// file: proto/djtestpoms.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Product extends jspb.Message { 
    getId(): number;
    setId(value: number): Product;
    getName(): string;
    setName(value: string): Product;
    getColor(): string;
    setColor(value: string): Product;
    getPrice(): number;
    setPrice(value: number): Product;
    getCategoryId(): number;
    setCategoryId(value: number): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Product.AsObject;
    static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Product;
    static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
    export type AsObject = {
        id: number,
        name: string,
        color: string,
        price: number,
        categoryId: number,
    }
}

export class ProductRequest extends jspb.Message { 
    getApikey(): string;
    setApikey(value: string): ProductRequest;

    hasProduct(): boolean;
    clearProduct(): void;
    getProduct(): Product | undefined;
    setProduct(value?: Product): ProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProductRequest): ProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductRequest;
    static deserializeBinaryFromReader(message: ProductRequest, reader: jspb.BinaryReader): ProductRequest;
}

export namespace ProductRequest {
    export type AsObject = {
        apikey: string,
        product?: Product.AsObject,
    }
}

export class CreateProductRequest extends jspb.Message { 
    getApikey(): string;
    setApikey(value: string): CreateProductRequest;
    getName(): string;
    setName(value: string): CreateProductRequest;
    getColor(): string;
    setColor(value: string): CreateProductRequest;
    getPrice(): number;
    setPrice(value: number): CreateProductRequest;
    getCategoryId(): number;
    setCategoryId(value: number): CreateProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateProductRequest): CreateProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateProductRequest;
    static deserializeBinaryFromReader(message: CreateProductRequest, reader: jspb.BinaryReader): CreateProductRequest;
}

export namespace CreateProductRequest {
    export type AsObject = {
        apikey: string,
        name: string,
        color: string,
        price: number,
        categoryId: number,
    }
}

export class ProductStreamResponse extends jspb.Message { 

    hasProduct(): boolean;
    clearProduct(): void;
    getProduct(): Product | undefined;
    setProduct(value?: Product): ProductStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProductStreamResponse): ProductStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductStreamResponse;
    static deserializeBinaryFromReader(message: ProductStreamResponse, reader: jspb.BinaryReader): ProductStreamResponse;
}

export namespace ProductStreamResponse {
    export type AsObject = {
        product?: Product.AsObject,
    }
}

export class GetProductsRequest extends jspb.Message { 
    getApikey(): string;
    setApikey(value: string): GetProductsRequest;
    clearIdsList(): void;
    getIdsList(): Array<number>;
    setIdsList(value: Array<number>): GetProductsRequest;
    addIds(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductsRequest): GetProductsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductsRequest;
    static deserializeBinaryFromReader(message: GetProductsRequest, reader: jspb.BinaryReader): GetProductsRequest;
}

export namespace GetProductsRequest {
    export type AsObject = {
        apikey: string,
        idsList: Array<number>,
    }
}

export class SearchProductsRequest extends jspb.Message { 
    getApikey(): string;
    setApikey(value: string): SearchProductsRequest;
    getName(): string;
    setName(value: string): SearchProductsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchProductsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchProductsRequest): SearchProductsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchProductsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchProductsRequest;
    static deserializeBinaryFromReader(message: SearchProductsRequest, reader: jspb.BinaryReader): SearchProductsRequest;
}

export namespace SearchProductsRequest {
    export type AsObject = {
        apikey: string,
        name: string,
    }
}

export class Category extends jspb.Message { 
    getId(): number;
    setId(value: number): Category;
    getName(): string;
    setName(value: string): Category;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category.AsObject;
    static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category;
    static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
    export type AsObject = {
        id: number,
        name: string,
    }
}

export class EmptyRequest extends jspb.Message { 
    getApikey(): string;
    setApikey(value: string): EmptyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyRequest;
    static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
    export type AsObject = {
        apikey: string,
    }
}

export class Order extends jspb.Message { 
    getId(): number;
    setId(value: number): Order;
    getStatus(): OrderStatus;
    setStatus(value: OrderStatus): Order;

    getItemsMap(): jspb.Map<number, number>;
    clearItemsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Order.AsObject;
    static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Order;
    static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
    export type AsObject = {
        id: number,
        status: OrderStatus,

        itemsMap: Array<[number, number]>,
    }
}

export class CreateOrderRequest extends jspb.Message { 
    getApikey(): string;
    setApikey(value: string): CreateOrderRequest;

    getItemsMap(): jspb.Map<number, number>;
    clearItemsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrderRequest): CreateOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrderRequest;
    static deserializeBinaryFromReader(message: CreateOrderRequest, reader: jspb.BinaryReader): CreateOrderRequest;
}

export namespace CreateOrderRequest {
    export type AsObject = {
        apikey: string,

        itemsMap: Array<[number, number]>,
    }
}

export class ChangeOrderStatusRequest extends jspb.Message { 
    getApikey(): string;
    setApikey(value: string): ChangeOrderStatusRequest;
    getOrderId(): number;
    setOrderId(value: number): ChangeOrderStatusRequest;
    getStatus(): OrderStatus;
    setStatus(value: OrderStatus): ChangeOrderStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeOrderStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeOrderStatusRequest): ChangeOrderStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeOrderStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeOrderStatusRequest;
    static deserializeBinaryFromReader(message: ChangeOrderStatusRequest, reader: jspb.BinaryReader): ChangeOrderStatusRequest;
}

export namespace ChangeOrderStatusRequest {
    export type AsObject = {
        apikey: string,
        orderId: number,
        status: OrderStatus,
    }
}

export enum OrderStatus {
    CREATED = 0,
    READY_TO_SHIP = 1,
    SHIPPED = 2,
    DELIVERED = 3,
    CANCELLED = 4,
}
