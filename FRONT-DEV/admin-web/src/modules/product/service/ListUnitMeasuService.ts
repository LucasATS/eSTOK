import api from "../../_shared/services/api";
import { Result } from "../../_shared/types/api.types";
import ListUnitMeasuDto from "../dto/ListUnitMeasuDto";
import ResultCategoryDto from "../dto/ResultCategoryDto";


class ListUnitMeasu {
  public async listProduct(
    listUnitMeasu: ListUnitMeasuDto // é necessário criar um arquivo Dto (será os mesmos dados do create)
  ): Promise<Result<ResultCategoryDto>> {
    const response = await api.get(`/api/admin/tipos-de-medidas`, listUnitMeasu);
    return response.data;
  }
}

export default new ListUnitMeasu();
