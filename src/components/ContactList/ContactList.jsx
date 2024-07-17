import Contact from "../Contact/Contact";

export default function ContactList({ client, deleteId }) {
  return client.map((cont) => {
    return (
      <Contact
        key={cont.id}
        id={cont.id}
        name={cont.name}
        number={cont.number}
        deleteId={deleteId}
      />
    );
  });
}