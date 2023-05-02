export function normalize() {

  function formatPrice(price: number | undefined | string) {
    const numericPrice = typeof price === 'string' ? parseFloat(price.replace(',', '.')) : price;
    return numericPrice?.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  return {
    formatPrice
  }
}

