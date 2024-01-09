import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import { Link } from "react-router-dom";

const BlogCharacter = () => {
    const params = useParams();  
    const url = `https://rickandmortyapi.com/api/character/${params.id}`;
    const {data, loading, error}= useFetch(
        url
        );

    if(loading) return (<h1>Buscando en el multiverso...</h1>)
    if(error) return (<h1>Ese personaje ya no existe...</h1>)

    //console.log(data);
    return (
        <div className="card">
            <img src={data.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.species}</p>
                <Link to={`/blog`} className="btn btn-primary">Vuelve</Link>
            </div>
        </div>
    )
}

export default BlogCharacter;