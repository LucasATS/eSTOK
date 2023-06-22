import TitleCard from '../../components/TitleCard';
import ToastCustom from '../../components/ToastCustom';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <TitleCard text="Seja Bem-Vindo!" />
      <ToastCustom />
    </div>
  );
};

export default Home;
