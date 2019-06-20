import React, { Component } from "module";
import { Link } from "react-router-dom";
import { Jumbotron } from "../components/Jumbotron";
import { Navbar } from "../components/Navbar";
import { Col, Row, Container } from "../components/Navbar";
import { Card } from "../components/Card";
import { List, ListItem } from "../components/List";

class Saved extends Component {
    state = {
        books: []
    };

    googleBooks = () => {
        const { query: params } = req;
        axios
            .get("https://www.googleapis.com/books/v1/volumes", {
                params
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
            .then(books => this.setState({books: books}))
            .catch(err => res.status(422).json(err));
    }

    componentDidMount() {

    };

    render() {

    };

}

export default Saved;