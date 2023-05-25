const QuantityProduct = () => {
  const decrement = (e: any) => {
    const button = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = button.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
  };

  const increment = (e: any) => {
    const button = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = button.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  };

  const decrementButtons = document.querySelectorAll(`button[data-action="decrement"]`);

  const incrementButtons = document.querySelectorAll(`button[data-action="increment"]`);

  decrementButtons.forEach((button) => {
    button.addEventListener('click', decrement);
  });

  incrementButtons.forEach((button) => {
    button.addEventListener('click', increment);
  });

  return (
    <div className="custom-number-input h-10 w-32">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
          name="custom-input-number"
          value="0"
        ></input>
        <button
          data-action="increment"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default QuantityProduct;

// input[type='number']::-webkit-inner-spin-button,
//   input[type='number']::-webkit-outer-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }

//   .custom-number-input input:focus {
//     outline: none !important;
//   }

//   .custom-number-input button:focus {
//     outline: none !important;
//   }
