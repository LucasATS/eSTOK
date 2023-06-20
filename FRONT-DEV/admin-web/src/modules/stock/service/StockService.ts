import queryString from 'query-string';
import api from '../../_shared/services/api';
import { Paginate, Result } from '../../_shared/types/api.types';
import PaginateStockDto from '../dto/PaginateStockDto';
import ResultStockDto from '../dto/ResultStockDto';
import Stock from '../models/Stock';
import CreateStockDto from '../dto/CreateStockDto';

class StockService {
  public async createStock(createStock: CreateStockDto): Promise<Result<ResultStockDto>> {
    const response = await api.post(`/api/admin/estoque/movimentacao-entrada`, createStock);
    console.log('response', response.statusText);
    return response.data;
  }

  public async paginateStock({ ...paginateStock }: PaginateStockDto): Promise<Paginate<Stock>> {
    const queryParams = queryString.stringify(paginateStock);
    const response = await api.get(`/api/admin/estoque?${queryParams}`);
    return response.data.data;
  }
}

export default new StockService();
