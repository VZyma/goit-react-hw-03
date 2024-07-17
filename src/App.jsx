import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
export default function App() {
  const loadFeedBack = () => {
    const savedForm = localStorage.getItem("form");
    return savedForm ? JSON.parse(savedForm) : arr;
  };
  const arr = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const [clients, setClients] = useState(loadFeedBack);
  useEffect(() => {
    window.localStorage.setItem("form", JSON.stringify(clients));
  }, [clients]);
  const [filter, setFilter] = useState("");
  const addClient = (newClient) => {
    setClients((prevClients) => {
      return [...prevClients, newClient];
    });
  };
  const deleteClient = (clientId) => {
    setClients((prevClients) => {
      return prevClients.filter((client) => client.id !== clientId);
    });
  };
  const filterTask = clients.filter((client) =>
    client.name.toLowerCase().includes(filter.toLowerCase())
  );
  useEffect;
  () => {};
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addClient} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList client={filterTask} deleteId={deleteClient} />
    </div>
  );
}