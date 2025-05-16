import React, { useEffect } from 'react';

type Props = {
  fullScreen?: boolean;
};

const Loading: React.FC<Props> = ({ fullScreen }) => {
  useEffect(() => {
    if (fullScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [fullScreen]);

  return (
    <>
      {fullScreen ? (
        <div className="h-screen fixed top-0 left-0 right-0 flex justify-center items-center z-50 bg-white bg-opacity-90">
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-70"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-70"></div>
        </div>
      )}
    </>
  );
};

export default Loading;
