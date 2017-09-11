import * as React from 'react';

import {
    AppBar,
    Drawer,
    MenuItem,
    Paper,
    FlatButton
} from 'material-ui';

import {Link} from 'react-router';

const {
    Component
} = React;

export default class App extends Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }
    render() {

        return (
            <div>Hello World!</div>
        )
    }
}

// const linkStyle = {
//     width: "100%",
//     display: "inline-block",
//     color: "#444",
//     textDecoration: "none"
// };
//
// class MenuLink extends Component<any, any> {
//
//     render() {
//         return (
//             <Link style={linkStyle} to={this.props.href}>
//                 <MenuItem onTouchTap={this.props.onTouchTap}>{this.props.children}</MenuItem>
//             </Link>
//         );
//     }
// }