/* eslint no-underscore-dangle: 0 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import ChatMessage from './ChatMessage';

const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  paper: {
    padding: theme.spacing.unit * 3,
  },
});

class ChatMessageList extends React.Component {
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper;
    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const {
      classes, messages, match, activeUser,
    } = this.props;

    if (!match.params.chatId) {
      return (
        <Paper className={classes.paper}>
          <Typography variant="h4" gutterBottom>
            No messages yet!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Explore chats.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Look for your old chats.
          </Typography>
        </Paper>
      );
    }

    return messages && messages.length ? (
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            activeUser={activeUser}
            {...message}
          />
        ))}
      </div>
    ) : (
      <Typography variant="h4">
        no one writes to the colonel...
      </Typography>
    );
  }
}

export default withRouter(withStyles(styles)(ChatMessageList));
