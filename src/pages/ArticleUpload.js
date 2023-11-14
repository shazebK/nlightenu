import React, { useState } from "react";
import Image from "../components/Icons/Image";

const ArticleUpload = () => {
    const [coverText,setCoverText] = useState("");
    const coverImageChange = (event) => {
        if(event.target.files[0]){
            const newCoverText = event.target.files[0].name;
            setCoverText(newCoverText);
        }
    }

    return (
        <div className="w-4/5 mx-auto my-12">
            <div className="w-full h-16 bg-gray-800 flex justify-center items-center">
                <h1 className="text-white text-xl">Publish Your Article</h1>
            </div>
            <form className="w-full h-full flex flex-col">
                
                <div className="w-full flex items-center justify-end">
                <p>{coverText}</p>
                <label for = "cover-image" className="w-48 p-2 flex justify-around items-center bg-gray-800 rounded-fulltext-white m-4 mr-0 text-white cursor-pointer"><Image/> Upload Cover</label>
                <input className="hidden" type = "file" accept = "image/*" id = "cover-image" name = "thumbnail" onChange = {coverImageChange}/>
                </div>

                <input className="w-full text-4xl font-semibold p-4 outline-none" type = "text" name = "title" placeholder = "Title"/>

                <textarea className = "w-full p-4 outline-none my-4 border" name = "content" placeholder="Write here.." rows={12}/>

                <button className = "bg-blue-800 w-60 self-center text-lg rounded-full text-white p-2" type = "submit">Publish</button>
            </form>
        </div>
    );
}

export default ArticleUpload;