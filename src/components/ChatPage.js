import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import ChatHeader from './ChatHeader';

class ChatPage extends React.Component {
  componentDidMount() {
    const { match, fetchAllChats, fetchMyChats, setActiveChat } = this.props;
    
    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ])
      .then(() => {
        if (match.params.chatId) {
          setActiveChat(match.params.chatId);
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params }, setActiveChat } = this.props;
    const { params: nextParams } = nextProps.match;

    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
    }
  }

  render() {
    const {
      logout, chats, activeUser,
      createChat, joinChat, leaveChat, deleteChat, sendMessage,
      messages, editUser
    } = this.props;

    return (
      <React.Fragment>
        <ChatHeader
          activeUser={activeUser}
          activeChat={chats.active}
          leaveChat={leaveChat}
          deleteChat={deleteChat}
          logout={logout}
          editUser={editUser}
        />
        <Sidebar
          chats={chats}
          createChat={createChat}
        />
        <Chat
          messages={messages}
          activeChat={chats.active}
          activeUser={activeUser}
          sendMessage={sendMessage}
          joinChat={joinChat}
        />
      </React.Fragment>
    );
  }
}

export default ChatPage;
