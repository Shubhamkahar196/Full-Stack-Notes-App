import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({Logout}) => {
  return (
    <div className='flext items-center gap-3'>
        <div className=' w-12 h-12 flex items-center justify-center rounded-full text-slate-950 bg-slate-100'>
            {getInitials("shubhamKahar")}
        </div>
          
        <div>
            <p className='text-sm font-medium'>Kahar</p>
            <button className='text-sm text-slate-700 underline' onClick={Logout}>Logout</button>
        </div>
    </div>
  )
}

export default ProfileInfo