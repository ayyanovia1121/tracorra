import { UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const DashboardHeader = (props: Props) => {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
        <div></div>
        <div>
            <UserButton />
        </div>
    </div>
  )
}

export default DashboardHeader