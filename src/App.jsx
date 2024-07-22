import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
  const arr = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
export default function App() {
  const loadContactsFromStorage = () => {
    const savedForm = localStorage.getItem("form");
    return savedForm ? JSON.parse(savedForm) : arr;
  };
  const [clients, setClients] = useState(loadContactsFromStorage);
  useEffect(() => {
    window.localStorage.setItem("form", JSON.stringify(clients));
  }, [clients]);
  const [filter, setFilter] = useState("");
  const addContact = (newClient) => {
    setClients((prevClients) => {
      return [...prevClients, newClient];
    });
  };
  const deleteContact = (clientId) => {
    setClients((prevClients) => {
      return prevClients.filter((client) => client.id !== clientId);
    });
  };
  const filterTask = clients.filter((client) =>
    client.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList client={filterTask} deleteId={deleteContact} />
    </div>
  );
}