import React from 'react';

import './index.less';

class LogInPage extends React.Component {
    render() {
        return (
            <div className="logInPageContainer" onClick = {() => this.props.changePage("home")}>
                LogIn
            </div>
        );
    }
}

export default LogInPage;