import React from 'react'
import { HighlightText } from './HighlightText'
import know_your_progress from '../../../assets/Images/Know_your_progress.png';
import compare_with_others from '../../../assets/Images/Compare_with_others.png';
import plan_your_lessons from '../../../assets/Images/Plan_your_lessons.png';
import { CTAButton } from './Button';

export const LearningLanguageSection = () => {
  return (
    <div className='flex flex-col gap-5 mt-[130px] mb-16 items-center'>

      <div className='text-4xl text-center font-semibold'>
        Your swiss knife for
        <HighlightText text={"learning any language"}/>
      </div>

      <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
        Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
      </div>

      <div className='flex flex-row items-center justify-center mt-5'>
        

        <img src={know_your_progress}
         alt='know your progress image'
          className='object-contain translate-x-[30%] z-0'/>

        <img src={compare_with_others}
         alt='compare with others image' 
         className='object-contain z-10'/>

        <img src={plan_your_lessons} 
         alt='plan your lessons image' 
         className='object-contain translate-x-[-30%] z-20'/>

      </div>

      <div className='mt-5'>
        <CTAButton linkTo={"/signup"} active={true}>
          Learn More
        </CTAButton>
      </div>

    </div>
  )
}
