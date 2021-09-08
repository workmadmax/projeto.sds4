import DataTable from "components/DataTable";
import BarChart from "components/BarChart"
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Sucess Rate (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary"> Sucess Rate (%) </h5>
            <DonutChart />
          </div>
        <div className="py-3">
          <h2 className="text-primary">All Sales</h2>
        </div>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
