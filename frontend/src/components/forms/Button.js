import ClipLoader from "react-spinners/ClipLoader";

function Button({ name, onClick, isLoading }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        disabled={isLoading}
        className="flex flex-row items-center justify-center gap-2 w-full bg-green-600 p-2 rounded-md text-gray-100 text-sm hover:bg-green-700 hover:shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed transition-all ease-in-out"
      >
        <p>{name}</p>
        {isLoading && (
          <ClipLoader
          color="white"
            loading={isLoading}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
      </button>
    </div>
  );
}

export default Button;
