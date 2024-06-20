import React from "react";
import { ChatEntry, Contact } from "../types";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { Dropdown, MenuProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { passUserIdToStore } from "../store/slices/chatData";

interface ContactCardProps {
  contact: Contact;
  menuItems: MenuProps["items"];
}

const ContactCard = ({ contact, menuItems }: ContactCardProps) => {
  const dispatch = useDispatch();
  const userId: string = useSelector((state: any) => state.chat.userId)

  let date = new Date();
  let month: string = date.getMonth().toString();
  month = +month < 10 ? "0" + month : month;
  let day: string = date.getDate().toString();
  day = +day < 10 ? "0" + day : day;
  let year: string = date.getFullYear().toString().substring(2);

  const lastChatEntry: ChatEntry = contact.chat[contact.chat.length - 1];
  const lastMessageKey: string = Object.keys(lastChatEntry).pop()!;
  let lastMessage: string = lastChatEntry[lastMessageKey].message.slice(0, 15);
  lastMessage = lastMessage + " ...";

  return (
    <div
      className={`flex w-full justify-between cursor-pointer p-2 ${userId === contact.userId ? 'bg-[#F5F7FB] rounded' : ''}`}
      onClick={() => dispatch(passUserIdToStore({ userId: contact.userId }))}
    >
      <div className="flex items-center gap-x-2">
        {/* for profile picture */}
        <div>
          <img
            src={contact.profilePictureURL}
            alt="profile"
            className="border border-white rounded-full w-12 h-12"
          />
        </div>

        {/* for name and last message */}
        <div className="flex flex-col">
          <h2 className="font-roboto font-semibold">{contact.name}</h2>
          <h2 className="text-[#8E8E93]">{lastMessage}</h2>
        </div>
      </div>

      <div className="flex gap-x-3">
        {/* for date and unread messages */}
        <div>
          <p className="text-[#8E8E93] font-roboto font-normal text-sm">{`${day}/${month}/${year}`}</p>
          {contact.unreadCount !== 0 && (
            <p className="flex justify-center items-center text-white text-xs font-roboto font-normal border border-[#3BA55D] bg-[#3BA55D] rounded-full h-5 w-5">
              {contact.unreadCount}
            </p>
          )}
        </div>

        <div onClick={(e: any) => e.stopPropagation()}>
          <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
            <HiOutlineEllipsisVertical
              size={20}
              color="#007AFF"
              className="cursor-pointer"
            />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
