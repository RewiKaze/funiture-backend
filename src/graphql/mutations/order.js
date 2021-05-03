import {OrderTC} from '../../models'

export const createOrder = OrderTC.getResolver('createOne')
export const updateOrder = OrderTC.getResolver("updateById");
export const removeOrderById = OrderTC.getResolver("removeOne");