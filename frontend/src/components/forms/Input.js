function Input({ type, name, placeholder, onChange, error }) {
  return (
    <div>
      <div className="text-sm py-1">{placeholder}</div>
      <div>
        <input
          type={type}
          name={name}
          onChange={onChange}
          className="w-full p-1 border border-gray-300 outline-none bg-gray-100 focus:border-gray-500 focus:bg-gray-200 focus:shadow-sm transition-all ease-in-out"
        />
      </div>
      {error && (
        <div className="font-semibold text-red-600 text-xs py-1">{error}</div>
      )}
    </div>
  );
}

export default Input;
