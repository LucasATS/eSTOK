import api from '../../_shared/services/api';
import { Paginate, Result } from '../../_shared/types/api.types';
import CreateProductTypeDto from '../dto/productType/CreateProductTypeDto';
import PaginateProductTypeDto from '../dto/productType/PaginateProductTypeDto';
import ResultProductTypeDto from '../dto/productType/ResultProductTypeDto';
import ProductType from '../models/ProductType';

class ProductTypeService {
  public async createProductType(
    createProductTypeDto: CreateProductTypeDto
  ): Promise<Result<ResultProductTypeDto>> {
    const response = await api.post(`/api/admin/tipos-de-produto/create`, createProductTypeDto);
    return response.data;
  }

  public async paginateProductType({
    ...paginateProductType
  }: PaginateProductTypeDto): Promise<Paginate<ProductType>> {
    const response = await api.get(`/api/admin/tipos-de-produto`);
    return response.data.data;
  }
}

export default new ProductTypeService();
