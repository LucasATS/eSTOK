import api from '../../_shared/services/api';
import { Paginate, Result } from '../../_shared/types/api.types';
import CreateProductDto from '../dto/product/CreateProductDto';
import PaginateProductDto from '../dto/product/PaginateProductDto';
import ResultProductDto from '../dto/product/ResultProductDto';
import Product from '../models/Product';

class ProductService {
  public async createProduct(
    createProductDto: CreateProductDto
  ): Promise<Result<ResultProductDto>> {
    console.log(createProductDto);
    const response = await api.post(`/api/admin/produtos/create`, createProductDto);
    return response.data;
  }

  public async paginateProduct({
    ...paginateProduct
  }: PaginateProductDto): Promise<Paginate<Product>> {
    const response = await api.get(`/api/admin/produtos`);
    return response.data.data;
  }
}

export default new ProductService();
