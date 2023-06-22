import api from '../../_shared/services/api';
import { Paginate, Result } from '../../_shared/types/api.types';
import CreateLowStockDto from '../dto/LowStock/CreateLowStockDto';
import ResultLowStockDto from '../dto/LowStock/ResultLowStockDto';
import CreateStockDto from '../dto/Stock/CreateStockDto';
import PaginateStockDto from '../dto/Stock/PaginateStockDto';
import ResultStockDto from '../dto/Stock/ResultStockDto';
import Stock from '../models/Stock';

class StockService {
  public async createStock(createStock: CreateStockDto): Promise<Result<ResultStockDto>> {
    console.log('createStock', createStock);
    const response = await api.post(`/api/admin/estoque/movimentacao-entrada`, createStock);
    return response.data;
  }

  public async paginateStock({ ...paginateStock }: PaginateStockDto): Promise<Paginate<Stock>> {
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

  public async createLowStok(createLowStok: CreateLowStockDto): Promise<Result<ResultLowStockDto>> {
    console.log('createLowStok', createLowStok);
    const response = await api.post(`/api/admin/baixaestoques/create`, createLowStok);
    return response.data.data;
  }
}

export default new StockService();
