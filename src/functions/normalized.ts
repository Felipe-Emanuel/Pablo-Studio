export function normalize() {

  function formatPrice(price: number | string) {
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

