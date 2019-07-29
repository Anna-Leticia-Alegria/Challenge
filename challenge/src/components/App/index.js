import React from 'react';
import ReactDOM from 'react-dom';

import Menu from '../Menu/index'
import SideList from '../SideList/index'
import DisplayInfo from '../DisplayInfo';

class App extends React.Component {
    render () {
        return (
            <div>
                <Menu />
                <SideList />
                <DisplayInfo />
            </div>
        );
    }
}

export default App;