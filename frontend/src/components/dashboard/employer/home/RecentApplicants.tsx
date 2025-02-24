import React from 'react'
import Applicant from './Applicant'

const RecentApplicants = () => {
  return (
    <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Applicant />
        <Applicant />
        <Applicant />
        <Applicant />
    </div>
  )
}

export default RecentApplicants