import { ProductTC } from "../../models";

export const productID = ProductTC.getResolver("findById")
export const product = ProductTC.getResolver("findOne")
export const products = ProductTC.getResolver("findMany");
