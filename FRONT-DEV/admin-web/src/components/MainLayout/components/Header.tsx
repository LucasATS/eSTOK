import TitleCard from '../../TitleCard';

const Header = () => {
  return (
    <div className="flex justify-between lg:ml-72 md:ml-56 px-6 py-3 items-center">
      <TitleCard text="Dashboard" />
      <div>FILTRO</div>
    </div>
  );
};

export default Header;
