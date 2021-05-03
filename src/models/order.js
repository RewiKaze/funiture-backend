import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const StatusType = {
    INCOMPLETE: "INCOMPLETE",
    COMPLETED: "COMPLETED",
    CANCEL: "CANCEL",
};

const OrderSchema = new Schema({
    // name: { type: String, require: true, index: true  },
    // address: { type: String, require: true, index: true },
    // email: { type: String, require: true, index: true},
    // tel: { type: String, require: true, index: true},
    userID: {
        type: String,
        index: true,
        ref: "User",
    },
    promotionID: {
        type: String,
        index: true,
        ref: "Promotion",
    },
   productID: {
         type: String,
         index: true,
         ref: "Product",
     },
   //  productID: [
   //      {
   //          id:{
   //              type: String,
   //              index: true,
   //              ref: "Product",
   //          }
   //      }
   //  ],
    timestamp: {
        type: Date,
        default: Date.now,
    },
    subtotal: {
        type: String,
        required: true,
    },
    total: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        enum: Object.keys(StatusType),
        default: StatusType.INCOMPLETE,
    },

});

export const OrderModel = mongoose.model("Order", OrderSchema);

export const OrderTC = composeWithMongoose(OrderModel);

export default OrderModel;