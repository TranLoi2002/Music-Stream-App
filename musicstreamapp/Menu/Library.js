import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Library = ({ navigation, loveTracks, playlists }) => {
  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Library</Text>
        <TouchableOpacity>
          <Ionicons name="musical-notes-outline" size={24} color="grey" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Header />
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.playlistContainer}
          onPress={() =>
            navigation.navigate('LoveTracks', { tracks: loveTracks })
          }>
          <View style={styles.iconContainer}>
            <Icon name="heart" size={30} color="#1a2044" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Bài hát yêu thích</Text>
            <Text style={styles.subtitle}>
              Danh sách phát • {loveTracks.length} bài hát
            </Text>
          </View>
        </TouchableOpacity>

        <FlatList
          data={playlists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.albumContainer}
              onPress={() => navigation.navigate('TrackInAlbum', { albumId: item.id, albumName: item.name })}
            >
              <LinearGradient
                colors={['#3147be', '#1a2044']}
                style={styles.albumImageContainer}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.albumImage}
                />
              </LinearGradient>
              <View style={styles.albumTextContainer}>
                <Text style={styles.albumName}>{item.name}</Text>
                <Text style={{ fontSize: 12, color: 'white' }}>{item.artist_name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  playlistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3147be',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: '#3147be',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
  },
  albumContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a2044',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  albumImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 10,
  },
  albumImage: {
    height: 50,
    width: 50,
  },
  albumTextContainer: {
    flex: 1,
  },
  albumName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  albumSubtitle: {
    color: 'grey',
    fontSize: 14,
  },
});

export default Library;
