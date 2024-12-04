import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CommentItem from './CommentItem';

const MusicPostItem = ({ item, currentUser }) => {
  const [likes, setLikes] = useState(item.likes);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(item.comments || []);
  const [newComment, setNewComment] = useState('');
  const [userImageLoading, setUserImageLoading] = useState(true);
  const [postImageLoading, setPostImageLoading] = useState(true);

  const addComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: (comments.length + 1).toString(),
        user_name: currentUser,
        text: newComment
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <View style={styles.postItem}>
      {/* User Info */}
      <View style={styles.userInfo}>
        {userImageLoading && (
          <ActivityIndicator size="small" color="#0000ff" />
        )}
        <Image 
          source={{ uri: item.user_image_url }} 
          style={styles.avatar} 
          onLoad={() => setUserImageLoading(false)}
        />
        <View>
          <Text style={styles.userName}>{item.user_name}</Text>
          <Text style={styles.songInfo}>
            {item.song_name} - {item.artist_name}
          </Text>
        </View>
      </View>

      {/* Post Image */}
      {postImageLoading && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
      <Image 
        source={{ uri: item.album_image_url }} 
        style={styles.postImage} 
        onLoad={() => setPostImageLoading(false)}
      />

      {/* Post Content */}
      <Text style={styles.content}>{item.content}</Text>

      {/* Interaction Section */}
      <View style={styles.interactionContainer}>
        <TouchableOpacity 
          style={styles.interactionButton}
          onPress={toggleLike}
        >
          <Ionicons name={liked ? "heart" : "heart-outline"} size={24} color="red" />
          <Text style={styles.interactionText}>{likes} Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionButton}>
          <Ionicons name="chatbubble" size={24} color="blue" />
          <Text style={styles.interactionText}>{comments.length} Comments</Text>
        </TouchableOpacity>
      </View>

      {/* Comments Section */}
      <View style={styles.commentsSection}>
        {comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </View>

      {/* Add Comment Input */}
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Write a comment..."
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity onPress={addComment}>
          <Ionicons name="send" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  postItem: {
    backgroundColor: 'white',
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  songInfo: {
    color: 'gray',
    fontSize: 14,
  },
  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  content: {
    marginVertical: 10,
    fontSize: 16,
  },
  interactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactionText: {
    marginLeft: 5,
  },
  commentsSection: {
    marginTop: 10,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
};

export default MusicPostItem;
