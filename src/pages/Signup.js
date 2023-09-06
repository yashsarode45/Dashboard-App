import React from 'react'
import { SiShopware } from 'react-icons/si';
import { Navigate, useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import { useState, useEffect } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { toast } from 'react-hot-toast';
const Signup = () => {

    const{ setIsLoggedIn, registerUser} = useStateContext()
    const [signupData, setSignUpData] = useState({});
    const [signupMode, setSignupMode] = useState('Light')
    const navigate = useNavigate();
    function changeHandler(event) {
        const {name, value} = event.target;
        setSignUpData((prevData)=> (
            {...prevData, 
            [name]:value}
        ))
    }

    function handleModeChange() {
        signupMode === 'Dark' ? setSignupMode('Light') : setSignupMode('Dark')
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (signupData.password === signupData.confirmpassword) {
            const newUser = {
                email:signupData.email,
                password:signupData.password
            }    
            registerUser(newUser);
            toast.success("User registered")
            navigate('/login');
        } else {
            console.log("Passwords don't match, enter again");
            toast.error("Passwords doesn't match")
        }
    }
  return (
    <div className ={`w-full h-full overflow-hidden bg-gray-50 ${signupMode === 'Dark' ? "dark" : ""}`}>
    
      <div className='flex flex-col gap-6 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 dark:bg-gray-900'>
        <div className='items-center gap-3 ml-3 mt-4 flex text-2xl font-extrabold
                tracking-tight dark:text-white text-slate-900'>
                    <SiShopware/> <span>Dashboard App</span>
        </div>

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account!
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" value={signupData.email} onChange={changeHandler} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 
                      sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700
                       dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                        dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" value={signupData.password} onChange={changeHandler}  name="password" id="password" placeholder="Enter Your Password" className="bg-gray-50 border
                       border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 
                       focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="password" name="confirmpassword" value={signupData.confirmpassword} onChange={changeHandler}  id="confirm-password" placeholder="Confirm Password" className="bg-gray-50 
                      border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full 
                      p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                       dark:focus:border-blue-500" required=""/>
                  </div>
                  <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <span onClick={() => navigate("/login")} className="cursor-pointer  font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</span>
                  </p>
              </form>
          </div>
        </div>

        <button type="button" onClick={handleModeChange} 
        className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 
        focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
        inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white
         dark:hover:bg-gray-700 mr-2 mb-2">
            {signupMode === 'Dark' ? (<BsFillSunFill />) : (<BsFillMoonFill />)}
            <span className=' ml-2'> {signupMode === 'Dark' ? "Light" : "Dark"} </span>
         </button>
      </div>
    </div>
  )
}

export default Signup
