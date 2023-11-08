import React from "react";
import ImageTitleCard from "./UI/ImageTitleCard";

const HomePage = () => {
    return (
        <>
        <div className="w-full flex justify-around items-center">
            <div className="w-3/5">
                <h1 className="text-[40px] font-bold leading-10 my-4">Learn Smart <br/> Enlighten Your Path</h1>
                <p>
                    Nlightenu empower users in their quest for knowledge.
                    With our platform, users can seamlessly access a diverse range of courses, explore an array of insightful articles, and create their own content. 
                    With cutting-edge AI integration, which recommends the most relevant and enriching materials for users' specific interests and subjects of study.
                    Whether you're seeking to expand your horizons, enhance your skills, or share your wisdom with the world, Nlightenu is your gateway to a world of limitless learning possibilities. 
                    Welcome to a brighter way of learning at Nlightenu.
                </p>
            </div>
            <div className="h-4/5 w-1/3">
                <img src = "/images/home_para.png" className = "h-full w-full object-cover" alt = "home_image"/>
            </div>
        </div>

        <div className="flex justify-around items-center my-12">
            <ImageTitleCard image = "./images/articles.jpg" title="Read and Create Articles"/>
            <ImageTitleCard image = "./images/courses.jpg" title="Explore Courses"/>
            <ImageTitleCard image = "./images/ai.jpg" title="Craft AI Based Course"/>
        </div>

        <div className="w-full px-12 my-12">
            <h2 className="text-[32px] font-bold">Top Courses</h2>
            <div className="w-full grid grid-cols-3 justify-items-center columns-3 gap-y-8">
            <ImageTitleCard image = "./images/articles.jpg" title = "Learn Machine Learning"/>
            <ImageTitleCard image = "./images/articles.jpg" title = "Learn Machine Learning"/>
            <ImageTitleCard image = "./images/articles.jpg" title = "Learn Machine Learning"/>
            <ImageTitleCard image = "./images/articles.jpg" title = "Learn Machine Learning"/>
            <ImageTitleCard image = "./images/articles.jpg" title = "Learn Machine Learning"/>
            <ImageTitleCard image = "./images/articles.jpg" title = "Learn Machine Learning"/>
            </div> 
            <h2 className="text-[16px] font-bold my-4 cursor-pointer text-right">View More</h2>
        </div>

        <div className="w-full px-12 my-12">
            <h2 className="text-[32px] font-bold">Trending Articles</h2>
            <div className="w-full grid grid-cols-3 justify-items-center columns-3 gap-y-8">
            <ImageTitleCard image = "./images/ai.jpg" title = "How Does Linux Kernel Works"/>
            <ImageTitleCard image = "./images/ai.jpg" title = "How Does Linux Kernel Works"/>
            <ImageTitleCard image = "./images/ai.jpg" title = "How Does Linux Kernel Works"/>
            <ImageTitleCard image = "./images/ai.jpg" title = "How Does Linux Kernel Works"/>
            <ImageTitleCard image = "./images/ai.jpg" title = "How Does Linux Kernel Works"/>
            <ImageTitleCard image = "./images/ai.jpg" title = "How Does Linux Kernel Works"/>
            </div> 
            <h2 className="text-[16px] font-bold my-4 cursor-pointer text-right">View More</h2>
        </div>
        </>
    );
}

export default HomePage;