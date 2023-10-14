import React from 'react';
import Table from '../Table/Table';


interface StatisticsTableProps {
    WineData: {
        Alcohol: number;
        Flavanoids: number;
    }[];
}

const Flavanoids: React.FC<StatisticsTableProps> = ({ WineData }) => {
    const classes = [...new Set(WineData.map((item) => item.Alcohol))];
    const measures = ['Mean', 'Median', 'Mode'];

    return (
        <Table classes={classes} measures={measures} WineData={WineData} itemName="Flavanoids" />
    );
};

export default Flavanoids;
