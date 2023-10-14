import { MeanCalculator, MedianCalculator, ModeCalculator } from "../Formula/Index";
import './Table.css';

interface DataTableStructureProps<T> {
    classes: number[];
    measures: string[];
    itemName: string;
    WineData: T[];
}

type WineDataType = {
    [key: string]: number;
};

const Table = <T,>({
    classes,
    measures,
    WineData,
    itemName,
}: DataTableStructureProps<WineDataType>) => (
    <table className='dtable-table'>
        <thead>
            <tr>
                <th>Measure</th>
                {classes.map((classValue) => (
                    <th key={classValue}>Class {classValue}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {measures.map((measure) => (
                <tr key={measure}>
                    <th>{measure}</th>
                    {classes.map((classValue) => (
                        <td key={classValue}>
                            {measure === 'Mean' && (
                                <MeanCalculator
                                    data={WineData
                                        .filter((item) => item.Alcohol === classValue)
                                        .map((item) => item[itemName])}
                                />
                            )}
                            {measure === 'Median' && (
                                <MedianCalculator
                                    data={WineData
                                        .filter((item) => item.Alcohol === classValue)
                                        .map((item) => item[itemName])}
                                />
                            )}
                            {measure === 'Mode' && (
                                <ModeCalculator
                                    data={WineData
                                        .filter((item) => item.Alcohol === classValue)
                                        .map((item) => item[itemName])}
                                />
                            )}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;
