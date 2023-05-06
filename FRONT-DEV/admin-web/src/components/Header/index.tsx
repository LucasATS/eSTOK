import TitleCard from '../TitleCard';

const Header = () => {
  return (
    <div className="flex justify-between px-6 py-3 items-center bg-white">
      <TitleCard text="Dashboard" />
      <div>FILTRO</div>
    </div>
  );
};

export default Header;
