const Geo = (props) => {
  return (
    <>
      <h5>Latitude: {props.geo.lat}</h5>
      <h5>Longitude: {props.geo.lng}</h5>
    </>
  );
}

export default Geo;