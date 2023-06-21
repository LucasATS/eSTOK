interface PaginateProductDto {
  limit?: number;
  page?: number;
  isActive?: boolean;
  initial?: number;
  total?: number;
}

export default PaginateProductDto;
