import React from 'react'
import RegisterForm from "../../components/layouts/RegisterForm"
import StickyNavbar from '../../components/layouts/Navbar'

const RegisterPage = () => {

  const navLists = [
    // { label: 'Home', url: '/' },
  ];

  const btnName = [{
    label : "Home",
    url : "/"
  }];
  return (
    <div className="bg-white dark:bg-dark_primary">
        <StickyNavbar navLists={navLists} btnName={btnName}/>
        <RegisterForm/>
    </div>
  )
}

export default RegisterPage