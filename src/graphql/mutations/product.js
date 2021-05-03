import { ProductTC } from "../../models";

export const createProduct = ProductTC.getResolver("createOne");
export const updateProduct = ProductTC.getResolver("updateById");
export const removeProductById = ProductTC.getResolver("removeOne");
