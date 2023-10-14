import React from 'react';

interface MeanCalculatorProps {
    data: number[];
}

const MeanCalculator: React.FC<MeanCalculatorProps> = ({ data }) => {
    const sum = data.reduce((acc, value) => acc + value, 0);
    const mean = (sum / data.length).toFixed(3);

    return <div>{mean}</div>;
};

export default MeanCalculator;
