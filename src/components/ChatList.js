/* eslint no-underscore-dangle: 0 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography/Typography';
import ChatListItem from './ChatListItem';

const styles = theme => ({
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
    value: 'dark',
    noChats: {
      textAlign: 'center',
    },

  },
});

const ChatList = ({
  classes, chats, activeChat, disabled,
}) => (
  <List className={classes.chatsList}>
    {chats && chats.length ? (
      chats.map(chat => (
        <ChatListItem
          disabled={disabled}
          key={chat._id}
          active={activeChat && activeChat._id === chat._id}
          chatId={chat._id}
          {...chat}
        />
      ))
    ) : (
      <Typography variant="subtitle1" className={classes.noChats}>
        There is no chats yet
      </Typography>
    )}
  </List>
);

export default withStyles(styles)(ChatList);
