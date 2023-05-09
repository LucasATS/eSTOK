import queryString from 'query-string';
import { PaginateDto } from '../../_shared/dto/PaginateDto';
import api from '../../_shared/services/api';
import { Paginate } from '../../_shared/types/api.types';
import Produto from '../models/Produto';

class ProductService {
  public async paginateProduct({ ...paginateProduct }: PaginateDto): Promise<Paginate<Produto>> {
    const queryParams = queryString.stringify(paginateProduct);
    const response = await api.get(`/${queryParams}`);
    return response.data.data;
  }
}

export default new ProductService();
