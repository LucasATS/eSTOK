import queryString from 'query-string';
import api from '../../_shared/services/api';
import { Paginate, Result } from '../../_shared/types/api.types';
import CreateUnitMeasureDto from '../dto/unitMeasure/CreateUnitMeasureDto';
import PaginetUnitMeasureDto from '../dto/unitMeasure/PaginetUnitMeasureDto';
import ResultUnitMeasureDto from '../dto/unitMeasure/ResultUnitMeasureDto';

class UnitMeasureService {
  public async createMeasure(
    unitMeasuDto: CreateUnitMeasureDto
  ): Promise<Result<ResultUnitMeasureDto>> {
    console.log(unitMeasuDto);
    const response = await api.post(`/api/admin/tipos-de-medidas/create`, unitMeasuDto);
    return response.data;
  }

  public async listMeasure({ ...paginateUnitMeasure }): Promise<Paginate<PaginetUnitMeasureDto>> {
    const queryParams = queryString.stringify(paginateUnitMeasure);
    const response = await api.get(`/api/admin/tipos-de-medidas${queryParams}`);
    return response.data.data;
  }
}

export default new UnitMeasureService();
