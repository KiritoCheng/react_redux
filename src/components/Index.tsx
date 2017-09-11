import * as React from 'react';
import {connect} from 'react-redux';


const {
    Component
} = React;


class Index extends Component <any, any>{

    render() {
        return (
            <div> index </div>
        );
    }
}


export default connect()(Index);
