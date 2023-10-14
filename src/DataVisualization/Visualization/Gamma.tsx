import React from 'react';
import Table from '../Table/Table';


interface StatisticsTableProps {
    WineData: {
        Alcohol: number;
        Ash: number;
        Hue: number;
        Magnesium: number;
    }[];
}

const Gamma: React.FC<StatisticsTableProps> = ({ WineData }) => {
    console.log(WineData)
    const classes = [...new Set(WineData.map((item) => item.Alcohol))];
    const measures = ['Mean', 'Median', 'Mode'];
    const gammaData = WineData.map((item) => ({
        Alcohol: item.Alcohol,
        Gamma: (item.Ash * item.Hue) / item.Magnesium,
    }));
    console.log(gammaData)
    return (
        <Table classes={classes} measures={measures} WineData={gammaData} itemName="Gamma" />
    );
};
export default Gamma;
