import queryString from 'query-string';
import api from '../../_shared/services/api';
import { Paginate, Result } from '../../_shared/types/api.types';
import CreateReportDto from '../dto/CreateReportDto';
import PaginateReportDto from '../dto/PaginateReportDto';
import ResultReportDto from '../dto/ResultReportDto';
import Report from '../models/Report';

class ReportService {
  public async createReport(createReportDto: CreateReportDto): Promise<Result<ResultReportDto>> {
    const response = await api.post(`/api/admin/report/create`, createReportDto);
    console.log('response', response.statusText);
    return response.data;
  }

  public async paginateReport({ ...paginateReport }: PaginateReportDto): Promise<Paginate<Report>> {
    const queryParams = queryString.stringify(paginateReport);
    const response = await api.get(`/api/admin/report?${queryParams}`);
    return response.data.data;
  }
}
export default new ReportService();
