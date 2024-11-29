
import { Buffer } from 'buffer';
import axios from 'axios';
import { clientId, clientSecret } from '../api'; // Đảm bảo bạn có clientId và clientSecret
export const getAccessToken = async () => {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(clientId + ':' + clientSecret).toString('base64'),
      },
      data: 'grant_type=client_credentials',
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
  }
};

export const getTopPlaylists = async (token) => {
  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/browse/featured-playlists',
      {
        headers: { Authorization: 'Bearer ' + token },
      }
    );
    //  console.log(response.data.playlists.items);
    return response.data.playlists.items.slice(2, 10);
  } catch (error) {
    console.error('Error getting top playlists:', error);
  }
};
export const getTrackInPlaylist = async (albumId, token) => {
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${albumId}/tracks`,
      { headers: { Authorization: `Bearer ${token}` } }
    ); 
    console.log(response.data.items.map(item => item.track).slice(0, 1));
    return response.data.items.map(item => item.track);
  } catch (error) {
    console.error('Error fetching tracks:', error);
  }
};


export const getLoveTracks = async (token) => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/playlists/37i9dQZF1DWVOaOWiVD1Lf/tracks`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        console.log(response.data.items.slice(0, 1));

        return response.data.items.slice(0,30);
    } catch (error) {
        console.error('Error getting tracks:', error);
    }
};

// export const getArtist = async (token, artistId) => {
//   try {
//     const response = await axios.get(
//       `https://api.spotify.com/v1/artists/${artistId}`,
//       {
//         headers: {
//           Authorization: 'Bearer ' + token,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error getting artist:', error);
//   }
// };
// import axios from 'axios';

// const clientId = 'b95828f2';

// export const getTopPlaylists = async () => {
//   try {
//     const response = await axios.get(
//       `https://api.jamendo.com/v3.0/playlists?client_id=${clientId}&limit=10`
//     );
//     const playlists = response.data.results.slice(2, 10);

//     // Sử dụng Promise.all để thực hiện các yêu cầu API đồng thời
//     const playlistPromises = playlists.map(async (playlist) => {
//       const trackResponse = await axios.get(
//         `https://api.jamendo.com/v3.0/playlists/tracks?client_id=${clientId}&id=${playlist.id}`
//       );
//       const results = trackResponse.data.results;
//       const tracks = results && results[0] && results[0].tracks;
//       return { ...playlist, trackCount: tracks ? tracks.length : 0 };
//     });

//     const results = await Promise.all(playlistPromises);
    
//     console.log("Playlists with track counts", results); // Kiểm tra danh sách đã cập nhật
//     return results;
//   } catch (error) {
//     console.error('Error getting top playlists:', error);
//   }
// };



// // Lấy danh sách bài hát trong một playlist từ Jamendo
// export const getTrackInPlaylist = async (playlistId) => {
//   try {
//     const response = await axios.get(
//       `https://api.jamendo.com/v3.0/playlists/tracks?client_id=${clientId}&id=${playlistId}`
//     );
//     // console.log(response.data.results); // Sửa lỗi console.log
//     return response.data.results;
//   } catch (error) {
//     console.error('Error fetching tracks:', error);
//   }
// };

// // Lấy danh sách bài hát yêu thích
// export const getLoveTracks = async () => {
//   try {
//     const response = await axios.get(
//       `https://api.jamendo.com/v3.0/tracks?client_id=${clientId}&freetoplayonly=true&limit=30`
//     );
//     // console.log(response.data.results); // Sửa lỗi console.log
//     return response.data.results;
//   } catch (error) {
//     console.error('Error getting tracks:', error);
//   }
// };

