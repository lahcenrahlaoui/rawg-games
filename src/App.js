import React from "react";
import {
    BrowserRouter,
    HashRouter,
    Routes,
    Route,
    browserHistory,
} from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/rawg-games" element={<Home />} />
                    <Route path="/rawg-games/:id" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
