import React, { useEffect } from "react";

export const NotFound = () => {

    useEffect(() => {
        document.title = "Lisandro Palavecino | Error!";
      }, []);

    return (
        <div>
            <h1>Page not found</h1>
        </div>
    )
}