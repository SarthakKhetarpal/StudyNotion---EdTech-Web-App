import React from 'react';
import instructoreImage from '../../../assets/Images/Instructor.png'
import { HighlightText } from './HighlightText';
import { CTAButton } from './Button';
import { FaArrowRight } from "react-icons/fa";

export const InstructorSection = () => {
  return (
    <div>

        <div className='flex flex-row gap-20 items-center mt-[100px]'>

            <div className='shadow-[-15px_-15px_0px_0px_#F5F5F5] w-[57%]'>
                <img src={instructoreImage}/>
            </div>

            <div className='flex flex-col w-[43%]'>

                <p className='text-4xl font-semibold'>
                    Become an
                </p>
                <div className='text-4xl font-semibold'>
                    <HighlightText text={"Instructor"}/>
                </div>

                <div className='font-medium text-richblack-300 text-md pt-6 pb-16'>
                    Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                </div>

                <div className='flex items-start'>
                    <CTAButton active={true} linkTo={"/signup"}>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            Start Teaching Today
                            <FaArrowRight/>
                        </div>
                    </CTAButton>
                </div>

            </div>

        </div>

    </div>
  )
}
