import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
        <h2 className="text-lg font-medium text-black">Traccora</h2>
        {children}
    </div>
  )
}

export default AuthLayout