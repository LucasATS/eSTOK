import { DotsVertical } from 'heroicons-react';
import { useState } from 'react';
import Dropdown from '../Dropdown';
import { Action } from '../Table';
export interface LabelProps {
  label: string;
  key: string;
  transform?: (value: any) => any;
  component?: (value: any, itemActive: any) => any;
}
interface Props {
  itemsLabel: LabelProps[];
  values?: any[];
  menuItems?: Action[];
}
const ListCard = ({ itemsLabel, values, menuItems }: Props) => {
  const [itemActive, setItemActive] = useState<any>();

  const handleClickOpenMenu = (item: any) => {
    setItemActive(item);
  };
  const getValueByItem = (item: LabelProps, value: any) => {
    const keys = item.key.split('.');
    let valueToReturn: any;
    if (keys.length > 1) {
      let currentValue: any;
      for (const key of keys) {
        currentValue = !currentValue ? value[key] : currentValue[key];
      }
      valueToReturn = currentValue;
    } else {
      valueToReturn = value[item.key];
    }
    if (item.transform) {
      valueToReturn = item.transform(valueToReturn);
    }
    if (item.component) {
      valueToReturn = item.component(valueToReturn, value);
    }
    return valueToReturn;
  };
  return (
    <div className="relative flex flex-col gap-2 w-full">
      {values?.map((value, index) => (
        <div key={index} className="relative flex flex-col border-2 rounded border-stone-300">
          <div>
            {itemsLabel.map((item, index) => (
              <div className="p-3" key={index}>
                <label className="font-semibold text-gray-700">{item.label}</label>
                <div className=" text-gray-500">{getValueByItem(item, value)}</div>
              </div>
            ))}
          </div>
          {menuItems && (
            <div className="absolute top-0 right-0 p-3 mr-1 mt-1">
              <Dropdown menuItens={menuItems}>
                <DotsVertical
                  className="w-5 h-5 cursor-pointer text-gray-700"
                  onClick={() => handleClickOpenMenu(value.id)}
                />
              </Dropdown>
            </div>
          )}
        </div>
      ))}
      {values?.length == 0 && (
        <div className="flex w-full justify-center py-10">
          <span className="font-medium text-gray-600">Nenhum registro encontrado</span>
        </div>
      )}
    </div>
  );
};
export default ListCard;
