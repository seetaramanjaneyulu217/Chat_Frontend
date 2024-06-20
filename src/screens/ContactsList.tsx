import React from "react";
import { Contact, ContactsData } from "../types";
import ContactCard from "../components/ContactCard";
import { MdOutlineChevronLeft } from "react-icons/md";
import { useSelector } from "react-redux";

type ContactsListProps = { userId: string };

const ContactsList = ({ userId }: ContactsListProps) => {
  const contactsData: ContactsData = useSelector(
    (state: any) => state.contacts.contactsData
  );

  return (
    <>
      {contactsData.length === 0 ? (
        <div className="flex justify-center items-center text-3xl font-roboto font-semibold">No Contacts Present</div>
      ) : (
        <div
          className={`w-full ml-8 py-7 lg:w-1/4 ${
            userId && "xs:hidden"
          } lg:block`}
        >
          <div className="flex items-center gap-x-5 mb-7">
            <MdOutlineChevronLeft size={25} />
            <p className="text-[#222222] text-2xl">Chats</p>
          </div>
          <div className="flex flex-col gap-y-7">
            {contactsData.map((contact: Contact) => (
              <ContactCard key={contact.userId} contact={contact} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ContactsList;
