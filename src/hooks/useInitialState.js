import {useState, useEffect} from 'react';

const useInitialState = (API) =>{
    const [ data, setData ] = useState([]);
    useEffect(() =>{
        fetch(API)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log("Error: ", error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return data
}

export default useInitialState;