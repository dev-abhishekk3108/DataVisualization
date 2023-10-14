import React from 'react';

interface MedianCalculatorProps {
    data: number[];
}

const MedianCalculator: React.FC<MedianCalculatorProps> = ({ data }) => {
    const sortedData = data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
        const median = ((sortedData[middle - 1] + sortedData[middle]) / 2);
        if (!isNaN(median)) {
            return <div>{median.toFixed(3)}</div>;
        } else {
            return <div>Invalid data</div>;
        }
    } else {
        const median = sortedData[middle];
        if (!isNaN(median)) {
            return <div>{median.toFixed(3)}</div>;
        } else {
            return <div>Invalid data</div>;
        }
    }
};

export default MedianCalculator;
