import React, { useState } from "react";
import { Form, json, redirect, useActionData } from "react-router-dom";
import ImageIcon from "../components/Icons/Image";

const ArticleUpload = () => {
    const errors = useActionData();
    console.log(errors);

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

            {
            errors && 
            <ul style = {{color:"red"}}>
                {Object.values(errors).map(message => <li key = {message}> {message} </li>)}
            </ul>
            }

            <Form method = 'post' className="w-full h-full flex flex-col" encType="multipart/form-data">
                
                <div className="w-full flex items-center justify-end">
                <p>{coverText}</p>
                <label htmlFor = "cover-image" className="w-48 p-2 flex justify-around items-center bg-gray-800 rounded-fulltext-white m-4 mr-0 text-white cursor-pointer"><ImageIcon/> Upload Cover</label>
                <input className="hidden" type = "file" accept = "image/*" id = "cover-image" name = "image" onChange = {coverImageChange}/>
                </div>

                <input className="w-full text-4xl font-semibold p-4 outline-none" type = "text" name = "title" placeholder = "Title"/>

                <textarea className = "w-full p-4 outline-none my-4 border" name = "content" placeholder="Write here.." rows={12}/>

                <button className = "bg-blue-800 w-60 self-center text-lg rounded-full text-white p-2">Publish</button>
            </Form>
        </div>
    );
}

export default ArticleUpload;

export async function action({request,params}){
    const data = await request.formData();

    // //Get the details of the user here
    // const userId = "12345"
    // const userData = await fetch('http://localhost:8080/users/' + userId);
    // const user = await userData.json();

    const formData  = new FormData();
      
    formData.append('author','shazebK');
    formData.append('title', data.get('title'));
    formData.append('content', data.get('content'));
    formData.append('image', data.get('image'));
  
    const response = await fetch('http://localhost:8080/articles', {
      method: 'POST',
      body: formData
    });

    if(response.status === 422){
        return response;
    }

    if(!response.ok){
        throw json({message:"Could not upload your article"},{status:500});
    }

    return redirect('/articles');
}
