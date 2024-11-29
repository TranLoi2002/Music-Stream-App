import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { Alert } from 'react-native';

const useAudioPlayer = (tracks) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatDuration = (durationMs) => {
    const totalSeconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const playPreview = async (index) => {
    const track = tracks[index];
    const previewUrl = track.audio;

    if (!track || !previewUrl) {
      console.log('Skipping track due to unavailable preview URL');
      return false;
    }

    const name = track.name;
    const albumImage = track.album_image || track.image;
    const artist = track.artist_name;

    setCurrentTrack({
      name,
      image: albumImage,
      artist: artist,
    });
    setCurrentTrackIndex(index);
    setPosition(0);
    setDuration(0);

    try {
      if (sound) {
        await sound.unloadAsync();
        setSound(null);
      }
      const { sound: newSound, status } = await Audio.Sound.createAsync(
        { uri: previewUrl },
        { shouldPlay: true }
      );
      setSound(newSound);
      setIsPlaying(true);
      setDuration(status.durationMillis || 0);
      newSound.setOnPlaybackStatusUpdate((status) => {
        setPosition(status.positionMillis);
        if (status.didJustFinish) {
          handleNextPrev(1);
        }
      });
      return true;
    } catch (error) {
      Alert.alert('Error', 'Failed to play preview');
      return false;
    }
  };

  const handleNextPrev = async (step) => {
    let newIndex = currentTrackIndex + step;
    if (newIndex >= tracks.length) {
      newIndex = 0; // Loop back to the first track if at the end
    } else if (newIndex < 0) {
      newIndex = tracks.length - 1; // Loop to the last track if at the beginning
    }
    await playPreview(newIndex);
  };

  const togglePlayback = async () => {
    if (sound) {
      isPlaying ? await sound.pauseAsync() : await sound.playAsync();
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'Permission to access audio is required to play previews.');
      }
    };

    requestPermissions();
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  return {
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
  };
};

export default useAudioPlayer;
