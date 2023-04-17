import { PrecoPrazoRequest } from "correios-brasil/dist";

export interface ProductComment {
  id: number;
  img: string;
  alt: string;
  date: string;
  userName: string;
  comment: string;
}

export interface Freight {
  serviceType: "";
  deadline: "";
  price: "";
}

export interface Product {
  id: number;
  guestProductId?: string;
  count: number;
  productPrice: number;
  productViews: number;
  productQtd: number;
  productName: string;
  images: string[];
  link: string;
  alt: string;
  isLiked: boolean;
  productDescription: string;
  cardDescription: string;
  initialPrice: number;
  initialTotal: number;
  SKU: string;
  isOnCart: boolean;
  productComments: ProductComment[];
  dimensions: PrecoPrazoRequest;
  freight: Freight;
}

export interface DataType {
  id: number;
  product: Product;
  comments: ProductComment;
  productDimensions: PrecoPrazoRequest;
}
