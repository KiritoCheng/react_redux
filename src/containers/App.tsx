import * as React from 'react';
const {
    Component
} = React;

import {Router, Route, Link, IndexRoute} from 'react-router';
import {connect} from 'react-redux';

import AppContainer from '../components/App';
import Index from '../components/Index';


class App extends Component<any, any> {

    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        return (
            <Router>
                <Route path="/" component={AppContainer}>
                    <IndexRoute component={Index}/>
                </Route>
                <Route path='*' component={Index}/>
            </Router>
        );
    }

}



export default connect<any, any, any>(App);
