import React from "react";
import Avatar from "./Avatar";

const ArticleCard = ({article}) => {
    return (
        <div className="w-[64rem] h-60 flex border justify-between px-4 my-12 hover:shadow-lg cursor-pointer">
            <div className="w-3/4 h-full flex flex-col justify-around">
                <div className="h-12 flex items-center">
                <Avatar image = {article.userAvatar}/>
                <h5 className="p-4 text-sm">{article.author}</h5>
                </div>

                <div className="w-full h-42">
                    <h2 className="text-xl font-semibold">{article.title}</h2>
                    <br/>
                    <p className="text-slate-800">{article.content.substr(0,120) + "..."}</p>
                </div>

                <div className="flex items-center text-sm text-slate-600">
                    <p>{article.date}</p>
                </div>
            </div>

            <div className="h-full w-1/5 flex justify-center items-center">
                <img src ={article.imageUrl} className="w-full max-h-60 object-contain object-center" alt = "article_image"/>
            </div>

        </div>
    );
}

export default ArticleCard;