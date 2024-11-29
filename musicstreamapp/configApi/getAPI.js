


import axios from 'axios';

const apiKey = 'b95828f2'; 

// Hàm tìm kiếm bài hát theo từ khóa
export const searchTracks = async (query) => {
  try {
    const response = await axios.get('https://api.jamendo.com/v3.0/tracks', {
      params: {
        client_id: apiKey,
        format: 'json',
        search: query, // Từ khóa tìm kiếm
        limit: 30 // Số lượng bài hát tối đa trả về
      }
    });
    
    if (response.data.results.length === 0) {
      console.log('Không tìm thấy bài hát nào.');
    } else {
      console.log('Kết quả tìm kiếm:', response.data.results);
    }
    
    return response.data.results;
  } catch (error) {
    console.error('Error searching tracks:', error);
  }
};

// Hàm lấy danh sách các bài hát từ Jamendo
export const getTracks = async () => {
  try {
    const response = await axios.get('https://api.jamendo.com/v3.0/tracks', {
      params: {
        client_id: apiKey,
        format: 'json',
        limit: 30
      }
    });
    
    console.log(response.data.results.slice(0,1));
    return response.data.results;
  } catch (error) {
    console.error('Error getting tracks:', error);
  }
};

// Hàm lấy danh sách các album từ Jamendo
export const getAlbums = async () => {
  try {
    const response = await axios.get('https://api.jamendo.com/v3.0/albums', {
      params: {
        client_id: apiKey,
        format: 'json',
        limit: 10
      }
    });
    console.log(response.data.results.slice(0,1));
    return response.data.results;
  } catch (error) {
    console.error('Error getting albums:', error);
  }
};

// Hàm lấy các bài hát trong album từ Jamendo
export const getTracksInAlbum = async (albumId) => {
  try {
    const response = await axios.get(`https://api.jamendo.com/v3.0/albums/tracks`, {
      params: {
        client_id: apiKey,
        album_id: albumId,
        format: 'json'
      }
    });
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error getting tracks in album:', error);
  }
};

