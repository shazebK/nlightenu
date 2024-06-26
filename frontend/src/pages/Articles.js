import React from "react";
import { Link , useLoaderData, json} from "react-router-dom";
import ArticleCard from "../components/UI/ArticleCard";

const Articles = () => {
    const articles = useLoaderData();
    return (
        <>
        <div className="w-full flex flex-col items-center">
        {
            articles.map((article) => <Link to={article._id} key = {article._id}><ArticleCard article = {article}/></Link>)
        }
        </div>
        <Link to = "/articles/upload">
            <div className="bg-red-400 flex justify-center items-center rounded-full h-24 w-24 fixed bottom-8 right-8">
            <p className="text-white text-4xl">+</p>
            </div>
        </Link>
        </>
    )
}

export default Articles;


export async function loader(){
    const response = await fetch('http://localhost:8080/articles');

    if(!response.ok){
        return json({message:"Could not fetch articles"},{status:500});
    }

    return response;
}