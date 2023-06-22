import Button from '../Button/Button';

interface Props {
  onClick: () => void;
}

const ExampleProduct = ({ onClick }: Props) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="flex flex-col">
          <h3 className="text-sm text-gray-700">Basic Tee</h3>
          <p className="mt-1 text-sm text-gray-500">Black</p>
        </div>
        <p className="text-sm font-medium text-gray-900">$35</p>
      </div>
      <div className="flex items-center justify-end p-5">
        <Button onClick={onClick} buttonText="view" variant="primary" />
      </div>
    </div>
  );
};

export default ExampleProduct;
