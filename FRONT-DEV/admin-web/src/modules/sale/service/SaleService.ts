import api from '../../_shared/services/api';
import { Result } from '../../_shared/types/api.types';
import CreateSaleDto from '../dto/CreateSaleDto';
import ResultSaleDto from '../dto/ResultSaleDto';

class SaleService {
  public async createSale(
    // função para chamar a rota no backend
    createSaleDto: CreateSaleDto
  ): Promise<Result<ResultSaleDto>> {
    console.log(createSaleDto);
    const response = await api.post(`/api/admin/sale/create`, createSaleDto);
    return response.data;
  }
}

export default new SaleService();
