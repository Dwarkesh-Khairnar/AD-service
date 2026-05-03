import React, { useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

function uniDashboard() {
    const Navigate = useNavigate();
    const hasFetchedData = useRef(false);

    useEffect(() => {

        const getUserData = async () => {
            if (hasFetchedData.current) return; // Prevent multiple calls

            hasFetchedData.current = true; // Set the flag
            const dashboardRole = Cookie.get("role")
            console.log(dashboardRole === "Admin");

            if (dashboardRole === "Admin") {
                Navigate('/adminDashh')
            } else if (dashboardRole === "publisher") {
                Navigate('/publisherDashbard')
            } else {
                Navigate('/advertiserDash_1')
            }
        }
        getUserData()
    }, [])
    return (
        <div>reidirect</div>
    )
}

export default uniDashboard