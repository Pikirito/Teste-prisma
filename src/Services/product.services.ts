import { prisma } from "../database/prisma";
import {
  TCreateProductBody,
  TUpdateProductBody,
} from "../interfaces/products.interface";

export class ProductServices {
  async create(body: TCreateProductBody) {
    return await prisma.product.create({ data: body });
  }

  async updateMany(storeId: number, data: TUpdateProductBody) {
    return await prisma.product.updateMany({
      where: { storeId: storeId },
      data,
    });
  }

  async deleteOne(productId: number) {
    return await prisma.product.delete({ where: { id: productId } });
  }
}
