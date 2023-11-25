import { redirect } from "react-router-dom";
import { deleteCookie } from "../utils/auth";

export function action(){
    deleteCookie("token");
    deleteCookie("userId");
    return redirect("/");
}