function Button({ name, onClick }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className=" w-full bg-green-600 p-2 rounded-md text-gray-100 text-sm hover:bg-green-700 hover:shadow-sm transition-all ease-in-out"
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
