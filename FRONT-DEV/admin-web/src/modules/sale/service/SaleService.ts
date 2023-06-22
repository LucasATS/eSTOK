import api from '../../_shared/services/api';
import { Paginate, Result } from '../../_shared/types/api.types';
import CreateSaleDto from '../dto/CreateSaleDto';
import ResultSaleDto from '../dto/ResultSaleDto';
import Sale from '../models/Sale';

class SaleService {
  public async createSale(createSaleDto: CreateSaleDto): Promise<Result<ResultSaleDto>> {
    console.log(createSaleDto);
    const response = await api.post(`/api/admin/sale/create`, createSaleDto);
    return response.data;
  }

  public async paginateSale({ ...paginateSale }): Promise<Paginate<Sale>> {
    const response = await api.get(
      `/api/admin/sale?Inicial=${paginateSale.initial}&Quantidade=${paginateSale.limit}`
    );
    let total = Number(response.data.total) / Number(paginateSale.limit);

    if (total < 1) {
      total = 1;
    }

    const paginateResult: Paginate<Sale> = {
      response: response.data.data,
      totalItems: response.data.total,
      currentPage: 1,
      totalPages: Math.ceil(total),
      limit: paginateSale.limit || 10,
      length: response.data.data.length,
      map: (arg0: (category: any) => { value: any; label: any; status: any }) => {
        return response.data.data.map(arg0);
      }
    };
    return paginateResult;
  }
}

export default new SaleService();
