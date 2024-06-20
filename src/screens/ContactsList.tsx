import React from "react";
import contactsData from "../contactsData";
import { Contact } from "../types";
import ContactCard from "../components/ContactCard";
import { MenuProps } from "antd";
import { MdOutlineChevronLeft } from "react-icons/md";

const ContactsList = () => {
  const menuItems: MenuProps["items"] = [
    {
      label: <button>Mark as unread</button>,
      key: "0",
    },
    {
      label: <button>Delete</button>,
      key: "1",
    },
    {
      label: <button>Cancel</button>,
      key: "2",
    },
  ];

  return (
    <div className="w-full ml-8 py-10 md:w-1/4">
      <div className="flex items-center gap-x-5 mb-7">
        <MdOutlineChevronLeft size={25} />
        <p className="text-[#222222] text-2xl">Chats</p>
      </div>
      <div className="flex flex-col gap-y-7">
        {contactsData.map((contact: Contact) => (
          <ContactCard
            key={contact.userId}
            contact={contact}
            menuItems={menuItems}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsList;
