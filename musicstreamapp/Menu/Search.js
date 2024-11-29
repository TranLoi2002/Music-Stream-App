import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, Modal } from 'react-native';
import { searchTracks } from '../configApi/getAPI';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import ModalPopUp from '../Components/ModalPopUp';
import useAudioPlayer from '../Hooks/UseAudioPlayer';
import MiniPlayer from '../Components/MiniPlayer';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedTrack, setSelectedTrack] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [miniPlayerVisible, setMiniPlayerVisible] = useState(false);
    const navigation = useNavigation();

    const {
        sound,
        isPlaying,
        currentTrack,
        playPreview,
        togglePlayback,
        position,
        duration,
        handleNextPrev,
    } = useAudioPlayer(results);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (query) {
                handleSearch();
            } else {
                setResults([]);
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    const handleSearch = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await searchTracks(query);
            if (response && response.length > 0) {
                setResults(response);
            } else {
                setResults([]);
                setError('Không tìm thấy kết quả nào.');
            }
        } catch (err) {
            setError('Đã xảy ra lỗi khi tìm kiếm.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const formatDuration = (durationInSeconds) => {
        const minutes = Math.floor(durationInSeconds / 60);
        const seconds = durationInSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleTrackPress = async (track) => {
        setSelectedTrack(track);
        await playPreview(results.findIndex(t => t.id === track.id));
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 50,
                    borderWidth: 1,
                    borderColor: '#808080',
                    borderRadius: 50,
                    width: 340,
                    marginBottom: 30
                }}>
                <EvilIcons
                    name="search" size={30}
                    color="black"
                    style={{ paddingTop: 10, paddingLeft: 10 }}
                />
                 <TextInput
                    placeholder="Search for tracks"
                    value={query}
                    onChangeText={setQuery}
                    style={{
                        height: 45,
                        width: 300,
                    }}
                />
            </View>
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <FlatList
                data={results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleTrackPress(item)}>
                        <View style={styles.track}>
                            <Image source={{ uri: item.image }} style={styles.trackImage} />
                            <View style={styles.trackInfo}>
                                <Text style={styles.trackName}>{item.name}</Text>
                                <Text style={styles.artistName}>{item.artist_name}</Text>
                                <Text style={styles.duration}>{formatDuration(item.duration)}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                    setMiniPlayerVisible(true);
                }}
            >
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
                    onOpenModal={() => {
                        setMiniPlayerVisible(false);
                        setModalVisible(true);
                    }}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    track: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
    },
    trackImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 15,
    },
    trackInfo: {
        flex: 1,
    },
    trackName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    artistName: {
        fontSize: 14,
        color: '#666',
    },
    duration: {
        fontSize: 12,
        color: '#999',
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
});

export default Search;