import { OptionSelect } from '../components/FormComponents/SelectForm';

export const mockCategoryOptions: OptionSelect[] = [
  { value: '1', label: 'Bebidas', status: true },
  { value: '2', label: 'Alimentos', status: true },
  { value: '3', label: 'Limpeza', status: true }
];

export const mockUnitMeasureOptions: OptionSelect[] = [
  { value: '1', label: 'Litro (L)', status: true },
  { value: '2', label: 'Quilo (Kg)', status: true },
  { value: '3', label: 'Unidade (Un)', status: true }
];

export const mockProductTypeOptions: OptionSelect[] = [
  { value: '1', label: 'Produto Final', status: true },
  { value: '2', label: 'Matéria-Prima', status: true }
];
