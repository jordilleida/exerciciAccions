import { Builder } from './Builder';
import Product from './Product';

export default class ConcreteBuilder implements Builder {
  private product!: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  /** All production steps work with the same product instance */
  public producePartA(): void {
    this.product.parts.push('PartA1');
  }

  public producePartB(): void {
    this.product.parts.push('PartB1');
  }

  producePartC(): void {
    this.product.parts.push('PartC1');
  }

  public getProduct() : Product {
    const result = this.product;
    this.reset();
    return result;
  }
}
