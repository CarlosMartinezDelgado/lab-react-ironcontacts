import "./App.css";
import allContacts from "./contacts.json";
import { useState } from "react";

// src/App.js
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));

  const handleAddContact = () => {
    const randomPos = Math.floor(Math.random() * allContacts.length )
    const randomContact = allContacts[randomPos]
    
    setContacts([randomContact, ...contacts])

  }
  const handleSortContacts = () => {
    const contactsCopy = [...contacts]
    
    setContacts(contactsCopy.sort((elem1, elem2) => elem1.name > elem2.name ? 1 : -1))
  }
  const handleSortPopularity = () => {
    const contactsCopy = [...contacts]
    
    setContacts(contactsCopy.sort((elem1, elem2) => elem1.name > elem2.name ? 1 : -1))
  }
  const handleDelete = (positionContacts) => {
    const contactsCopy = [...contacts]
    contactsCopy.splice(positionContacts, 1)
    setContacts(contactsCopy)

  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleAddContact}> Add Random Contact</button>

      <button onClick={handleSortPopularity}> Sort by popularity</button>

      <button onClick={handleSortContacts}> Sort by name</button>

      <table>
        <tbody>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        {contacts.map((eachContact,index) => {
          return (
            <tr key={eachContact.id}>
              <td>
                <img src={eachContact.pictureUrl} alt="img" width="80px"/>
              </td>
              <td>{eachContact.name}</td>
              <td>{eachContact.popularity.toFixed(2)}</td>
              <td>{eachContact.wonOscar === true ? "🏆" : " "}</td>
              <td>{eachContact.wonEmmy === true ? "🏆" : " "}</td>
              <td><button onClick={ () => handleDelete(index) }>Delete</button>
               </td>
              
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
