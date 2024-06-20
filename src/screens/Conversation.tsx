import React from "react";
import "./Conversation.css";
import { ChatEntry, Contact } from "../types";
import { IoVideocamOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import MessageCard from "../components/MessageCard";

interface ConversationProps {
  contact: Contact;
}

type AllMessages = {
  id: number;
  user: string;
  message: string;
  timeStamp: string;
}[];

const Conversation = ({ contact }: ConversationProps) => {
  let allMessages: AllMessages = [];

  if (contact) {
    contact.chat.forEach((chatEntry: ChatEntry) => {
      for (const user in chatEntry) {
        if (chatEntry.hasOwnProperty(user)) {
          allMessages.push({
            id: allMessages.length + 1,
            user: user,
            message: chatEntry[user].message,
            timeStamp: chatEntry[user].timeStamp,
          });
        }
      }
    });
  }

  return (
    <>
      {!contact ? (
        <div className="flex justify-center items-center text-3xl font-roboto font-semibold w-full md:w-3/4 h-screen">
          Select any chat to see the messages.
        </div>
      ) : (
        <div className="w-full hidden lg:block md:w-3/4 py-7 px-8">
          {/* for the top most part */}
          <div className="flex items-center justify-between bg-[#F6F6F6] px-6 py-3 rounded-lg">
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
                <p className="text-[#222222] text-sm">
                  Click here for contact info
                </p>
              </div>
            </div>

            {/* for audio, video icons */}
            <div className="flex items-center gap-x-5">
              <IoVideocamOutline size={25} color="#007AFF" />
              <FiPhone size={20} color="#007AFF" />
              <HiOutlineEllipsisVertical size={25} color="#007AFF" />
            </div>
          </div>

          {/* for chat display */}
          <div className="mt-5 h-[70vh] overflow-y-auto scrollbar">
            {allMessages.map(
              (message: {
                id: number;
                user: string;
                message: string;
                timeStamp: string;
              }) => (
                <MessageCard key={message.id} message={message} />
              )
            )}
          </div>

          {/* for message box */}
          <div className="flex items-center gap-x-4 mt-5">
            <div className="flex items-center gap-x-2">
              <div className="flex justify-center items-center border border-[#888888] rounded-full h-8 w-8">
                <AiOutlinePlus size={20} color="#888888" />
              </div>
              <div className="flex justify-center items-center border border-[#888888] rounded-full h-8 w-8 text-sm">
                <MdOutlineKeyboardVoice size={20} color="#888888" />
              </div>
            </div>

            <div className="flex justify-between items-center px-5 py-2 w-full relative border border-[#888888] rounded-full placeholder-[#888888]">
              <input
                type="text"
                className="w-full outline-none"
                placeholder={`Message ${contact.name}`}
              />
              <div className="absolute right-2">
                <IoSend color="#D8D8D8" />
              </div>
            </div>

            {/* <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 shadow-sm">
              <input
                type="text"
                placeholder="Message Josh California"
                // className="flex-grow outline-none"
              />
              <div>
                <IoSend color="#D8D8D8" />
              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Conversation;
