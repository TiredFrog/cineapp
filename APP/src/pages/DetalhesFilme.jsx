import { useState, useEffect } from "react";
import{ useParams } from "react-router-dom";

function DetalhesFilme()
{
    const {id} = useParams()
    const[filme, setFilmes] = useState({})

    useEffect( () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
        .then(response => response.json())
        .then(response => setFilmes(response))
        .catch(error => console.log(error))
    },[])

    return (
        <>
        <h1> Detalhes do Filme</h1>
        <p>{filme.title}</p>
        </>
    );
}

export default DetalhesFilme;