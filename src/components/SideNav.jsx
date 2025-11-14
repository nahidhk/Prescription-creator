import React from "react";
import { useNavigate } from "react-router-dom";


// icons


import { MdHome } from "react-icons/md";
import { FaFilePrescription } from "react-icons/fa";



export default function SideNav() {
    const navigate = useNavigate();
    return (
        <blockquote>
            <div>
                <button onClick={() => navigate("/")} className="sideNavBtn btn flex medel">
                    <MdHome className="icon" />
                    <span>
                        Home
                    </span>
                </button>
                <button onClick={() => navigate("/prescription")} className="sideNavBtn btn flex medel">
                    <FaFilePrescription className="icon"/>
                    <span>
                        Prescription
                    </span>
                </button>
            </div>
        </blockquote>
    )
}