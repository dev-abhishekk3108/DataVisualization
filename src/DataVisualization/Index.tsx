import winedata from './WineData';
import { Gamma, Flavanoids } from './Visualization/Index'


function Index() {

    const filteredFlavanoidsData = winedata.map((item) => ({
        Alcohol: parseFloat(item.Alcohol as string) || 0,
        Flavanoids: parseFloat(item.Flavanoids as string) || 0,
    }));

    const filteredGammaWineData = winedata.map((item) => ({
        Alcohol: parseFloat(item.Alcohol as string) || 0,
        Ash: parseFloat(item.Ash as string) || 0,
        Hue: parseFloat(item.Hue as string) || 0,
        Magnesium: parseFloat(item.Magnesium as string) || 0,
    }));


    return (
        <div className="App">
            <h1 style={{ textAlign: "center" }}>Data Visualization Task</h1>
            <Flavanoids WineData={filteredFlavanoidsData} />
            <Gamma WineData={filteredGammaWineData} />
        </div >
    );
}

export default Index;
