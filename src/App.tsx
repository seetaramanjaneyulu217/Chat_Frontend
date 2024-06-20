import ContactsList from "./screens/ContactsList";
import Conversation from "./screens/Conversation";
import { useSelector } from "react-redux";
import { Contact } from "./types";
import contactsData from "./contactsData";

function App() {

  const userId: string = useSelector((state: any) => state.chat.userId)
  const contacts: Contact[] = contactsData.filter((contact: Contact) => contact.userId === userId)

  return (
    <div className="flex">
      <ContactsList />
      <Conversation contact={contacts[0]} />
    </div>
  );
}

export default App;
