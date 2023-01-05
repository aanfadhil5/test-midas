import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    error: false,
    error_desc: "",
  });
  const inputChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const alphabet = /^[A-Za-z ]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: form.email,
      password: form.password,
    };
    axios
      .post("https://reqres.in/api/login", data)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        navigate("/home");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setForm({
            ...form,
            error: true,
            error_desc: error.response.data.error,
          });
        }
      });
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center rounded-2xl bg-gray-200 p-5 shadow-lg">
        <div className="px-8">
          <h1 className="text-2xl mb-5">Login</h1>
          <form className="flex flex-col gap-6">
            <input
              name="email"
              placeholder="email"
              type="email"
              onChange={inputChange}
              className="p-2 rounded-xl border"
            />
            {form.error ? <p>{form.error_desc}</p> : null}
            <input
              name="password"
              placeholder="password"
              type="password"
              onChange={inputChange}
              className="p-2 rounded-xl border"
            />
            {form.password > 0 ? (
              alphabet.test(form.password) ? null : (
                <p>password needs contains alphabet</p>
              )
            ) : null}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-400 rounded-xl p-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
