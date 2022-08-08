class Product {
  name: string;
  originalPrice: number;
  image: string;
  saleOffPrice: number;
  category: string;
  feature: string;
  longDesc: string;
  shortDesc: string;
  id: number;
  isDelete?: boolean;
  constructor(
    name: string,
    originalPrice: number,
    image: string,
    category: string,
    feature: string,
    longDesc: string,
    saleOffPrice: number,
    shortDesc: string,
    id: number
  ) {
    this.name = name;
    this.originalPrice = originalPrice;
    this.image = image;
    this.saleOffPrice = saleOffPrice;
    this.category = category;
    this.feature = feature;
    this.longDesc = longDesc;
    this.shortDesc = shortDesc;
    this.id = id;
  }
}

export default Product;
