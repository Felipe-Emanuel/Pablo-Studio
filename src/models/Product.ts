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
  PAC: {
    Codigo: string;
    Valor: string;
    PrazoEntrega: string;
    ValorSemAdicionais: string;
    ValorMaoPropria: string;
    ValorAvisoRecebimento: string;
    ValorValorDeclarado: string;
    EntregaDomiciliar: string;
    EntregaSabado: string;
    obsFim: string;
    Erro: string;
    MsgErro: string;
  };
  SEDEX: {
    Codigo: string;
    Valor: string;
    PrazoEntrega: string;
    ValorSemAdicionais: string;
    ValorMaoPropria: string;
    ValorAvisoRecebimento: string;
    ValorValorDeclarado: string;
    EntregaDomiciliar: string;
    EntregaSabado: string;
    obsFim: string;
    Erro: string;
    MsgErro: string;
  };
}
interface ChoisedService {
  deadline: string;
  price: string;
  serviceCode: string;
}

export interface ProductViewInfo {
  numberOfPurchases: number;
  numberOfViews: number;
}


export interface ProductView {
  id: number;
  id_produto: number;
  data_visualizacao: Date;
  hora_visualizacao: string;
  fonte_trafego: string;
  duracao_visualizacao: number;
  numero_compras: number;
  localizacao_geografica: string;
  }
export interface Product {
  id: number;
  marca:
    | "marvel"
    | "dc"
    | "disney"
    | "anime"
    | "starWars"
    | "games"
    | "statueDrawing"
    | "drawing"
    | "actionFigure";
  type: "3D" | "AF";
  guestProductId: string;
  freigthServiceChoise: string;
  count: number;
  productPrice: number;
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
  weight: number;
  productComments: ProductComment[];
  dimensions: PrecoPrazoRequest;
  choisedService: ChoisedService;
  freight: Freight;
  productViewInfo: ProductViewInfo
}

export interface RecomendedTable {
  id: number;
  type: "3D" | "AF";
  marvel: number;
  dc: number;
  disney: number;
  anime: number;
  starWars: number;
  games: number;
  statueDrawing: number;
  drawing: number;
  actionFigure: number;
}

export interface DataType {
  id: number;
  product: Product;
  comments: ProductComment;
  productDimensions: PrecoPrazoRequest;
}
