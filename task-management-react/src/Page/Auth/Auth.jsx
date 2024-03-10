import React, { useState } from 'react'
import './Auth.css'
import Signin from './Signin';
import Signup from './Signup';

const Auth = () => {
    const [isRegister, setIsRegister]=useState(false)
    const togglePanel =()=>{
        setIsRegister(!isRegister)
    }
  return (
    <div className='flex justify-center h-screen items-center overflow-hidden'>
        <div className='box lg:max-w-4xl'>
            <div className={`cover ${isRegister ? "rotate-active":""}`}>
                <div className='front'>
                    <img src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwaW4lMjBwdXJwbGUlMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D' alt='' />
                        <div className='text'>
                            <span className='text-1'>Success is built upon well-organized tasks</span> 
                            <span className='text-2 text-xs'>Let's get connected</span> 

                        </div>
                </div>
                <div className='back'>
                    <img src="https://media.istockphoto.com/id/1430813259/photo/a-happy-businesswoman-working-from-home-on-her-computer.jpg?s=612x612&w=0&k=20&c=nk1WesX9MT9QVWxuOVEYhfOVJvY8hu9EFVid4Pljou4=" alt='' />

                </div>

            </div>
            <div className='forms h-full'>
                <div className='form-content h-full'>
                    <div className='login-form'>
                        <Signin  togglePanel={togglePanel}/>

                    </div>
                    <div className='signup-form'>
                    <Signup  togglePanel={togglePanel}/>
                    </div>


                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Auth
