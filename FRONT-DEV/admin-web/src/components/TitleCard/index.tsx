import React from 'react';

type Props = {
  text: string;
};

const TitleCard: React.FC<Props> = ({ text }) => {
  return (
    <div className="sm:py-5 py-3 items-center">
      <span className="font-bold text-2xl/[10px] text-secondary">{text}</span>
    </div>
  );
};

export default TitleCard;
