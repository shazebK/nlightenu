import React from "react";
import Avatar from "../components/UI/Avatar";
import { useLoaderData } from "react-router-dom";


const ArticlePage = () => {
    const article = useLoaderData();
    return (
        <div className="w-full flex flex-col px-8">
            <div className="w-full border-b border-black py-4 my-4">
                <h1 className="text-4xl font-semibold">{article.title}</h1>
                <div className="h-12 flex items-center">
                    <Avatar image = {article.userAvatar}/>
                    <h5 className="p-4 text-md">{article.author}</h5>
                </div>
                <p className="text-md text-gray-600">{article.date}</p>
            </div>
            <div>
                <p>{article.content}</p>
            </div>
        </div>
    )
}


export async function loader({request,params}){
    const articleId = params.articleId;
    
    const response = await fetch("http://localhost:8080/articles/" + articleId);

    return response;
}



export default ArticlePage;