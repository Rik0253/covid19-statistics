import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from '../components/Home';
import CountryData from "../components/CountryData";

const index = () => {
    return (
        <>    
            <Router>                
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/country/:iso" component={CountryData}></Route>
                   
                </Switch>
            </Router>
        </>
    )
}

export default index;