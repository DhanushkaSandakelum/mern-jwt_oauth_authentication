import React from "react";

function FormContainer({ children, title, description }) {
  return (
    <div className="flex flex-col gap-3 w-[350px] bg-gray-50 border border-gray-300 drop-shadow-sm rounded-md p-5">
      <div className="text-center border-b-2 pb-3">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-md font-thin">{description}</div>
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

export default FormContainer;
