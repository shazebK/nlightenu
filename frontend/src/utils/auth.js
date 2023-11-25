import { redirect } from "react-router-dom"
export function saveToken({token,userId}){
    const expirationTime = new Date(new Date().getTime() + 1 * 60 * 60 * 1000).toUTCString();

    document.cookie = "token=" + token + ";expires=" + expirationTime;
    document.cookie = "userId=" + userId + ";expires=" + expirationTime;
}

export function getCookie(cookieName){
    if(document.cookie){
        return document.cookie.split(';').find(cookie => cookie.startsWith(cookieName + "=")).split('=')[1];
    }
    else{
        return null;
    }
}

export function deleteCookie(cookieName){
    document.cookie = cookieName + "=;Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export function getTokenLoader(){
    return getCookie("token");
}

export function checkAuthLoader(){
    const token = getCookie("token");
    if(!token){
        return redirect("/auth?mode=login");
    }

    return null;
}