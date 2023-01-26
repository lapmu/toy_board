import React from "react";
import { Link } from "react-router-dom";

const Visit = ({visit}) => {
    return(
        <div>
            <div>
                <Link to="/write">
                    <div>New visit</div>
                </Link>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Visit;