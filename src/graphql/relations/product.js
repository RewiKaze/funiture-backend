import moment from "moment";
import {ProductModel,PromotionModel, ProductTC, PromotionTC} from "../../models";

import { schemaComposer } from "graphql-compose";


const promotionSale = schemaComposer.createResolver({
  name:'promotionsale',
  type:'String',
  args:{
    productId: 'String!',
    discount:'Float!'
  },
  resolve:(async ({source, args, context, info}) => {
    const product = await ProductModel.findById(args.productId).exec()
    const promotion = await PromotionModel.findById(args.promotionID).exec()

    if(!product && !promotion) return null
    return  (parseFloat(product.price)-parseFloat(product.price)*parseFloat(args.discount/100)).toString()
  })
})

ProductTC.addFields({
  timestamp: {
    type: "String",
    resolve: (source) => moment(source.timestamp).fromNow(),
    projection: { timestamp: 1 },
  },
});

PromotionTC.addFields({
  timestamp: {
    type: "String",
    resolve: (source) => moment(source.timestamp).fromNow(),
    projection: { timestamp: 1 },
  },
});


PromotionTC.addRelation("product", {
  resolver: () => ProductTC.getResolver("findById"),
  prepareArgs: {
    _id: (source) => source.productId,
  },
  projection: { productId: true },
});

PromotionTC.addRelation("total",{
  resolver: () => promotionSale,
  prepareArgs:{
    productId : (source) => source.productId,
    discount: (source) => source.discount
  },
projection:{productID: true, discount: true}
})

