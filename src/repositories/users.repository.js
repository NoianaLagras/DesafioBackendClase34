import { UsersManager } from "../dao/factory.js";
import { logger } from "../config/logger.js";
class UsersRepository {
  constructor() {
    this.dao = new UsersManager();
  }
  async createOne(user){
    try {
      return await this.dao.createOne(user)
    } catch (error) {
      logger.error(`Error al crear user: ${error}`);
      
    }
  }
  async findByEmail(email) {
    try {
      return await this.dao.findByEmail(email);
    } catch (error) {
      logger.error(`Error al encontrar email ${error}`);
    }
  }
  async findByEmailAndPopulateOrders(email) {
    try {
      return await this.dao.findByEmailAndPopulateOrders(email);
    } catch (error) {
      logger.error(`Error al encontrar email ${error}`);
      
    }
  }
  
}

export const usersRepository = new UsersRepository();
