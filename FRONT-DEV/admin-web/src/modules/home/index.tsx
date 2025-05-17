import TitleCard from '../../components/TitleCard';
import ToastCustom from '../../components/ToastCustom';

const Home = () => {
  return (
    <div className="flex text-center justify-center items-center h-screen">
      <TitleCard text="Seja Bem-Vindo!" />
      <ToastCustom />
    </div>
  );
};

export default Home;
