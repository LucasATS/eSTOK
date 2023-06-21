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
    const response = await api.get(
      `/api/admin/produtos?Inicial=${paginateProduct.initial}&Quantidade=${paginateProduct.limit}`
    );
    let total = Number(response.data.total) / Number(paginateProduct.limit);

    if (total < 1) {
      total = 1;
    }

    const paginateResult: Paginate<Product> = {
      response: response.data.data,
      totalItems: response.data.total,
      currentPage: 1,
      totalPages: Math.ceil(total),
      limit: paginateProduct.limit || 10,
      length: response.data.data.length,
      map: (arg0: (category: any) => { value: any; label: any; status: any }) => {
        return response.data.data.map(arg0);
      }
    };
    return paginateResult;
  }
}

export default new ProductService();
