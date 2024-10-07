import { useEffect, useState } from "react";
import CharacterImage from "./CharacterImage";
import CharacterEpisodes from "./CharacterEpisodes";

function InfoCharacters(props) {

    const[info, setInfo] = useState([]);

    let getData = () => {
        try{
            fetch("https://rickandmortyapi.com/api/character",{
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                }
            })
            .then((rta) => {return(rta.json())})
            .then((data) => {
                setInfo(data.results);
            })
            .catch((err) => {
                console.log("Error:"+err.message)});

            }catch(error){
            console.log("Error:" + error.message);
            }
    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <>
        <div className="cards-container">
            {info.map((d, i) => (
                <div key={i} className="card">
                <h2>{d.name}</h2>
                <CharacterImage
                    imageUrl={d.image}
                    name={d.name}
                    origin={d.origin.name}
                    location={d.location.name}
                />
                <p><strong>Status:</strong> {d.status}</p>
                <p><strong>Species:</strong> {d.species}</p>
                <p><strong>Gender:</strong> {d.gender}</p>
                <CharacterEpisodes episodesUrls={d.episode}/>
                {/* <p><strong>Número:</strong> {d.id}</p> */}
                {/* <button type="button">Espisodios del Personaje</button> */}
                <br/>
                </div>
            ))}
        </div>
        
        </>
    );
}

export default InfoCharacters;