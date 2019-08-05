import React from 'react'

import './index.less'

class LogInModal extends React.Component {
    render () {
        return (
            <div onClick = {() => {this.props.closeModal()}}>
                <div>oi</div>
            </div>)
    }
}

export default LogInModal;