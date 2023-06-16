import queryString from 'query-string';
import api from '../../_shared/services/api';
import { Paginate, Result } from '../../_shared/types/api.types';
import CreateCategoryDto from '../dto/CreateCategoryDto';
import PaginateCategoryDto from '../dto/PaginateCategoryDto';
import ResultCategoryDto from '../dto/ResultCategoryDto';
import Category from '../models/Category';

class CategoryService {
  public async createCategory(
    createCategoryDto: CreateCategoryDto
  ): Promise<Result<ResultCategoryDto>> {
    const response = await api.post(`/api/admin/categorias/create`, createCategoryDto);
    console.log('response', response.statusText);
    return response.data;
  }

  public async paginateCategory({
    ...paginateCategory
  }: PaginateCategoryDto): Promise<Paginate<Category>> {
    const queryParams = queryString.stringify(paginateCategory);
    const response = await api.get(`/api/admin/categorias?${queryParams}`);
    return response.data.data;
  }
}

export default new CategoryService();
