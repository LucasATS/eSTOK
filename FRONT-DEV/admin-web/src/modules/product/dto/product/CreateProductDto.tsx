interface CreateProductDto {
  name: string;
  category: string;
  unit: number;
  productType: string;
  tamanho: number;
  description?: string;
}

export default CreateProductDto;
