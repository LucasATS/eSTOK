import { Toaster } from 'react-hot-toast';

const ToastCustom = () => {
  return (
    <div>
      <Toaster
        reverseOrder={false}
        position="top-right"
        toastOptions={{
          className: '',
          duration: 3000,
          style: {
            borderRadius: '2px',
            fontSize: '15px'
          },
          success: {
            duration: 3000,
            style: {
              background: 'rgb(220 252 231)',
              color: 'rgb(21 128 61)'
            }
          },
          error: {
            duration: 3000,
            style: {
              background: 'rgb(254 226 226)',
              color: 'rgb(185 28 28)'
            }
          }
        }}
        containerStyle={{
          top: 40,
          left: 20,
          bottom: 20,
          right: 20,
          borderRadius: '0'
        }}
      ></Toaster>
    </div>
  );
};

export default ToastCustom;
