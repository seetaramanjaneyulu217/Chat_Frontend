import React from "react";

interface MessageCardProps {
  message: {
    id: number;
    user: string;
    message: string;
    timeStamp: string;
  };
}

const MessageCard = ({ message }: MessageCardProps) => {
  return (
    <div className={`flex ${message.user === 'you' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`flex flex-col rounded-full px-7 py-2 w-fit ${
          message.user === "you"
            ? "bg-[#DCF7C5] items-end"
            : "bg-[#FAFAFA] items-start"
        }`}
      >
        <p>{message.message}</p>
        <p className="text-[#00000075]">{message.timeStamp}</p>
      </div>
    </div>
  );
};

export default MessageCard;
