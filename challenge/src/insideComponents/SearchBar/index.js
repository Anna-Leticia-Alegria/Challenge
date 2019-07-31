import React from 'react';

import './index.less';

class SearchBar extends React.Component {
    state = { term : '' , searchByStar : false};
    firstTimeStar = true;

    componentDidUpdate () {
        if(this.props.searchByStar === false) {
            this.firstTimeStar = true;
        }
        else {
            if(this.firstTimeStar === true) {
                this.setState( { term : '' } );
                this.firstTimeStar = false;
            }
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault(); //para impedir de atualizar a pagina depois de enivar o formulario

        this.props.onFormSubmit (this.state.term);
        this.setState( { term : '' } );
    }

    onKeyDown = (event) => {
        if (this.props.searchByStar && event.keyCode === 8) {
            this.setState( { term : '' } );
        }
    }

    onInputChange = (event) => {
        if (this.props.searchByStar) {
            const re = /^[1-5\b]{1}$/;

            if (event.target.value === '' || re.test(event.target.value)) {
                this.setState( { term : event.target.value } );
            }
        }
        else {
            this.setState( { term : event.target.value } );
        }
    }

    render (){
        return (
            <div className = "searchBarContainer">
                <form className = "formContainer" onSubmit = {this.onFormSubmit}>
                    <input 
                            className = "inputContainer"
                            type = "text" 
                            value = {this.state.term} 
                            onChange = {this.onInputChange}
                            onKeyDown = {this.onKeyDown}
                    />
                </form>
            </div>  
        );
    }
}

export default SearchBar;