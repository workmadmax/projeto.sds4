import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className=" ">
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Sales Dashboard </h1>
                    <p className="lead initialism">Analyze your sales perfomance from different perspectives</p>
                    <hr />
                    <span className="h5"><p>This application consist of displaying a dashboard from data provided by a backend built with Spring</p></span>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Access Dashboard
                    </Link>
                </div>
            </div>

            <Footer  />
            </div>
        </>
    );
}
export default Home