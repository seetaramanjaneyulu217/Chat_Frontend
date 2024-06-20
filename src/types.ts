export interface Message {
    message: string;
    timeStamp: string;
}


export interface ChatEntry {
    [user: string]: Message;
}


export interface Contact {
    userId: string;
    name: string;
    unreadCount: number;
    profilePictureURL: string;
    chat: ChatEntry[];
}


export type ContactsData = Contact[]