import React from 'react';

const Card = ({
    imageSrc,
    category,
    title,
    authorImage,
    authorName,
    date
}) => {
    return (
        <div className="col">
            <div className="card h-100 card-design text-white border border-1 border-dark">
                <div className="card-body rounded-3 gap-4">
                    {imageSrc && (
                        <img src={imageSrc} className="card-img-top mb-2" alt={title || 'Image'} />
                    )}
                    {category && <h4 className="badge badge-primary">{category}</h4>}
                    {title && <h3 className="card-title">{title}</h3>}
                </div>
                <div className="card-footer">
                    <div className="d-flex gap-2 justify-content-between align-items-center mt-auto">
                        {authorImage || authorName ? (
                            <div className="d-flex gap-2 justify-content-between align-items-center">
                                {authorImage && <img src={authorImage} alt="Author" />}
                                {authorName && <span>{authorName}</span>}
                            </div>
                        ) : null}
                        {date && <span>Date: {date}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
