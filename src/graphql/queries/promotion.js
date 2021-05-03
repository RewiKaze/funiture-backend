import { PromotionTC } from "../../models";

export const promotion = PromotionTC.getResolver("findById")
export const promotions = PromotionTC.getResolver("findMany");
