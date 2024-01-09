import { User } from "./user.model.js";


export class UserService {

  static async create(data) {
    return await User.create(data);
  }

  static async findOneByEmail(email){
    return await User.findOne({
      where: {
        email,
        status: true
      }
    })
  }

  static async findOne(id) {
    return await User.findOne({
      where:{
        id,
        status: 'true'
      }
    })
  }

  static async updateUser(user, data) {
    return await user.update(data);
  }

  static async deleteUser(user) {
    return await user.update({ status: false });
  }

}
