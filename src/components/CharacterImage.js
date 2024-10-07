// CharacterImage.js
function CharacterImage({ imageUrl, name, origin, location }) {
  return (
    <div className="card-content">
      <img 
        src={imageUrl} 
        alt={name} 
        className="card-image" 
      />
      <p><strong>Origin:</strong> {origin}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}

export default CharacterImage;