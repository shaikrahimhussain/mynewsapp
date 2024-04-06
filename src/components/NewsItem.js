import React from "react";

const NewsItem =(props)=> {
    let {
      title,
      description,
      urlToImage,
      NewsUrl,
      author,
      publishedAt,
      source,
    } =props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="badge rounded-pill bg-danger"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            {source}
          </span>
          <img src={urlToImage} className="card-img-top" alt="/" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={NewsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
