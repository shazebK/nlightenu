import React from "react";
import {useRouteError} from "react-router-dom";
import Navbar from "../components/UI/Navbar";

const ErrorPage = () => {
    const error = useRouteError();
    let title = "OOPS !"
    let message = "Something went wrong"

    if(error.status === 500){
        title = "Server Not Responding";
        message = error.data.message;
    }

    if(error.status === 404){
        title = "Not Found";
        message = "Could not Find the resource you are looking for";
    }

    return (
        <>
        <Navbar/>
        <div className="w-96 flex flex-col justify-center items-center mx-auto my-20">
            <h1 className="text-4xl my-4">{title}</h1>
            <p>{message}</p>
        </div>
        </>
    );
}

export default ErrorPage;

