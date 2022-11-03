import Navbar from "./components/Navbar";
import React from "react";
import Header from "./components/Header";
import DashboardContent from "./modules/DashboardContent";
import "./App.css";

function App() {
    return (
        <React.Fragment>
            <div className="main-container">
                <Navbar />
                <Header />
                <main>
                    <DashboardContent />
                </main>
            </div>
            <div className="fallback">
                <h3>
                    Small screen devices are not yet supported. Thank you for
                    understanding!
                </h3>
            </div>
        </React.Fragment>
    );
}

export default App;
