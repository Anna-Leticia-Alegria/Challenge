import React from 'react';
import Dropdown from 'react-dropdown'

import 'react-dropdown/style.css'
import './index.less';

import Stars from '../Stars/index';

class AddAnimePage extends React.Component {
    state = {name: '', category: '', nEpisodes: '', date: '', ranked: false, nStars: 0, image: '', synopsis: "", trailerUrl: '', starsNotClicked: 0};
    categoryOptions = ['drama', 'isekai', 'shounen', 'shoujo'];

    onFormSubmit = (event) => {
        event.preventDefault(); //para impedir de atualizar a pagina depois de enivar o formulario
    }

    onSaveClick = () => {
        //abrir popup
        //setar date com a data que a pessoa fez isso (parse?)
        //mandar para o back os dados
        this.setState({name: '', category: '', nEpisodes: '', date: '', ranked: false, nStars: 0, image: '', synopsis: "", trailerUrl: '', starsNotClicked: 0});
    }

    onStarClick = (nStars) => {
        this.setState({nStars : nStars});
    }

    onStarMousePass = (nStars) => {
        this.setState({starsNotClicked : nStars});
    }

    onStarMouseLeave = () => {
        this.setState({starsNotClicked : 0});
    }

    render() {
        const {name, category, nEpisodes, nStars,image, synopsis, trailerUrl, starsNotClicked} = this.state
        return (
            <div className="addAnimePageContainer">
                <div className = "addInfoHeader">
                    Add Anime Entry
                </div>
                <div className = "addInfoContainer">
                    <div className = "fieldInfoContainer">
                        <div className = "fieldNameContainer">
                            Name:
                        </div>
                        <form className = "formContainer" onSubmit = {this.onFormSubmit}>
                            <input 
                                className = "addInfoInputContainer"
                                type = "text" 
                                value = {name} 
                                onChange = {(event)=>{this.setState( { name : event.target.value } );}}
                            />
                        </form>
                    </div>
                    <div className = "fieldInfoContainer">
                        <div className = "fieldNameContainer">
                            Category:
                        </div>
                        <Dropdown 
                            className = "categoryDropdown" 
                            options={this.categoryOptions} 
                            onChange={(event)=>{this.setState( { category : event.value } );}} 
                            value={category} 
                            placeholder="Select an option" 
                        />
                    </div>
                    <div className = "fieldInfoContainer">
                        <div className = "fieldNameContainer">
                            Total episodes:
                        </div>
                        <form className = "formContainer" onSubmit = {this.onFormSubmit}>
                            <input 
                                className = "addInfoInputContainer"
                                type = "text" 
                                value = {nEpisodes} 
                                onChange = {(event)=>{this.setState( { nEpisodes : event.target.value } );}}
                            />
                        </form>
                    </div>
                    <div className = "fieldInfoContainer">
                        <div className = "fieldNameContainer">
                            Synopsis:
                        </div>
                        <form className = "formContainer" onSubmit = {this.onFormSubmit}>
                            <input 
                                className = "addInfoInputContainer"
                                type = "text" 
                                value = {synopsis} 
                                onChange = {(event)=>{this.setState( { synopsis : event.target.value } );}}
                            />
                        </form>
                    </div>
                    <div className = "fieldInfoContainer" >
                        <div className = "fieldNameContainer">
                            Rank:
                        </div>
                        <div className = "addStarContainer">
                            <Stars nStars = {(nStars) ? nStars : starsNotClicked} 
                                   ranked = {true} addStars = {true} 
                                   onStarClick = {this.onStarClick} 
                                   onStarMousePass = {this.onStarMousePass} 
                                   onStarMouseLeave = {this.onStarMouseLeave}
                            />
                        </div>
                    </div>
                    <div className = "fieldInfoContainer">
                        <div className = "fieldNameContainer">
                            Image Link:
                        </div>
                        <form className = "formContainer" onSubmit = {this.onFormSubmit}>
                            <input 
                                className = "addInfoInputContainer"
                                type = "text" 
                                value = {image} 
                                onChange = {(event)=>{this.setState( { image : event.target.value } );}}
                            />
                        </form>
                    </div>
                    <div className = "fieldInfoContainer">
                        <div className = "fieldNameContainer">
                            Trailer youtube URL:
                        </div> 
                        <form className = "formContainer" onSubmit = {this.onFormSubmit}>
                            <input 
                                className = "addInfoInputContainer"
                                type = "text" 
                                value = {trailerUrl} 
                                onChange = {(event)=>{this.setState( { trailerUrl : event.target.value } );}}
                            />
                        </form>
                    </div>
                    <div className = "saveButton" onClick = {this.onSaveClick}>
                        Save
                    </div>
                </div>
            </div>
        );
    }
}

export default AddAnimePage;