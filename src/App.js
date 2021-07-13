import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <NavTabs />
                <Route exact path="/" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/contact" component={Contact} />
                <Footer />
            </div>
        </Router>
    )
}



export default App;
