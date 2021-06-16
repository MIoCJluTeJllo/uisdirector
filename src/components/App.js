import Menu from './Menu';
import Monitoring from './Monitoring';
import Workload from './Workload';
import {Switch, Route, withRouter} from 'react-router-dom';

import './App.css';

export default function App(){
    const MenuWithRouter = withRouter(Menu);
    return(
        <div className='app'>
            <MenuWithRouter/>
            <div className='pages'>
                <Switch>
                    <Route exact path='/' component={Monitoring} />
                    <Route exact path='/workload' component={Workload} />
                </Switch>
            </div>
        </div>
    )
}