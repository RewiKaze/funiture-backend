import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const enumCategoryType = {
  BEDROOM: "BEDROOM",
  BATHROOM: "BATHROOM",
  KITCHEN: "KITCHEN",
  LIVINGROOM: "LIVINGROOM",
  OTHER:"OTHER"
};

const ProductSchema = new Schema({
  name: { type: String, require: true, index: true  },
  description: { type: String, require: true, index: true  },
  slug: { type: String, require: true, index: true, unique:true },
  type: {
    type: String,
    require: true,
    enum: Object.keys(enumCategoryType),
    index: true,
    default:  enumCategoryType.OTHER
  },
  quantity: { type: String, require: true, index: true }, // Change to Integer
  price: { type: String, require: true, index: true }, // Change to Float
  imageUrl: { type: String, require: true, index: true  },
  timestamp: { type: Date, default: Date.now },
});

const baseOptions = {
  inputType: {
    removeFields: ["timestamp"],
  },
};
export const ProductModel = mongoose.model("Product", ProductSchema);

export const ProductTC = composeWithMongoose(ProductModel, baseOptions);

export default ProductModel;
