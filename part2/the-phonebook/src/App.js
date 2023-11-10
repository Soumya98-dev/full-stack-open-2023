import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122', id: 4 }
  ]);
  //FOR CONTROLLING THE FORM INPUT ELEMENT
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const addNewPerson = (event) => {
    event.preventDefault();

    //CHECKING FOR DUPLICATE ENTRIES
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const newPersonObj = {
        name: newName,
        phoneNumber: newPhoneNumber,
      };
      setPersons(persons.concat(newPersonObj));
      setNewName("");
      setNewPhoneNumber("");
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  const filterByName = () => {

  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={filterByName} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name : <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number:{" "}
          <input value={newPhoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => {
        return (
          <div key={i}>
            {person.name} {person.phoneNumber}
          </div>
        );
      })}
    </div>
  );
};

export default App;
