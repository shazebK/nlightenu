import React from "react";
import { Link , useLoaderData } from "react-router-dom";
import ArticleCard from "../components/UI/ArticleCard";

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