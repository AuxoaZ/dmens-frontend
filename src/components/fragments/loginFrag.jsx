import { Input } from "@material-tailwind/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../../features/authSlice"; 

const LoginFrag = () => {


  const navigate = useNavigate()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('');

  // Fungsi untuk memvalidasi form
  const validate = () => {
    const errors = {};

    // Validasi email
    if (!account) {
      errors.account = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(account)) {
      errors.account = 'Email address is invalid';
    }

    // Validasi password
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };


  const dispatch = useDispatch();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user && user.role == "manager") {
      navigate("/staff/manager");
    } else if (user && user.role == "admin") {
      navigate("/staff/admin");
    } else if (user && user.role == "cashier") {
      navigate("/staff/cashier");
    } else if (user && user.role == "barber") {
      navigate("/staff/barber");
    } 
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const login = async (e) => {
    e.preventDefault();
      const validationErrors = validate();
      setErrors(validationErrors);
    await dispatch(LoginUser({ account, password }))

  };
  return (
    <form>
      <div className="relative">
        <Input 
        variant="standard" 
        type="email" 
        label="Email or Phone" 
        value = {account}
        onChange={(e) => setAccount(e.target.value)} 
        
        />
              {errors.account && <p className="text-red-500 text-sm">{errors.account}</p>}
      </div>
      <div className="relative mt-3">
        <Input 
        variant="standard" 
        type="password" 
        label="Password" 
        value = {password}
        onChange={(e) => setPassword(e.target.value)} 
        
        />
        
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>
      {isError && <p className="text-red-500 text-sm mt-3">{message}</p>}
      <div className="mt-4">

        <button className="bg-primary text-white rounded-md px-2 py-1" onClick={login}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
        <p>
          Lorem ipsum dolor sit amet.{" "}
          <Link to="/register" className="text-primary">
            register!
          </Link>{" "}
        </p>
      </div>
    </form>
  );
};

export default LoginFrag;
