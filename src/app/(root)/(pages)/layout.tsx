import React from 'react'
import Sidebar from './_components/Sidebar'
import DashboardHeader from './_components/Header'

type Props = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="">
      <div className="fixed md:w-64 hidden md:block">
        <Sidebar />
      </div>
      <div className='md:ml-64'>
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout