import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/product-seed-data';

@Injectable()
export class SeedService {
  constructor(private productSrv: ProductsService) {}

  public async runSeed() {
    await this.insertNewProducts();
    return 'RUN SEDDD';
  }

  private async insertNewProducts() {
    await this.productSrv.deleteAllproducts();

    const products = initialData.products;
    const insertPromises = [];

    products.forEach((product) => {
      insertPromises.push(this.productSrv.create(product));
    });

    await Promise.all(insertPromises);
    return true;
  }
}
