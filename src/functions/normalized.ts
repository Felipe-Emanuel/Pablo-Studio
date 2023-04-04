export function normalize() {

  function formatPrice(price: number | string) {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  return {
    formatPrice
  }
}

