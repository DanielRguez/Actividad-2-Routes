import { useCallback, useEffect, useState } from "react";

const useFetch = (url) =>{  
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    const fetchData = useCallback( async() => {
        //Activamos  el estado de carga 
        setLoading(true);
        try{
            const res = await fetch(url);
            if(!res.ok) throw new Error('Error al consumir la api')
            const data= await res.json();
            setData(data);
        }catch (error){
            setError(error.message);
        }finally {
            //Siempre se ejecuta al finalizar, con error o éxito
            setLoading(false);
        }
    }, [url]) 

    useEffect( () => {
        //console.log('useEffect');
        fetchData();
    }, [fetchData]);

    return {data, error, loading}
}

export default useFetch;