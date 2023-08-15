import React from "react";
import Star from "./Star";

interface StarsProps {
    count: number;
}

const Stars: React.FC<StarsProps> = ({ count }) => {
    const starElements: JSX.Element[] = [];

    for (let i = 0; i < count; i++) {
        starElements.push(<Star key={i} />);
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {starElements}
        </ul>
    );
}

export default Stars;
