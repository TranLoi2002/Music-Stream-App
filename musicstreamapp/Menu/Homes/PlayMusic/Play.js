import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Audio } from 'expo-av';
import React, { useState, useEffect } from 'react';
import Slider from '@react-native-community/slider';
import { StatusBar } from 'react-native';

function Play({ navigation }) {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const songs = [
    { title: 'Still With You', uri: require('../../../assets/ListMusic/StillWithYou.mp3') },
    { title: 'Bài hát 2', uri: require('../../../assets/ListMusic/NhungKeMongMo.mp3') },
    
    { title: 'Bài hát 3', uri: require('../../../assets/ListMusic/StillWithYou.mp3') },
    { title: 'Bài hát 2', uri: require('../../../assets/ListMusic/NhungKeMongMo.mp3') },
    { title: 'Bài hát 3', uri: require('../../../assets/ListMusic/StillWithYou.mp3') },
    { title: 'Bài hát 2', uri: require('../../../assets/ListMusic/NhungKeMongMo.mp3') },
    { title: 'Bài hát 3', uri: require('../../../assets/ListMusic/StillWithYou.mp3') },
    // Thêm nhiều bài hát nếu cần
  ];

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(songs[currentSongIndex].uri);
    setSound(sound);
    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    
    // Lấy duration ngay khi âm thanh được tải
    const status = await sound.getStatusAsync();
    if (status.isLoaded) {
        setDuration(status.durationMillis);
    }
};

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
    }
  };

  const togglePlayback = async () => {
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = async () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    if (sound) {
        await sound.stopAsync();
        setIsPlaying(false);
        await sound.unloadAsync();
    }
    await loadSound();  
};

  const playPrevious = async () => {
    const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(previousIndex);
    if (sound) {
        await sound.stopAsync();
        setIsPlaying(false);
        await sound.unloadAsync(); 
    }
    await loadSound(); // Chờ cho âm thanh được tải
    
};

  // Hàm để điều chỉnh vị trí phát nhạc
  const seekToPosition = async (value) => {
    await sound.setPositionAsync(value);
  };

  useEffect(() => {
    loadSound();
    return () => {
      if (sound) {
        sound.stopAsync();
        sound.unloadAsync();
      }
    };
  }, []);


  const formatTime = (milliseconds) => {
    if (isNaN(milliseconds)) {
      return '00:00';
    }
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const formattedSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${formattedSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <View>
        <Image
          source={require('../../../assets/PlayMusics/Image58.png')}
          style={{ width: 400, height: 900 }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          width: 400,
          height: 100,
        }}>
        <View
          style={{
            paddingTop: 60,
            paddingLeft: 20,
            flexDirection: 'row',
          }}>
          <Text style={{ fontSize: 20, color: '#FFFF' }}>Play</Text>
          <View style={{ marginLeft: 280 }}>
            <TouchableOpacity onPress={() => { sound.stopAsync(); navigation.goBack() }}>
              <AntDesign name="down" size={24} color="#FFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          width: 400,
          height: 400,
          marginTop: 500,
        }}>
        <View style={{ paddingLeft: 20, paddingTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 700, color: "#FFFF" }}>
            FOLOWER
          </Text>
        </View>
        <View style={{ paddingTop: 5, paddingLeft: 20 }}>
          <Text style={{ color: "#FFFF", fontWeight: 700 }}>
            Jessica Gonzalez
          </Text>
        </View>
        <View style={{ height: 65 }}>
          <View style={{ marginTop: 10 }}>
            <Slider
              minimumValue={0}
              maximumValue={duration}
              value={position}
              onValueChange={seekToPosition}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#CCCCCC"
              thumbTintColor="#FFFFFF"
              thumbStyle={{
                width: 10,
                height: 10,
                borderRadius: 10,
              }}
              style={{ paddingLeft: 20, width: 335 }}
            />
            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 50, justifyContent: 'space-between' }}>
              <Text style={{ color: '#FFFF' }}>  {formatTime(position)}</Text>
              <Text style={{ color: '#FFFF' }}>   {formatTime(duration)}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <View style={{ paddingTop: 10, paddingRight: 40, paddingLeft: 20 }}>
            <Entypo name="shuffle" size={24} color="#FFFF" />
          </View>
          <View style={{ paddingTop: 10, paddingRight: 40 }}>
            <TouchableOpacity onPress={playPrevious}>
              <AntDesign name="stepbackward" size={30} color="#FFFF" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={togglePlayback}>
            <View style={{ backgroundColor: '#FFFF', padding: 20, borderRadius: 50 }}>
              {isPlaying ? (
                <Ionicons name="pause-outline" size={24} color="black" />
              ) : (
                <Ionicons name="play-outline" size={24} color="black" />
              )}
            </View>
          </TouchableOpacity>
          <View style={{ paddingTop: 10, paddingRight: 40, paddingLeft: 40 }}>
            <TouchableOpacity onPress={playNext}>
              <AntDesign name="stepforward" size={30} color="#FFFF" />
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 10 }}>
            <Entypo name="dots-three-horizontal" size={30} color="#FFFF" />
          </View>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 40 }}>
          <View style={{ paddingLeft: 20 }}>
            <AntDesign name="hearto" size={27} color="#FFFF" />
          </View>
          <View style={{ paddingLeft: 5, paddingRight: 30 }}>
            <Text style={{ color: '#FFFF', fontWeight: 400, fontSize: 20 }}>
              16K
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons name="comment-text-outline" size={27} color="#FFFF" />
          </View>
          <View style={{ paddingLeft: 5, paddingRight: 150 }}>
            <Text style={{ color: '#FFFF', fontWeight: 400, fontSize: 20 }}>
              450
            </Text>
          </View>
          <View>
            <Feather name="share" size={27} color="#FFF" />
          </View>
        </View>
      </View>
    </View>
  );
}
export default Play;