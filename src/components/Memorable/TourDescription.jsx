import React from 'react';

const TourDescription = ({ description }) => {
    function formatTourDescription(description) {
        if (typeof description !== 'string') {
            console.error("Invalid input: description must be a string.");
            return ""; // Handle as needed
        }

        return description
            .replace(/\n\s*\n/g, '\n\n') // Replace double newlines with a single double newline
            .replace(/\n+/g, '\n')      // Replace any remaining multiple newlines with a single newline
            .trim();                    // Trim leading/trailing whitespace
    }

    const formattedDescription = formatTourDescription(description);

    return (
        <div className="tour-description">
            {formattedDescription.split('\n').map((line, index) => (
                <h3 key={index}>{line}</h3> // Wrap each line in a <p> element
            ))}
        </div>
    );
};

export default TourDescription;
