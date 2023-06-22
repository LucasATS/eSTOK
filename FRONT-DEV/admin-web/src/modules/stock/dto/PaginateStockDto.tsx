interface PaginateStockDto {
  limit?: number;
  page?: number;
  isActive?: boolean;
  initial?: number;
  total?: number;
}

export default PaginateStockDto;
