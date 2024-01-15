import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import { Link } from "react-router-dom";
import { CharactersContext } from '../App';
import { useState, useContext } from "react";

const BlogCharacter = () => {
    const params = useParams();  
    const {charactersList} = useContext(CharactersContext);
    // const url = `https://rickandmortyapi.com/api/character/${params.id}`;
    // const {data, loading, error}= useFetch(
    //     url
    //     );

    if (!charactersList || !charactersList[params.id]) {
        return <h1>Ese personaje ya no existe...</h1>;
    }

    const character = charactersList[params.id];

    return (
        <div className="card">
            <img src={character.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.species}</p>
                <Link to={`/blog`} className="btn btn-primary">Vuelve</Link>
            </div>
        </div>
    )
}

export default BlogCharacter;