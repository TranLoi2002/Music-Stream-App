import React from 'react';
import { View, Text } from 'react-native';

const CommentItem = ({ comment }) => (
  <View style={styles.commentItem}>
    <Text style={styles.commentUser}>{comment.user_name}</Text>
    <Text style={styles.commentText}>{comment.text}</Text>
  </View>
);

const styles = {
  commentItem: {
    marginBottom: 5,
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 5,
  },
  commentUser: {
    fontWeight: 'bold',
    marginBottom: 3,
  },
  commentText: {
    color: '#333',
  }
};

export default CommentItem;
