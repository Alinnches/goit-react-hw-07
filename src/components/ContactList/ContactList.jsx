import React from "react";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
