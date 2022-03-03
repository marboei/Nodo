// @flow 
import * as React from 'react';
import {Link} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    let navigate = useNavigate()
    return (
        <div>
            <h1>Home Page</h1>
            <Link
                component="button"
                variant="body2"
                onClick={() => {
                    navigate("/projects")
                }}
            >
                Projects
            </Link>
        </div>
    );
};