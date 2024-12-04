import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { getFeeds } from '../configApi/getAPI'; 
import MusicPostItem from '../Components/MusicPostItem'; 

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
  const [musicPosts, setMusicPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const fetchMusicPosts = async () => {
      try {
        const feed = await getFeeds();
        const formattedData = feed.map((item, index) => ({
          id: item.id,
          user_name: 'Jamendo User',
          user_image_url: `https://picsum.photos/200/200?random=${index}`, 
          song_name: item.title.en,
          artist_name: item.text.en.substring(0, 30), 
          album_image_url: `https://picsum.photos/500/500?random=${index + 100}`, 
          content: item.text.en,
          likes: Math.floor(Math.random() * 100), 
          comments: [
            { id: '1', user_name: 'Music Fan', text: 'Great post!' },
            { id: '2', user_name: 'Listener', text: 'Awesome!' }
          ]
        }));
        setMusicPosts(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching music posts:', error);
        setLoading(false);
      }
    };

    const getCurrentUser = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setCurrentUser(JSON.parse(user).name);
      }
    };

    fetchMusicPosts();
    getCurrentUser();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={musicPosts}
          renderItem={({ item }) => <MusicPostItem item={item} currentUser={currentUser} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Feed;

