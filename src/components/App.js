import Menu from './Menu';
import Monitoring from './Monitoring';
import Workload from './Workload';
import {Switch, Route} from 'react-router-dom';

import './App.css';

export default function App(){
    return(
        <div className='app'>
            <Menu/>
            <div className='pages'>
                <Switch>
                    <Route exact path='/monitoring' component={Monitoring} />
                    <Route exact path='/workload' component={Workload} />
                </Switch>
            </div>
        </div>
    )
}