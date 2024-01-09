import { Link } from "react-router-dom";
import useFetch from "../components/useFetch";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Blog = () => {
    //con serachParams.get(nombre) accedemos al valor de la url que queramos
    //con el setSearchParams establecemos el valor 
    let [searchParams, setSearchParams] = useSearchParams(); 
    const { data, error, loading} = useFetch("https://rickandmortyapi.com/api/character");

    if(loading) return (<h1>Buscando el Morty adecuado...</h1>)
    if(error) return (<h1>La pistola de portales no funciona...</h1>)

    //Creamos el useEffect solo para ver como va cambiando el searchParams
    // useEffect(()=>{
    //     console.log(searchParams.get("filter"));
    //     setSearchParams(searchParams.get("filter"))
    // })

    const handleChange = (e) =>{
        setSearchParams({filter: e.target.value});
    }

    //console.log(data.results);
    return (
        <>
            <h1>Blog - Elige tu personaje favorito</h1>
            <input 
                type="text" 
                name="" 
                onChange={handleChange} 
                className="form-control my-3" 
                alt="Buscador"
                value={searchParams.get("filter") || ""}
            ></input>
            <ul className="list-group">
                {
                    data.results
                    .filter( item =>{  
                        if(searchParams.get("filter"))
                            return item.name.toLowerCase().includes(searchParams.get("filter").toLowerCase())
                        else return item;
                    })              
                    .map(item => {
                        return (
                        <Link className="list-group-item"
                            key={item.id}
                            to={`/blog/${item.id}`}
                        >{item.name}</Link> )
                    })
                }
            </ul>


        </>
    )
}

export default Blog;