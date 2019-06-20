import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Jumbotron } from "../components/Jumbotron";
// import { Navbar } from "../components/Navbar";
// import { Col, Row, Container } from "../components/Navbar";
// import { Card } from "../components/Card";
// import { List, ListItem } from "../components/List";
import axios from "axios"

class Search extends Component {
    state = {
        books: []
    };



    googleBooks = (query) => {
        axios
            .get("https://www.googleapis.com/books/v1/volumes", {
                query
            })
            .then(results =>
                results.data.items.filter(
                    result =>
                        result.volumeInfo.title &&
                        result.volumeInfo.infoLink &&
                        result.volumeInfo.authors &&
                        result.volumeInfo.description &&
                        result.volumeInfo.imageLinks &&
                        result.volumeInfo.imageLinks.thumbnail
                )
            )
            // .then(apiBooks =>
            //     db.Book.find().then(dbBooks =>
            //         apiBooks.filter(apiBook =>
            //             dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
            //         )
            //     )
            // )
            .then(books => this.setState({ books: books }))
            
    }

    handleSubmit = () => {

    }

    componentDidMount() {
        this.loadBooks()
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm"></input>
                    <input type="submit" name="submit"></input>
                </form>
            </div>
        )
    };

}

export default Search;