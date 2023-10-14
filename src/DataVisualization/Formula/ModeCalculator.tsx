import React from 'react';

interface ModeCalculatorProps {
    data: number[];
}

const ModeCalculator: React.FC<ModeCalculatorProps> = ({ data }) => {
    const frequencyMap: { [key: number]: number } = {};

    data.forEach((value: number) => {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    const maxFrequency = Math.max(...Object.values(frequencyMap));
    const mode = Object.keys(frequencyMap).filter(
        (value) => frequencyMap[parseFloat(value)] === maxFrequency
    );

    const roundedMode = mode.map((value) => parseFloat(value).toFixed(3)).join(', ');

    return <div>{roundedMode}</div>;
};

export default ModeCalculator;
