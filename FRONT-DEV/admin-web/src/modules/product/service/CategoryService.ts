import api from '../../_shared/services/api';
import { Result } from '../../_shared/types/api.types';
import CreateCategoryDto from '../dto/CreateCategoryDto';
import ResultCategoryDto from '../dto/ResultCategoryDto';

class CategoryService {
  public async createCategory(
    // função para chamar a rota no backend
    createCategoryDto: CreateCategoryDto
  ): Promise<Result<ResultCategoryDto>> {
    console.log(createCategoryDto);
    const response = await api.post(`/api/admin/categorias/create`, createCategoryDto);
    return response.data;
  }
}

export default new CategoryService();
