import React from 'react';

// Component to truncate description after 10 words
const DescriptionTruncator = ({ description, wordLimit }) => {
    const truncateDescription = (desc, limit) => {
        const words = desc.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return desc;
    };

    return <span>{truncateDescription(description, wordLimit)}</span>;
};

export default DescriptionTruncator;
