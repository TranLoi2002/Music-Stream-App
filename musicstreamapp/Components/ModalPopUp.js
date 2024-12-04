import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RotatingDisc from './RotatingDisc';

const formatTime = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const ModalPopUp = ({
  currentTrack,
  isPlaying,
  position,
  duration,
  togglePlayback,
  handleNext,
  handlePrevious,
  setModalVisible,
  setMiniPlayerVisible,
  sound,
  isMinimized,
}) => {
  const { name, artist, image } = currentTrack || {};

  const handleMinimize = () => {
    setModalVisible(false);
    setMiniPlayerVisible(true);
  };

  const handleMaximize = () => {
    setModalVisible(true);
    setMiniPlayerVisible(false);
  };

  const handleSeek = async (seconds) => {
    if (sound) {
      const status = await sound.getStatusAsync();
      if (status.isLoaded) {
        let newPosition = status.positionMillis + seconds * 1000;
        if (newPosition < 0) newPosition = 0;
        if (newPosition > status.durationMillis) newPosition = status.durationMillis;
        await sound.setPositionAsync(newPosition);
      }
    }
  };
const defaultImage = 'https://azdigi.com/blog/wp-content/uploads/2022/12/404-error.png';
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        setModalVisible(false);
        setMiniPlayerVisible(true);
      }}
    >
      <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'column' }}>
        <ImageBackground source={{ uri: image || defaultImage }} style={styles.container} imageStyle={{ opacity: 0.8 }}>
          <View style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: 20 }}>
            <TouchableOpacity onPress={isMinimized ? handleMaximize : handleMinimize}>
              <Ionicons name={isMinimized ? 'ellipsis-horizontal' : 'chevron-down'} size={30} color="#fff" />
            </TouchableOpacity>
            <Ionicons name={'ellipsis-horizontal-outline'} size={30} color="#fff" />
          </View>
          <View style={styles.content}>
            <RotatingDisc uri={image} />
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.content}>
              <Text style={styles.trackName} numberOfLines={1} ellipsizeMode="tail">
                {name}
              </Text>
              <Text style={styles.artistName} numberOfLines={1} ellipsizeMode="tail">
                {artist}
              </Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={duration}
              value={position}
              minimumTrackTintColor="#1DB954"
              maximumTrackTintColor="#ccc"
              thumbTintColor="#fff"
              onSlidingComplete={async (value) => {
                if (sound) {
                  const status = await sound.getStatusAsync();
                  if (status.isLoaded) {
                    await sound.setPositionAsync(value);
                  } else {
                    console.error('Sound is not loaded properly');
                  }
                } else {
                  console.error('Sound object is not available');
                }
              }}
            />
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>
                {formatTime(position ? position : 0)}
              </Text>
              <Text style={styles.timeText}>
                {formatTime(duration ? duration : 0)}
              </Text>
            </View>
            <View style={styles.controls}>
              <TouchableOpacity onPress={() => handleSeek(-10)} style={styles.controlButton}>
                <Ionicons name="play-back" size={30} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePrevious} style={styles.controlButton}>
                <Ionicons name="play-skip-back" size={30} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={togglePlayback} style={[styles.playPauseButton, styles.controlButton]}>
                <Ionicons name={isPlaying ? 'pause' : 'play'} size={40} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext} style={styles.controlButton}>
                <Ionicons name="play-skip-forward" size={30} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSeek(10)} style={styles.controlButton}>
                <Ionicons name="play-forward" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    paddingVertical: 40,
  },
  disc: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  minimizeButton: {},
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  trackName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  artistName: {
    fontSize: 18,
    color: '#ccc',
    textAlign: 'center',
    paddingBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 1.2)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  bottomSection: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  slider: {
    width: '100%',
    marginBottom: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  timeText: {
    color: '#fff',
    fontSize: 14,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  controlButton: {
    alignItems: 'center',
  },
  playPauseButton: {
    borderRadius: 30,
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default ModalPopUp;