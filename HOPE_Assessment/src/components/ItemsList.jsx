const ItemsList = ({ people }) => {
  return (
    <>
      {people.map(({ firstname, lastname }, idx) => {
        return (
          <li key={idx}>
            {firstname} {lastname}
          </li>
        );
      })}
    </>
  );
};

export default ItemsList;
