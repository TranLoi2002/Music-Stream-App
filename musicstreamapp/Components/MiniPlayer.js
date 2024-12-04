import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground,StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const MiniPlayer = ({ currentTrack, isPlaying, togglePlayback, onOpenModal }) => {
  const miniPlayerImage = currentTrack?.image 
  ||'https://azdigi.com/blog/wp-content/uploads/2022/12/404-error.png';
  return (
    <TouchableOpacity onPress={onOpenModal}>
      <ImageBackground source={{ uri: miniPlayerImage  }} style={styles.miniPlayer}>
        <View style={styles.miniPlayerDetails}>
          <Image source={{ uri: miniPlayerImage }} style={styles.miniPlayerImage} />
          <Text style={styles.miniPlayerText} numberOfLines={1} ellipsizeMode="tail">
            {currentTrack?.name}
          </Text>
          <TouchableOpacity onPress={togglePlayback}>
            <Ionicons name={isPlaying ? 'pause' : 'play'} size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  miniPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    paddingVertical: 3,
    justifyContent: 'space-between',
    left: 0,
  },
  miniPlayerImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  miniPlayerDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  miniPlayerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    flexShrink: 1,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: 230,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default MiniPlayer;
