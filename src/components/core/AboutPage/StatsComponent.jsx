import React from 'react';

const stats = [
    {count:"5K", label:"Active Students"},
    {count:"10+", label:"Mentors"},
    {count:"200+", label:"Courses"},
    {count:"50+", label:"Awards"}
]

const StatsComponent = () => {
  return (
    <div className='flex flex-row items-center justify-center mx-auto gap-16'>
        {
            stats.map( (stat,index) => {
                return (
                    <div key={index} className=' flex flex-col gap-2 items-center justify-center'>
                        <h2 className='text-richblack-5'>
                            {stat.count}
                        </h2>
                        <div className='text-richblack-300'>
                            {stat.label}
                        </div>
                    </div>
                );
            })
        }
    </div>
  )
}

export default StatsComponent;
