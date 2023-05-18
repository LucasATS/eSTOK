import TitleCard from '../../TitleCard';

interface Props {
  mainText: string;
}

const Header = ({ mainText }: Props) => {
  return (
    <div className="flex px-6 py-3 items-start justify-start text-start w-full">
      <TitleCard text={mainText} />
    </div>
  );
};

export default Header;
