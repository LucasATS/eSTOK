import api from '../../_shared/services/api';
import { Result } from '../../_shared/types/api.types';
import ResultCategoryDto from '../dto/ResultCategoryDto';
import UnitMeasuDto from '../dto/UnitMeasuDto';

class UnitMeasuService {
  public async UnitMeasu(
    // função para chamar a rota no backend
    unitMeasuDto: UnitMeasuDto
  ): Promise<Result<ResultCategoryDto>> {
    console.log(unitMeasuDto);
    const response = await api.post(`/api/admin/tipos-de-medidas/create`, unitMeasuDto);
    return response.data;
  }
}

export default new UnitMeasuService();
