// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_djtestpoms_pb = require('../proto/djtestpoms_pb.js');

function serialize_djtestpoms_Category(arg) {
  if (!(arg instanceof proto_djtestpoms_pb.Category)) {
    throw new Error('Expected argument of type djtestpoms.Category');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_djtestpoms_Category(buffer_arg) {
  return proto_djtestpoms_pb.Category.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_djtestpoms_ChangeOrderStatusRequest(arg) {
  if (!(arg instanceof proto_djtestpoms_pb.ChangeOrderStatusRequest)) {
    throw new Error('Expected argument of type djtestpoms.ChangeOrderStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_djtestpoms_ChangeOrderStatusRequest(buffer_arg) {
  return proto_djtestpoms_pb.ChangeOrderStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_djtestpoms_CreateOrderRequest(arg) {
  if (!(arg instanceof proto_djtestpoms_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type djtestpoms.CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_djtestpoms_CreateOrderRequest(buffer_arg) {
  return proto_djtestpoms_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_djtestpoms_CreateProductRequest(arg) {
  if (!(arg instanceof proto_djtestpoms_pb.CreateProductRequest)) {
    throw new Error('Expected argument of type djtestpoms.CreateProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_djtestpoms_CreateProductRequest(buffer_arg) {
  return proto_djtestpoms_pb.CreateProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_djtestpoms_EmptyRequest(arg) {
  if (!(arg instanceof proto_djtestpoms_pb.EmptyRequest)) {
    throw new Error('Expected argument of type djtestpoms.EmptyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_djtestpoms_EmptyRequest(buffer_arg) {
  return proto_djtestpoms_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_djtestpoms_GetProductsRequest(arg) {
  if (!(arg instanceof proto_djtestpoms_pb.GetProductsRequest)) {
    throw new Error('Expected argument of type djtestpoms.GetProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_djtestpoms_GetProductsRequest(buffer_arg) {
  return proto_djtestpoms_pb.GetProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_djtestpoms_Order(arg) {
  if (!(arg instanceof proto_djtestpoms_pb.Order)) {
    throw new Error('Expected argument of type djtestpoms.Order');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_djtestpoms_Order(buffer_arg) {
  return proto_djtestpoms_pb.Order.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_djtestpoms_Product(arg) {
  if (!(arg instanceof proto_djtestpoms_pb.Product)) {
    throw new Error('Expected argument of type djtestpoms.Product');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_djtestpoms_Product(buffer_arg) {
  return proto_djtestpoms_pb.Product.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_djtestpoms_ProductRequest(arg) {
  if (!(arg instanceof proto_djtestpoms_pb.ProductRequest)) {
    throw new Error('Expected argument of type djtestpoms.ProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_djtestpoms_ProductRequest(buffer_arg) {
  return proto_djtestpoms_pb.ProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_djtestpoms_ProductStreamResponse(arg) {
  if (!(arg instanceof proto_djtestpoms_pb.ProductStreamResponse)) {
    throw new Error('Expected argument of type djtestpoms.ProductStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_djtestpoms_ProductStreamResponse(buffer_arg) {
  return proto_djtestpoms_pb.ProductStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_djtestpoms_SearchProductsRequest(arg) {
  if (!(arg instanceof proto_djtestpoms_pb.SearchProductsRequest)) {
    throw new Error('Expected argument of type djtestpoms.SearchProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_djtestpoms_SearchProductsRequest(buffer_arg) {
  return proto_djtestpoms_pb.SearchProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var StoreManagerService = exports.StoreManagerService = {
  createProduct: {
    path: '/djtestpoms.StoreManager/CreateProduct',
    requestStream: false,
    responseStream: false,
    requestType: proto_djtestpoms_pb.CreateProductRequest,
    responseType: proto_djtestpoms_pb.Product,
    requestSerialize: serialize_djtestpoms_CreateProductRequest,
    requestDeserialize: deserialize_djtestpoms_CreateProductRequest,
    responseSerialize: serialize_djtestpoms_Product,
    responseDeserialize: deserialize_djtestpoms_Product,
  },
  editProduct: {
    path: '/djtestpoms.StoreManager/EditProduct',
    requestStream: false,
    responseStream: false,
    requestType: proto_djtestpoms_pb.ProductRequest,
    responseType: proto_djtestpoms_pb.Product,
    requestSerialize: serialize_djtestpoms_ProductRequest,
    requestDeserialize: deserialize_djtestpoms_ProductRequest,
    responseSerialize: serialize_djtestpoms_Product,
    responseDeserialize: deserialize_djtestpoms_Product,
  },
  getProducts: {
    path: '/djtestpoms.StoreManager/GetProducts',
    requestStream: false,
    responseStream: true,
    requestType: proto_djtestpoms_pb.GetProductsRequest,
    responseType: proto_djtestpoms_pb.ProductStreamResponse,
    requestSerialize: serialize_djtestpoms_GetProductsRequest,
    requestDeserialize: deserialize_djtestpoms_GetProductsRequest,
    responseSerialize: serialize_djtestpoms_ProductStreamResponse,
    responseDeserialize: deserialize_djtestpoms_ProductStreamResponse,
  },
  searchProducts: {
    path: '/djtestpoms.StoreManager/SearchProducts',
    requestStream: false,
    responseStream: true,
    requestType: proto_djtestpoms_pb.SearchProductsRequest,
    responseType: proto_djtestpoms_pb.ProductStreamResponse,
    requestSerialize: serialize_djtestpoms_SearchProductsRequest,
    requestDeserialize: deserialize_djtestpoms_SearchProductsRequest,
    responseSerialize: serialize_djtestpoms_ProductStreamResponse,
    responseDeserialize: deserialize_djtestpoms_ProductStreamResponse,
  },
  getCategories: {
    path: '/djtestpoms.StoreManager/GetCategories',
    requestStream: false,
    responseStream: true,
    requestType: proto_djtestpoms_pb.EmptyRequest,
    responseType: proto_djtestpoms_pb.Category,
    requestSerialize: serialize_djtestpoms_EmptyRequest,
    requestDeserialize: deserialize_djtestpoms_EmptyRequest,
    responseSerialize: serialize_djtestpoms_Category,
    responseDeserialize: deserialize_djtestpoms_Category,
  },
  createOrder: {
    path: '/djtestpoms.StoreManager/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_djtestpoms_pb.CreateOrderRequest,
    responseType: proto_djtestpoms_pb.Order,
    requestSerialize: serialize_djtestpoms_CreateOrderRequest,
    requestDeserialize: deserialize_djtestpoms_CreateOrderRequest,
    responseSerialize: serialize_djtestpoms_Order,
    responseDeserialize: deserialize_djtestpoms_Order,
  },
  changeOrderStatus: {
    path: '/djtestpoms.StoreManager/ChangeOrderStatus',
    requestStream: false,
    responseStream: false,
    requestType: proto_djtestpoms_pb.ChangeOrderStatusRequest,
    responseType: proto_djtestpoms_pb.Order,
    requestSerialize: serialize_djtestpoms_ChangeOrderStatusRequest,
    requestDeserialize: deserialize_djtestpoms_ChangeOrderStatusRequest,
    responseSerialize: serialize_djtestpoms_Order,
    responseDeserialize: deserialize_djtestpoms_Order,
  },
  getOrders: {
    path: '/djtestpoms.StoreManager/GetOrders',
    requestStream: false,
    responseStream: true,
    requestType: proto_djtestpoms_pb.EmptyRequest,
    responseType: proto_djtestpoms_pb.Order,
    requestSerialize: serialize_djtestpoms_EmptyRequest,
    requestDeserialize: deserialize_djtestpoms_EmptyRequest,
    responseSerialize: serialize_djtestpoms_Order,
    responseDeserialize: deserialize_djtestpoms_Order,
  },
};

exports.StoreManagerClient = grpc.makeGenericClientConstructor(StoreManagerService);
