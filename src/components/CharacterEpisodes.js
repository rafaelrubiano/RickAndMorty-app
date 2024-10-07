import { useEffect, useState } from 'react';

function CharacterEpisodes({ episodesUrls }) {
  const [episodes, setEpisodes] = useState([]);

  // Función para obtener los datos de los episodios
  const getEpisodesData = async () => {
    try {
      // Realizamos varias solicitudes a la vez (fetch para cada URL de episodio)
      const episodesData = await Promise.all(
        episodesUrls.map(url => fetch(url).then(res => res.json()))
      );
      
      // Filtramos solo el id y el nombre del episodio
      const episodesInfo = episodesUrls.map((url, index) => {
        const episodeId = url.split("/").pop(); // Extraer el id de la URL
        return {
          id: episodeId,
          name: episodesData[index].name  // El nombre del episodio
        };
      });

      setEpisodes(episodesInfo);
    } catch (error) {
      console.log("Error al obtener episodios:", error.message);
    }
  };

  useEffect(() => {
    if (episodesUrls.length > 0) {
      getEpisodesData();  // Obtener episodios solo si hay URLs
    }
  }, [episodesUrls]);

  return (
    <div>
      <h4>Episodes:</h4>
      <ul>
        {episodes.map((ep, index) => (
          <li key={index}>
            Episode {ep.id}: {ep.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterEpisodes;