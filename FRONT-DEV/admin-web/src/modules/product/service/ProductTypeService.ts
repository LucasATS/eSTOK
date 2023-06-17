import queryString from 'query-string';
import api from '../../_shared/services/api';
import { Paginate, Result } from '../../_shared/types/api.types';
import CreateProductTypeDto from '../dto/CreateProductTypeDto';
import PaginateProductTypeDto from '../dto/PaginateProductTypeDto';
import ResultProductTypeDto from '../dto/ResultProductTypeDto';
import ProductType from '../models/ProductType';

class ProductTypeService {
  public async createProductType(
    createProductTypeDto: CreateProductTypeDto
  ): Promise<Result<ResultProductTypeDto>> {
    const response = await api.post(`/api/admin/tipos-de-produto/create`, createProductTypeDto);
    console.log('response', response.statusText);
    return response.data;
  }

  public async paginateProduct({
    ...paginateProductType
  }: PaginateProductTypeDto): Promise<Paginate<ProductType>> {
    const queryParams = queryString.stringify(paginateProductType);
    const response = await api.get(`/api/admin/tipos-de-produto?${queryParams}`);
    return response.data.data;
  }
}

export default new ProductTypeService();
