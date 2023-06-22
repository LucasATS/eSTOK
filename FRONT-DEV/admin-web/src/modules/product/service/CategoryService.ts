import api from '../../_shared/services/api';
import { Paginate, Result } from '../../_shared/types/api.types';
import CreateCategoryDto from '../dto/category/CreateCategoryDto';
import ResultCategoryDto from '../dto/category/ResultCategoryDto';
import Category from '../models/Category';

class CategoryService {
  public async createCategory(
    createCategoryDto: CreateCategoryDto
  ): Promise<Result<ResultCategoryDto>> {
    const response = await api.post(`/api/admin/categorias/create`, createCategoryDto);
    return response.data;
  }

  public async paginateCategory({ ...paginateCategory }): Promise<Paginate<Category>> {
    const response = await api.get(`/api/admin/categorias`);
    return response.data.data;
  }
}

export default new CategoryService();
