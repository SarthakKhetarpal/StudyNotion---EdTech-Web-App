import React, { useState } from 'react';
import {HomePageExplore} from "../../../data/homepage-explore"
import { HighlightText } from './HighlightText';
import { CourseCard } from './CourseCard';

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

export const ExploreMore = () => {

    const [currentTab,setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );
    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    };

  return (
    <div>

        <div className='text-4xl font-semibold text-center'>
            Unlock the
            <HighlightText text={"Power of Code"}/>
        </div>

        <p className='text-richblack-300 text-center text-md mt-3'>
            Learn to build anything you can imagine
        </p>

        <div className='flex flex-row my-10 items-center justify-center rounded-full
        bg-richblack-800 py-[5px] w-fit mx-auto px-1 gap-4 border-b border-richblack-500'>
            {
                tabsName.map( (element, index) => {
                    return (
                        <div className={`flex flex-row items-center justify-center text-[16px] gap-2
                        ${currentTab === element ? "bg-richblack-900 text-richblack-5 font-medium"
                         : "text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer
                          hover:bg-richblack-900 hover:text-richblack-5 px-8 py-1`}
                        key={index}
                        onClick={() => setMyCards(element)} >
                            {element}
                        </div>
                    );
                } )
            }
        </div>

        <div className='lg:h-[150px]'></div>

        <div className='absolute flex flex-row gap-10 justify-between w-full translate-y-[-150px]'>
            {
                courses.map( (element, index) => {
                    return (
                        <CourseCard
                        key={index}
                        cardData={element}
                        currentCard={currentCard}
                        setCurrentCard={setCurrentCard}></CourseCard>
                    );
                })
            }
        </div>

    </div>
  )
}
