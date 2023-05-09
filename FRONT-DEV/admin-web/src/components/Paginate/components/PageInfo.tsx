import React from 'react';

type Props = {
  contentLenght: string;
  totalLenght: string;
};

const PageInfo = (props: Props) => {
  return (
    <span className="block sm:text-xs text-sm text-gray-500">
      {`Mostrando ${props.contentLenght} de ${props.totalLenght} registros`}
    </span>
  );
};

export default PageInfo;
