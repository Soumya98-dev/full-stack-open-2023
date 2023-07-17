const Part = ({ id, name, exercises }) => {
  return (
    <div>
      <li id={id}>
        {name} {exercises}
      </li>
    </div>
  );
};

export default Part;
