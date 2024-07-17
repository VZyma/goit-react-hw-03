import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
export default function Contact({ id, name, number, deleteId }) {
  return (
    <div className={css.box}>
      <div>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <div>
        <button className={css.btn} onClick={() => deleteId(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}