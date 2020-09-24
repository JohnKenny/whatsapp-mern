import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  // state
  const [messages, setMessages] = useState([]);

  // fetches the initial information using axios
  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data);
      });
  }, []);

  useEffect(() => {
    var pusher = new Pusher('a7906ac28ac6c9a777f7', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      // ... spread operator (array) of current messages and include the new message
      setMessages([...messages, newMessage])
    });

    // cleanup function
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages]) // [] means fire once on app-load, [messages] = a dependency

  console.log(messages);


  return (
    <div className="app">
      <div className="app__body">
      <Sidebar />
      <Chat messages={messages}/>
      </div>
      
    </div>
  );
}

export default App;
