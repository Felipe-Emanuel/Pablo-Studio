import { Product } from "@models/Product";

//PRODUCT MOCKED
export const productMocked: Product[] = [
  {
    id: 0,
    guestProductId: '',
    alt: "Imagem do Produto",
    cardDescription: "Laptop de alta performance com tela de 15 polegadas",
    count: 0,
    initialPrice: 3500,
    initialTotal: 0,
    isLiked: false,
    link: "/products/0",
    productDescription:
      "O Laptop XYZ é um dispositivo de alta performance com tela de 15 polegadas e processador Intel Core i7 de 10ª geração. Ele possui 16GB de memória RAM e um SSD de 512GB, oferecendo armazenamento rápido e confiável para suas necessidades. Além disso, sua placa de vídeo NVIDIA GeForce RTX 3070 permite que você execute jogos e aplicativos gráficos exigentes sem problemas. O Laptop XYZ também vem equipado com uma bateria de longa duração e um teclado retroiluminado para uma experiência de digitação confortável em ambientes com pouca luz.",
    productName: "Laptop XYZ",
    productPrice: 0,
    productQtd: 1,
    productViews: 0,
    images: [
      "https://picsum.photos/seed/1/800/600",
      "https://picsum.photos/seed/2/800/600",
      "https://picsum.photos/seed/3/800/600",
      "https://picsum.photos/seed/4/800/600",
      "https://picsum.photos/seed/5/800/600",
    ],
    productComments: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/men/81.jpg",
        alt: "Foto do Usuário",
        date: "11.04.2023",
        userName: "João",
        comment:
          "Eu comprei este laptop para jogar meus jogos favoritos e estou muito satisfeito com ele. A placa de vídeo NVIDIA GeForce RTX 3070 é capaz de executar os jogos mais recentes sem problemas e o teclado retroiluminado é ótimo para jogar em ambientes com pouca luz. Eu recomendo este laptop para qualquer pessoa que esteja procurando por um dispositivo de alta performance.",
      },
    ],
    dimensions: {
      sCepOrigem: "03582-040",
      sCepDestino: "35240-000",
      nVlPeso: "2",
      nCdFormato: "1",
      nVlComprimento: "40",
      nVlAltura: "30",
      nVlLargura: "20",
      nCdServico: ["04510", "04014"],
      nVlDiametro: "0",
    },
    isOnCart: false,
    SKU: "LPT-XYZ-15-16-512-3070",
    freight: {
      serviceType: "",
      deadline: "",
      price: "",
    }
  },
  {
    id: 1,
    guestProductId: '',
    alt: "b",
    cardDescription: "Um produto premium de alta qualidade",
    count: 0,
    initialPrice: 2500,
    initialTotal: 0,
    isLiked: false,
    link: "/products/1",
    productDescription:
      "Este é um produto premium feito com materiais da mais alta qualidade. Possui um design elegante e sofisticado, com acabamentos impecáveis que garantem durabilidade e resistência. Ideal para quem busca conforto, praticidade e estilo.",
    productName: "Produto Premium",
    productPrice: 0,
    productQtd: 1,
    productViews: 0,
    productComments: [
      {
        id: 0,
        img: "https://randomuser.me/api/portraits/women/10.jpg",
        alt: "b",
        date: "10/04/2023",
        userName: "Maria",
        comment:
          "Comprei este produto e fiquei extremamente satisfeita com a qualidade e o acabamento. Sem dúvida, um dos melhores investimentos que já fiz.",
      },
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/men/21.jpg",
        alt: "b",
        date: "09/04/2023",
        userName: "José",
        comment:
          "Produto de primeira linha. Recomendo a todos que buscam o melhor em qualidade e durabilidade.",
      },
    ],
    images: [
      "https://picsum.photos/seed/2/800/600",
      "https://picsum.photos/seed/1/800/600",
      "https://picsum.photos/seed/3/800/600",
      "https://picsum.photos/seed/4/800/600",
      "https://picsum.photos/seed/5/800/600",
    ],
    dimensions: {
      sCepOrigem: "03582-040",
      sCepDestino: "48918-900",
      nVlPeso: "1",
      nCdFormato: "1",
      nVlComprimento: "20",
      nVlAltura: "15",
      nVlLargura: "10",
      nCdServico: ["04510", "04014"],
      nVlDiametro: "0",
    },
    isOnCart: false,
    SKU: "PRM-001-02",
    freight: {
      serviceType: "",
      deadline: "",
      price: "",
    }
  },
  {
    id: 2,
    guestProductId: '',
    alt: "b",
    cardDescription: "a descrição do produto é incrível 2",
    count: 0,
    initialPrice: 79.99,
    initialTotal: 0,
    isLiked: false,
    link: "/products/2",
    productDescription:
      "This is a high-quality wireless Bluetooth speaker with exceptional sound quality and a stylish design. It features a powerful bass and clear treble, making it perfect for any music lover. The speaker has a long battery life, and can be easily connected to any device through Bluetooth or an AUX cable. It's also lightweight and easy to carry, making it the perfect choice for outdoor activities.",
    productName: "Bluetooth Speaker",
    productPrice: 0,
    productQtd: 1,
    productViews: 0,
    productComments: [
      {
        id: 0,
        img: "https://randomuser.me/api/portraits/women/35.jpg",
        alt: "a",
        date: "02.02.2023",
        userName: "John",
        comment:
          "I absolutely love this speaker! The sound quality is amazing and it's so easy to use. I highly recommend it to anyone who's looking for a high-quality wireless speaker.",
      },
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/men/22.jpg",
        alt: "a",
        date: "01.02.2023",
        userName: "Jane",
        comment:
          "I purchased this speaker for a party and it was a huge hit! Everyone loved the sound quality and the stylish design. I would definitely recommend it to anyone who's looking for a great speaker.",
      },
    ],
    images: [
      "https://picsum.photos/seed/3/800/600",
      "https://picsum.photos/seed/2/800/600",
      "https://picsum.photos/seed/1/800/600",
      "https://picsum.photos/seed/4/800/600",
      "https://picsum.photos/seed/5/800/600",
    ],
    dimensions: {
      sCepOrigem: "03582-040",
      sCepDestino: "89654-000",
      nVlPeso: "1.5",
      nCdFormato: "1",
      nVlComprimento: "20",
      nVlAltura: "10",
      nVlLargura: "15",
      nCdServico: ["04510", "04014"],
      nVlDiametro: "0",
    },
    isOnCart: false,
    SKU: "LPM-125-RMj",
    freight: {
      serviceType: "",
      deadline: "",
      price: "",
    }
  },
];
