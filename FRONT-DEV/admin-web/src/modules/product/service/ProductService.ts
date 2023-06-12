import api from '../../_shared/services/api';
import { Result } from '../../_shared/types/api.types';
import CreateProductDto from '../dto/CreateProductDto';
import ResultProductDto from '../dto/ResultProductDto';

class ProductService {
  public async createProduct(
    // função para chamar a rota no backend
    createProductDto: CreateProductDto
  ): Promise<Result<ResultProductDto>> {
    console.log(createProductDto);
    const response = await api.post(`/api/admin/categorias/create`, createProductDto);
    return response.data;
  }
}

export default new ProductService();
