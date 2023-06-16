import api from '../../_shared/services/api';
import { Result } from '../../_shared/types/api.types';
import ListProductDto from '../dto/ListProductDto';
import ResultProductDto from '../dto/ResultProductDto';

class ListProduct {
  public async listProduct(
    listProductDto: ListProductDto // é necessário criar um arquivo Dto (será os mesmos dados do create)
  ): Promise<Result<ResultProductDto>> {
    const response = await api.get(`/api/admin/categorias`, listProductDto);
    return response.data;
  }
}

export default new ListProduct();
