import React from "react";
import { Link , useLoaderData } from "react-router-dom";
import ArticleCard from "../components/UI/ArticleCard";

// const DUMMY = [
//     {
//         id:"article-1",
//         title:"How Linux Kernel Works",
//         content:"Like most modern kernels, the Linux kernel uses what's known as a monolithic kernel architecture. This means that the kernel runs as anonymous compiler",
//         thumbnail:"/images/articles.jpg",
//         userAvatar:"/images/courses.jpg",
//         author:"ShazebK",
//         date:"17 Nov",
//     },
//     {
//         id:"article-2",
//         title:"C++ Programming Language",
//         content:"C++ is the most used and most popular programming language developed by Bjarne Stroustrup.",
//         thumbnail:"/images/ai.jpg",
//         userAvatar:"/images/courses.jpg",
//         author:"Faiz Khan",
//         date:"19 Nov",
//     },
// ]

const Articles = () => {
    const articles = useLoaderData();
    return (
        <div className="w-full flex flex-col items-center">
        {
            articles.map((article) => <Link to={article._id} key = {article._id}><ArticleCard article = {article}/></Link>)
        }
        </div>
    )
}

export async function loader(){
    const response = await fetch('http://localhost:8080/articles');

    return response;
}

export default Articles;