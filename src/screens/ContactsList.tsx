import React from "react";
import { Contact } from "../types";
import ContactCard from "../components/ContactCard";
import { MdOutlineChevronLeft } from "react-icons/md";
import { useSelector } from "react-redux";

const ContactsList = () => {

  const contactsData = useSelector((state: any) => state.contacts.contactsData)

  return (
    <div className="w-full ml-8 py-7 md:w-1/4">
      <div className="flex items-center gap-x-5 mb-7">
        <MdOutlineChevronLeft size={25} />
        <p className="text-[#222222] text-2xl">Chats</p>
      </div>
      <div className="flex flex-col gap-y-7">
        {contactsData.map((contact: Contact) => (
          <ContactCard
            key={contact.userId}
            contact={contact}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsList;
