import React from 'react';
import { HighlightText } from '../HomePage/HighlightText';
import {CTAButton} from '../../core/HomePage/Button';

const learningGridArray = [
    {
        order: -1,
        heading: "World-Class Learning for ",
        highlightText: "Anyone, Anywhere",
        description: "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
        btnText: "Learn More",
        btnLink: "/" 
    },
    {
        order: 1,
        heading: "Curriculum Based on Industry Needs",
        description: "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs." 
    },
    {
        order: 2,
        heading: "Our Learning Methods",
        description: "The learning process uses the namely online and offline." 
    },
    {
        order: 3,
        heading: "Certification",
        description: "You will get a certificate that can be used as a certification during job hunting." 
    },
    {
        order: 4,
        heading: `Rating "Auto-grading"`,
        description: "You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor." 
    },
    {
        order: 5,
        heading: "Ready to Work",
        description: "Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program." 
    }
]

export const LearningGrid = () => {
  return (
    <div className='grid mx-auto lg:grid-cols-4 md:grid-cols-2 grid-col-1 mb-10'>
        {
            learningGridArray.map( (card,index) => {
                return (
                    <div
                    key={index}
                    className={`${index===0 && "lg:col-span-2"}
                    ${card.order%2===1 ? "bg-richblack-700" : "bg-richblack-800"}
                    ${card.order===3 && "lg:col-start-2"}
                    ${card.order<0 && "bg-transparent"}
                    `}
                    >
                        {
                            card.order < 0 ? (
                                <div>
                                    <div>
                                        {card.heading}
                                        <HighlightText text={card.highlightText}/>
                                    </div>
                                    <p>
                                        {card.description}
                                    </p>
                                    <div>
                                        <CTAButton active={true} linkto={card.btnLink}>
                                            {card.btnText}
                                        </CTAButton>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h1>
                                        {card.heading}
                                    </h1>
                                    <div>
                                        {card.description}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                );
            })
        }
    </div>
  )
}
