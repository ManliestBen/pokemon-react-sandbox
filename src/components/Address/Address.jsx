import Geo from "../Geo/Geo";

const Address = (props) => {
  return (
    <>
      <h4>{props.address.street}</h4>
      <h4>{props.address.city}</h4>
      <h4>{props.address.zipcode}</h4>
      <Geo geo={props.address.geo} />
    </>
  );
}

export default Address;