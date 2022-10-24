import react, {useState, useEffect} from 'react';
import axios from 'axios';

//import data from 'src/mocks/handlers'


export default function Details(props) {
    const { characterId, close } = props
    const [details, setDetails] = useState(null)

    useEffect( () => {
        axios.get('https://swapi.dev/api/people/')
        .then(res => setDetails(res.data))
        .catch(err => console.error(err))
      }, [])

    



    return (
        <div>
            details && <>
                <p>Gender: ${props.gender}</p>
                <p>Height: ${props.height}</p>
                <p>Mass: ${props.mass}</p>
                <p>Birth Year: ${props.birth_year}</p>
                <p>Eye Color: ${props.eye_color}</p>
                <p>Hair Color: ${props.hair_color}</p>
                <p>Skin Color: ${props.skin_color}</p>
            </>
            <button onClick={close}>Close</button>
        </div>

    )
}
