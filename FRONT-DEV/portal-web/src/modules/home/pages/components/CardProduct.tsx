import ExampleProduct from '../../../../components/ExampleProduct/ExampleProduct';
import TitleCard from '../../../../components/TitleCard';

interface Props {
  onClick: () => void;
}

export const CardProduct = ({ onClick }: Props) => {
  return (
    <div className="bg-white">
      <TitleCard text="Categorias" />
      <div className="flex mx-auto max-w-2xl px-4 py-4 gap-14">
        <ExampleProduct onClick={onClick} />
        <ExampleProduct onClick={onClick} />
        <ExampleProduct onClick={onClick} />
      </div>
    </div>
  );
};
