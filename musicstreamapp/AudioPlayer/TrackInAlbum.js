
import React from 'react';
import { getTracksInAlbum } from '../configApi/getAPI';
import TrackPlayer from './TrackPlayer';

const TrackInAlbum = (props) => {
  const fetchTracks = async (albumId) => {
    const tracks = await getTracksInAlbum(albumId);
    return tracks;
  };

  return (
    <TrackPlayer 
      {...props}
      getTracks={fetchTracks}
      headerTitle={props.route.params.albumName}
    />
  );
};


export default TrackInAlbum;
