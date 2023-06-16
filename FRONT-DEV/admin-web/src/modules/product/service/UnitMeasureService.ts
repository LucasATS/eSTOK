import api from '../../_shared/services/api';
import { Result } from '../../_shared/types/api.types';
import CreateUnitMeasureDto from '../dto/CreateUnitMeasureDto';
import ResultUnitMeasureDto from '../dto/ResultUnitMeasureDto';

class UnitMeasureService {
  public async createMeasure(
    unitMeasuDto: CreateUnitMeasureDto
  ): Promise<Result<ResultUnitMeasureDto>> {
    console.log(unitMeasuDto);
    const response = await api.post(`/api/admin/tipos-de-medidas/create`, unitMeasuDto);
    return response.data;
  }

  // public async listMeasure(
  //   listUnitMeasure: ListUnitMeasureDto
  // ): Promise<Result<ResultUnitMeasureDto>> {
  //   const response = await api.get(`/api/admin/tipos-de-medidas`, listUnitMeasure);
  //   return response.data;
  // }
}

export default new UnitMeasureService();
