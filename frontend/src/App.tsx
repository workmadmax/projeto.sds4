import DataTable from "components/DataTable";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>MANTENHA O FOCO NA VITÓRIA</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
