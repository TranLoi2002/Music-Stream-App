
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalPopUp from '../Components/ModalPopUp';
import { LinearGradient } from 'expo-linear-gradient';
import useAudioPlayer from '../Hooks/UseAudioPlayer';
import MiniPlayer from '../Components/MiniPlayer';

const TrackPlayer = ({ route, getTracks, headerTitle }) => {
  const { albumId } = route.params || {};
  const [tracks, setTracks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [miniPlayerVisible, setMiniPlayerVisible] = useState(false);

  const {
    sound,
    isPlaying,
    currentTrack,
    currentTrackIndex,
    position,
    duration,
    formatDuration,
    playPreview,
    handleNextPrev,
    togglePlayback,
  } = useAudioPlayer(tracks);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getTracks(albumId);
      setTracks(
        fetchedData.filter(
          (track) => track.audio || track.track?.audio
        )
      );
    };
    fetchData();
  }, [albumId]);

  const renderItem = ({ item, index }) => {
    const track = item.track || item;
    const imageUrl =
      track.album_image || item.album_image || 'default_track_image_url';
    const artists = track.artist_name || item.artist_name || 'Unknown Artist';
const duration = track.duration ? formatDuration(track.duration * 1000) : formatDuration(item.duration * 1000);
    return (
      <TouchableOpacity
        onPress={() => {
          playPreview(index);
          setModalVisible(true);
        }}>
        <View style={styles.trackContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.trackName} numberOfLines={1}>
              {track.name || item.name}
            </Text>
            <Text style={styles.artistName} numberOfLines={1}>
              {artists}
            </Text>
            <Text style={styles.trackInfo}>{duration}</Text>
          </View>
          <TouchableOpacity>
            <Ionicons
              name={'ellipsis-horizontal-outline'}
              size={30}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#556ada', 'black']}
        style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
        <TouchableOpacity
          onPress={() =>
            playPreview(Math.floor(Math.random() * tracks.length))
          }>
          <Ionicons name="shuffle" size={24} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>
      <FlatList
        data={tracks}
        keyExtractor={(item) => (item.track ? item.track.id : item.id)}
        renderItem={renderItem}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setMiniPlayerVisible(true);
        }}>
        <ModalPopUp
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          position={position}
          duration={duration}
          togglePlayback={togglePlayback}
          handleNext={() => handleNextPrev(1)}
          handlePrevious={() => handleNextPrev(-1)}
          setModalVisible={setModalVisible}
          setMiniPlayerVisible={setMiniPlayerVisible}
          sound={sound}
        />
      </Modal>
      {miniPlayerVisible && (
        <MiniPlayer
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          togglePlayback={togglePlayback}
          onOpenModal={() => setModalVisible(true)}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 80,
    overflow: 'hidden',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  trackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#000',
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  trackName: {
    fontSize: 18,
    color: '#fff',
    width: 180,
  },
  artistName: {
    fontSize: 14,
    color: '#fff',
    width: 180,
  },
  trackInfo: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 4,
  },
});

export default TrackPlayer;
