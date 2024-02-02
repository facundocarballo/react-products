export class Product {
  id: string;
  name: string;
  photo_url: string;
  description: string;
  price: number;

  constructor(
    id: string,
    name: string,
    photo_url: string,
    description: string,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.photo_url = photo_url;
    this.description = description;
    this.price = price;
  }
}
