import ContactsList from "./screens/ContactsList";
import Conversation from "./screens/Conversation";

function App() {
  return (
    <div className="flex">
      <ContactsList />
      <Conversation />
    </div>
  );
}

export default App;
