import { schemaComposer } from "graphql-compose";
import { UserModel, UserTC } from "../../models";

export const user = schemaComposer.createResolver({
  name: "user",
  type: UserTC.getType(),
  resolve: async ({ context }) => {
    if (!context.user) {
      return null;
    }
    const { _id } = context.user;
    const user = await UserModel.findById(_id);
    return user;
  },
  projection:{_id: true}
});
export const userById = UserTC.getResolver("findById");
