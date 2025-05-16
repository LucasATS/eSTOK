import Container from '../../components/Container';
import TitleCard from '../../components/TitleCard';
import ToastCustom from '../../components/ToastCustom';

const Home = () => {
  return (
    <Container className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center h-full">
        <TitleCard text="Seja Bem-Vindo!" />
        <ToastCustom />
      </div>
    </Container>
  );
};

export default Home;
