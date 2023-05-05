import React from 'react';

type Props = {
  text: string;
};

const TitleCard: React.FC<Props> = ({ text }) => {
  return (
    <div className="sm:py-5 py-3 items-center">
      <span className="font-bold text-3xl/3 text-secondary">{text}</span>
    </div>
  );
};

export default TitleCard;
