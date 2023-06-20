import queryString from 'query-string';
import api from '../../_shared/services/api';
import { Paginate, Result } from '../../_shared/types/api.types';
import CreateSaleDto from '../dto/CreateSaleDto';
import ResultSaleDto from '../dto/ResultSaleDto';
import PaginateSaleDto from '../dto/PaginateSaleDto';
import Sale from '../models/Sale';

class SaleService {
  public async createSale(
    // função para chamar a rota no backend
    createSaleDto: CreateSaleDto
  ): Promise<Result<ResultSaleDto>> {
    console.log(createSaleDto);
    const response = await api.post(`/api/admin/sale/create`, createSaleDto);
    return response.data;
  }

  public async paginateSale({ ...paginateSale }: PaginateSaleDto): Promise<Paginate<Sale>> {
    const queryParams = queryString.stringify(paginateSale);
    const response = await api.get(`/api/admin/sale?${queryParams}`);
    return response.data.data;
  }
}

export default new SaleService();
