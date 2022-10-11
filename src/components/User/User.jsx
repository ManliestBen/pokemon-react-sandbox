import Address from "../Address/Address";

const User = (props) => {
  return (
    <>
      <h2>{props.user.name}</h2>
      <h3>{props.user.email}</h3>
      <Address address={props.user.address}/>
    </>
  );
}

export default User;