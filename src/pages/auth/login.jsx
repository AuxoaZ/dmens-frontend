import React from 'react'
import LoginForm from "../../components/layouts/LoginForm"
import StickyNavbar from '../../components/layouts/Navbar'
import LoginFrag from '../../components/fragments/loginFrag';

const LoginPage = () => {

  const navLists = [];

  const btnName = [{
    label : "Home",
    url : "/"
  }];
  return (
    <div className="bg-white dark:bg-dark_primary">
        <StickyNavbar navLists={navLists} btnName={btnName}/>
        <LoginForm/>
    </div>
  )
}

export default LoginPage