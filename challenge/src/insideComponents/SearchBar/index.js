import React from 'react';

import './index.less';

class SearchBar extends React.Component {
    state = { term : ''};
    firstTimeStar = true;

    componentDidUpdate () {
        const {searchByStar} = this.props
        if(searchByStar === false) {
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
        const {searchByStar} = this.props
        if (searchByStar && event.keyCode === 8) {
            this.setState( { term : '' } );
        }
    }

    onInputChange = (event) => {
        const {searchByStar} = this.props
        if (searchByStar) {
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
        const {term} = this.state
        return (
            <div className = "searchBarContainer">
                <form className = "formSearchContainer" onSubmit = {this.onFormSubmit}>
                    <input 
                            className = "inputSearchContainer"
                            type = "text" 
                            value = {term} 
                            onChange = {this.onInputChange}
                            onKeyDown = {this.onKeyDown}
                            placeholder = "Search anime"
                    />
                </form>
            </div>  
        );
    }
}

export default SearchBar;