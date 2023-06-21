import api from '../../_shared/services/api';
import { Paginate, Result } from '../../_shared/types/api.types';
import CreateUnitMeasureDto from '../dto/unitMeasure/CreateUnitMeasureDto';
import ResultUnitMeasureDto from '../dto/unitMeasure/ResultUnitMeasureDto';
import UnitMeasure from '../models/UnitMeasure';

class UnitMeasureService {
  public async createUnitMeasure(
    unitMeasuDto: CreateUnitMeasureDto
  ): Promise<Result<ResultUnitMeasureDto>> {
    const response = await api.post(`/api/admin/tipos-de-medidas/create`, unitMeasuDto);
    return response.data;
  }

  public async paginateUnitMeasure({ ...paginateUnitMeasure }): Promise<Paginate<UnitMeasure>> {
    const response = await api.get(`/api/admin/tipos-de-medidas`);
    return response.data.data;
  }
}

export default new UnitMeasureService();
