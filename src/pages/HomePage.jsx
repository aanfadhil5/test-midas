import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const handleOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="flex h-screen justify-center items-center flex-col bg-gray-100">
      <div className="flex flex-col items-center rounded-2xl bg-gray-200 shadow-lg gap-10 p-24">
        <h1 className="font-semibold text-2xl">Welcome</h1>
        <p>token:{token ? <p>{token}</p> : null}</p>
        <button
          className="w-full p-2 bg-red-200 rounded-xl"
          onClick={handleOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default HomePage;
