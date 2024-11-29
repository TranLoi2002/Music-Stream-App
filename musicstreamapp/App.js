import React, { useState , useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {StyleSheet,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import Home from './Menu/Home';
import Search from './Menu/Search';
import Feed from './Menu/Feed';
import Library from './Menu/Library';
import ChartsCanada from './Menu/Homes/ChartsCanada'; 
import Play from './Menu/Homes/PlayMusic/Play';
import FirstPage from './DangNhap/FirstPage';
import Login from './DangNhap/Login';
import Register from './DangNhap/Register';
import TrackInAlbum from './AudioPlayer/TrackInAlbum';
import LoveTracks from './AudioPlayer/LoveTracks';
import TrackPlayer from './AudioPlayer/TrackPlayer';


import {
  getTracks,
  getAlbums,
} from './configApi/getAPI';
const Stack = createStackNavigator();
const Stack1 = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({ navigation ,loveTracks, playlists }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="search" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="feed" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={(props) => (
          <Library {...props} loveTracks={loveTracks} playlists={playlists} />
        )}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="list" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function HomeStack({navigation}) {
  return (
      <Stack1.Navigator>
      
        <Stack1.Screen
          name="Home"
          component={Home}
          options={{ headerMode: 'none' }}
        />
        <Stack1.Screen
          name="ChartsCanada"
          component={ChartsCanada}
          options={{ headerMode: 'none' }}
        />
        <Stack.Screen
        name="LoveTracks"
        component={LoveTracks}
        options={{ headerMode: 'none' }}
      />
      <Stack.Screen
        name="TrackInAlbum"
        component={TrackInAlbum}
        options={{ headerMode: 'none' }}
      />
        
      </Stack1.Navigator>
  );
}
function App() {
  const [loveTracks, setLoveTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchLoveTrack = await getTracks();
        const fetchPlaylists = await getAlbums();
        setPlaylists(fetchPlaylists);
        setLoveTracks(fetchLoveTrack.filter((track) => track.audio !== null));
      } catch (error) {
        console.error('Error during fetch data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{ headerMode: 'none' }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerMode: 'none' }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerMode: 'none' }}
        />
        <Stack.Screen name="Tabs" options={{ headerMode: 'none' }}>
          {(props) => (
            <Tabs {...props} loveTracks={loveTracks} playlists={playlists} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Play"
          component={Play}
          options={{ headerMode: 'none' }}
        />
        <Stack.Screen
          name="TrackPlayer"
          component={TrackPlayer}
          options={{ headerMode: 'none' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
