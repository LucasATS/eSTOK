import './styles.css';

const Loading = () => {
  return (
    <div className="justify-center items-center">
      <div className="profile-main-loader">
        <div className="loader">
          <svg className="circular-loader" viewBox="25 25 50 50">
            <circle
              className="loader-path text-teal-600"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Loading;
