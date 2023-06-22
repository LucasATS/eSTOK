import api from '../../_shared/services/api';
import { Paginate, Result } from '../../_shared/types/api.types';
import CreateStockDto from '../dto/CreateStockDto';
import ResultStockDto from '../dto/ResultStockDto';
import Stock from '../models/Stock';

class StockService {
  public async createStock(createStock: CreateStockDto): Promise<Result<ResultStockDto>> {
    console.log('createStock', createStock);
    const response = await api.post(`/api/admin/estoque/movimentacao-entrada`, createStock);
    return response.data;
  }

  public async paginateStock({ ...paginateStock }): Promise<Paginate<Stock>> {
    const response = await api.get(
      `/api/admin/estoque?Inicial=${paginateStock.initial}&Quantidade=${paginateStock.limit}`
    );
    let total = Number(response.data.total) / Number(paginateStock.limit);

    if (total < 1) {
      total = 1;
    }

    const paginateResult: Paginate<Stock> = {
      response: response.data.data,
      totalItems: response.data.total,
      currentPage: 1,
      totalPages: Math.ceil(total),
      limit: paginateStock.limit || 10,
      length: response.data.data.length,
      map: (arg0: (category: any) => { value: any; label: any; status: any }) => {
        return response.data.data.map(arg0);
      }
    };
    return paginateResult;
  }
}

export default new StockService();
