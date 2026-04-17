import React from "react";
import { Navigate } from 'react-router-dom'

export default function protection({ children }) {
   const token = "";

   if (!token) return <Navigate to="/login" replace />;

   return children;
}