import React from 'react';

type Props = {
  text: string;
};

const SubtitleCard: React.FC<Props> = ({ text }) => {
  return (
    <div className="sm:py-5 py-3">
      <span className="font-semibold text-xl text-teal-600">{text}</span>
    </div>
  );
};

export default SubtitleCard;
