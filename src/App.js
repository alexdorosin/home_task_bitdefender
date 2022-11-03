import Navbar from "./components/Navbar";
import React from "react";
import Header from "./components/Header";
import DashboardContent from "./modules/DashboardContent";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Header />
            <main>
                <DashboardContent />
            </main>
        </React.Fragment>
    );
}

export default App;
