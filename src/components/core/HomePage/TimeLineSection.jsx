import React from 'react';
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
    {
        Logo: Logo1,
        Heading: "Leadership",
        Description: "Fully committed to the company's success"
    },
    {
        Logo: Logo2,
        Heading: "Responsibility",
        Description: "Students will always be our top priority"
    },
    {
        Logo: Logo3,
        Heading: "Flexibility",
        Description: "The ability to switch is an important skill"
    },
    {
        Logo: Logo4,
        Heading: "Solve the problem",
        Description: "Code your way to a solution"
    }
]

export const TimeLineSection = () => {
  return (
    <div>

        <div className='flex flex-row items-center justify-between gap-15'>

            <div className='flex flex-col w-[45%] gap-5'>
                {
                    timeline.map( (element, index) => {
                        return (
                            <div>
                                <div className='flex flex-row gap-6' key={index}>

                                    <div className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center'>
                                        <img src={element.Logo}/>
                                    </div>

                                    <div className='flex flex-col items-start'>

                                        <h2 className='font-semibold text-[18px]'>
                                            {element.Heading}
                                        </h2>
                                        <p className='text-base'>
                                            {element.Description}
                                        </p>

                                    </div>

                                </div>

                                {
                                    element.Heading == "Solve the problem" ? 
                                    (<div></div>) : 
                                    (<div className='border border-dashed border-1px w-[1px] h-[40px] ml-[25px] mt-[15px] border-richblack-200'></div>)
                                }
                            </div>
                        );
                    })
                }
            </div>

            <div className='relative shadow-blue-200'>

                <img src={timelineImage} alt='timeline image' className='shadow-white object-fit h-fit'/>

                <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-8
                left-[50%] translate-x-[-50%] translate-y-[-50%]'>

                    <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                        <p className='text-3xl font-bold'>10</p>
                        <p className='text-sm text-caribbeangreen-300'>Years Experience</p>
                    </div>
                    
                    <div className='flex flex-row gap-5 items-center px-7'>
                        <p className='text-3xl font-bold'>250</p>
                        <p className='text-sm text-caribbeangreen-300'>Types of Courses</p>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}
