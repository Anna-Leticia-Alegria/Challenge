import React from 'react';

import './index.less';

class SearchBar extends React.Component {
    state = { term : '' };

    onFormSubmit = (event) => {
        event.preventDefault(); //para impedir de atualizar a pagina depois de enivar o formulario

        this.props.onFormSubmit (this.state.term);
    }

    onInputChange = (event) => {
        this.setState( { term : event.target.value } );
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
                    />
                </form>
            </div>  
        );
    }
}

export default SearchBar;