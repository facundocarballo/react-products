import { Product } from "../types/Product";

export const URL_API = "http://localhost:8000/product";


export function CreateProducts(data: any[]): Product[] {
  let products: Product[] = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    products.push(
      new Product(
        element.id,
        element.name,
        element.photo_url,
        element.description,
        element.price
      )
    );
  }
  return products;
}
