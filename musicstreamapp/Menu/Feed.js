
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity,
  TextInput 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const musicPosts = [
  {
    id: '1',
    user: {
      name: 'Anh Rồng',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    song: {
      title: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      album: 'Led Zeppelin IV',
    },
    img: 'https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg',
    content: 'This classic never gets old! 🎸',
    likes: 42,
    comments: [
      { id: '1', user: 'Music Fan', text: 'Absolute masterpiece!' },
      { id: '2', user: 'Guitar Hero', text: 'Jimmy Page is a legend' }
    ]
  },
  {
    id: '2',
    user: {
      name: 'Tuấn Cùi',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    song: {
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
    },
    img: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png',
    content: 'Can\'t stop listening to this track! 🎶',
    likes: 67,
    comments: [
      { id: '1', user: 'Dance Fan', text: 'Such a catchy song!' }
    ]
  }
];

const CommentItem = ({ comment }) => (
  <View style={styles.commentItem}>
    <Text style={styles.commentUser }>{comment.user}</Text>
    <Text style={styles.commentText}>{comment.text}</Text>
  </View>
);

const MusicPostItem = ({ item }) => {
  const [likes, setLikes] = useState(item.likes);
  const [comments, setComments] = useState(item.comments);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: (comments.length + 1).toString(),
        user: 'Current User',
        text: newComment
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <View style={styles.postItem}>
      {/* User Info */}
      <View style={styles.userInfo}>
        <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>{item.user.name}</Text>
          <Text style={styles.songInfo}>
            {item.song.title} - {item.song.artist}
          </Text>
        </View>
      </View>

      {/* Post Image */}
      <Image source={{ uri: item.img }} style={styles.postImage} />

      {/* Post Content */}
      <Text style={styles.content}>{item.content}</Text>

      {/* Interaction Section */}
      <View style={styles.interactionContainer}>
        <TouchableOpacity 
          style={styles.interactionButton}
          onPress={() => setLikes(likes + 1)}
        >
          <Ionicons name="heart" size={24} color="red" />
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
const Header = () => {
  return (
    <View style={styles.headerContainer}>
    
      <Text style={styles.title}>Feed</Text>
    <TouchableOpacity>
        <Ionicons name="musical-notes-outline" size={24} color="grey" />
      </TouchableOpacity>
    </View>
  );
};
const Feed = () => {
   return (
    <View style={styles.container}>
    <Header/>
      <FlatList
        data={musicPosts}
        renderItem={({ item }) => <MusicPostItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop:50,
    
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'white'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
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
  commentItem: {
    marginBottom: 5,
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 5,
  },
  commentUser:{
    fontWeight: 'bold',
    marginBottom: 3,
  },
  commentText: {
    color: '#333',
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
});

export default Feed;