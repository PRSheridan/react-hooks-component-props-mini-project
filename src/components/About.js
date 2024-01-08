import React from "react";

function About ({
    image,
    about,
    placeholder = "https://via.placeholder.com/215"
}) {
    return (
    <aside>
        <img src={image != null ? image : placeholder} alt="blog logo"/>
        <p>{about}</p>
    </aside>
    );
};

export default About;