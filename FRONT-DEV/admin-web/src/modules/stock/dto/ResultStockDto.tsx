interface ResultStockDto {
  id: string;
  product: string;
  category: string;
  quantity: number;
  price: number;
  datePurchase: Date;
  dateExpiration: Date;
  batch: number;
}

export default ResultStockDto;
