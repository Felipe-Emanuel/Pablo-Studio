import { Product } from "@models/Product";

export function Methods() {
  function reducePrice(product: Product[], serviceType?: "PAC" | "SEDEX") {
    const prices = product.map((item: Product) =>
      serviceType ? item.freight[serviceType].Valor : item.choisedService.price
    );
    const convertedPrices = prices?.map((price: string) =>
      price !== "" ? parseFloat(price.replace(",", ".")) : 0
    );
    const totalPrice = convertedPrices.reduce((acc, cur) => acc + cur, 0);

    return totalPrice;
  }

  return {
    reducePrice,
  };
}
