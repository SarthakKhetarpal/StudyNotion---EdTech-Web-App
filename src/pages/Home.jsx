import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import {Link} from "react-router-dom";
import { HighlightText } from '../components/core/HomePage/HighlightText';
import {CTAButton} from '../components/core/HomePage/Button';
import banner from "../assets/Images/banner.mp4";
import { CodeBlocks } from '../components/core/HomePage/CodeBlocks';
import { TimeLineSection } from '../components/core/HomePage/TimeLineSection';
import { LearningLanguageSection } from '../components/core/HomePage/LearningLanguageSection';
import { InstructorSection } from '../components/core/HomePage/InstructorSection';
import Footer from '../components/common/Footer';
import { ExploreMore } from '../components/core/HomePage/ExploreMore';

const Home = () => {
  return (
    <div className='relative mx-auto flex flex-col w-11/12 items-center justify-between text-white max-w-maxContent'>
        {/* Section 1 */}
        <div className='w-[11/12]'>

            <Link to={"/signup"}>
                <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                transition-all duration-200 hover:scale-95 w-fit'>
                    <div className='flex flex-row gap-2 rounded-full items-center justify-between px-[10px] py-[5px]
                    transition-all duration-200 group-hover:bg-richblack-900'>
                        <p>Become an instructor</p>
                        <FaArrowRight />
                    </div>
                </div>
            </Link>

            <div className='text-center text-4xl font-semibold mt-7'>
                Empower Your Future with 
                <HighlightText text={"Coding Skills"} />
            </div>
 
            <div className='w-[90%] text-center mx-auto text-lg font-bold mt-4 text-richblack-300'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>

            <div className='flex flex-row justify-center items-center gap-7 mt-8'>
                <CTAButton active={true} linkTo={"/signup"}>
                    Learn More
                </CTAButton>
                <CTAButton active={false} linkTo={"/login"}>
                    Book a Demo
                </CTAButton>
            </div>

            <div className='w-[95%] shadow-[-25px_-23px_210px_-49px_rgba(115,105,222,0.72)] mx-4 my-14'>
                <div className='shadow-[20px_20px_0px_0px_#F5F5F5]'>
                    <video
                    muted
                    loop
                    autoPlay
                    >
                        <source src={banner} type='video/mp4'/>
                    </video>
                </div>
            </div>
            
            {/** Code Section 1 */}
            <div>
                <CodeBlocks
                    position={"lg:flex-row"}
                    heading={
                        <div className='font-semibold text-4xl'>
                            Unlock Your 
                            <HighlightText text={"coding potential"}/>
                            with our online courses.
                        </div>
                    }
                    subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                    ctabtn1={
                        {
                            btnText: "try it yourself",
                            linkTo: "/signup",
                            active: true
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "learn more",
                            linkTo: "/login",
                            active: false
                        }
                    }
                    codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><a href="three/">Three</a>\n</nav>`}
                    codeColor={"text-yellow-25"}
                />
            </div>

            {/** Code Section 2 */}
            <div>
                <CodeBlocks
                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className='font-semibold text-4xl'>
                            Start 
                            <HighlightText text={"coding"}/>
                            <br/>
                            <HighlightText text={"in seconds"}/>
                        </div>
                    }
                    subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                    ctabtn1={
                        {
                            btnText: "try it yourself",
                            linkTo: "/signup",
                            active: true
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "learn more",
                            linkTo: "/login",
                            active: false
                        }
                    }
                    codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><a href="three/">Three</a>\n</nav>`}
                    codeColor={"text-yellow-25"}
                />
            </div>

            <ExploreMore/>

        </div>

        {/* Section 2 */}
        <div className='bg-pure-greys-5 text-richblack-700'>

            <div className='homepage_bg h-[310px] w-screen'>
                    
                    <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto'>

                        <div className='h-[150px]'></div>
                        
                        <div className='flex flex-row items-center justify-center gap-7 text-white'>
                            <CTAButton active={true} linkTo={"/signup"}>
                                <div className='flex flex-row gap-3'>
                                    Explore Full Catalog
                                    <FaArrowRight/>
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkTo={"/signup"}>
                                Learn More
                            </CTAButton>
                        </div>

                    </div>
            </div>

            <div className='mx-auto w-11/12  max-w-maxContent flex flex-col items-center justify-between gap-5'>

                <div className='flex flex-row gap-5 mb-10 mt-[95px]'>

                    <div className='text-4xl font-semibold w-[45%] mx-10'>
                        Get the skills you need for a
                        <HighlightText text={"job that is in demand"}/>
                    </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start ml-10'>
                        <div className='text-[16px]'>
                            The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </div>
                        <div>
                                <CTAButton active={true} linkTo={"/signup"}>
                                    <div>Learn More</div>
                                </CTAButton>
                        </div>
                    </div>

                </div>

                <TimeLineSection/>

                <LearningLanguageSection/> 

            </div>

        </div>

        {/* Section 3 */}
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8
        first-letter bg-richblack-900 text-white'>

            <InstructorSection/>

            <h2 className='text-center text-4xl font-semibold mt-10'>
                Review from other learners
            </h2>

            {/* Review Slider here */}

        </div>

        {/* Footer */}
        <Footer/>

    </div>
  )
};

export default Home;