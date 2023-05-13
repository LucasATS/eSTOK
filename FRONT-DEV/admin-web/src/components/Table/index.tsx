import { useState } from 'react';
import Dropdown from '../Dropdown';

export interface TableColumn {
  columnName?: string;
  key: string;
  transform?: (value: any) => any;
  component?: (value: any, itemActive: any) => any;
  onClickRow?: (value: any) => void;
}

export interface Action {
  label: string;
  onClick: (currentSelected: any) => void;
}

interface TableProps {
  columns?: TableColumn[];
  values?: any;
  menuItems?: Action[];
}

const Table = ({ columns, values, menuItems }: TableProps) => {
  const [itemActive, setItemActive] = useState<any>();

  const getObjectValueByColumn = (column: TableColumn, value: any) => {
    const keys = column.key.split('.');
    let valueToReturn: any;

    if (keys.length > 1) {
      let currentValue: any;
      for (const key of keys) {
        currentValue = !currentValue ? value[key] : currentValue[key];
      }
      valueToReturn = currentValue;
    } else {
      valueToReturn = value[column.key];
    }

    if (column.transform) {
      valueToReturn = column.transform(valueToReturn);
    }

    if (column.component) {
      valueToReturn = column.component(valueToReturn, value);
    }

    return valueToReturn;
  };

  const handleClickItemMenu = (onClick: (currentSelected: any) => void) => {
    if (itemActive) {
      onClick(itemActive);
    }
  };

  const handleClickOpenMenu = (item: any) => {
    setItemActive(item);
  };

  return (
    <div className="w-full">
      <table className="sm:table hidden border-collapse table-auto w-full text-sm ">
        <thead>
          <tr>
            {columns?.map((column, index) => (
              <th
                key={index}
                className="border-b-2 border-t-2 font-semibold p-3 text-gray-700 text-left first:pl-5 last:pr-5"
              >
                {column.columnName}
              </th>
            ))}
            {menuItems && (
              <th className="border-b-2 border-t-2 font-semibold p-3 text-gray-700 text-left first:pl-5 last:pr-5" />
            )}
          </tr>
        </thead>
        <tbody className="bg-white border-b-2">
          {values?.map((value: any) => (
            <tr key={value.id} className="hover:bg-gray-100 transition-all">
              {columns?.map((column, index) => (
                <td key={index} className="p-3 text-gray-500 first:pl-5 last:pr-5">
                  {getObjectValueByColumn(column, value)}
                </td>
              ))}
              {menuItems && (
                <td className="first:w-72 last:w-2 p-3 text-gray-500">
                  <Dropdown menuItens={menuItems} onClick={handleClickItemMenu} size="default">
                    <div
                      className="w-4 h-4 cursor-pointer text-gray-700"
                      onClick={() => handleClickOpenMenu(value.id)}
                    >
                      <span>AQUI</span>
                    </div>
                  </Dropdown>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {values?.length == 0 && (
        <div className="flex w-full justify-center py-10">
          <span className="text-sm font-semibold text-gray-600">Nenhum registro encontrado</span>
        </div>
      )}
    </div>
  );
};

export default Table;
