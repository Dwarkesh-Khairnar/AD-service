import React from "react";
import { Navigate } from 'react-router-dom'
import Cookie from 'js-cookie'

export default function protection({ children }) {
   const token = Cookie.get("token")     //Temprery storage

   if (!token) return <Navigate to="/login" replace />;

   return children;
}