import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "../views/home/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Router(props) {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default Router;
