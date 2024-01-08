import React from "react";

function Article ({
    title,
    date,
    defaultDate = "January 1, 1970",
    preview,
}) { return (
    <article>
        <h3>{title}</h3>
        <small>{date != null ? date : defaultDate}</small>
        <p>{preview}</p>
    </article>
    );
};

export default Article;