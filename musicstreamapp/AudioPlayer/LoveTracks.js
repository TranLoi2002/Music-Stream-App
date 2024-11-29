
import React from 'react';
import { getTracks } from '../configApi/getAPI';
import TrackPlayer from './TrackPlayer';

const LoveTracks = (props) => {
  const fetchTracks = async () => {
    const tracks = await getTracks();
    return tracks;
  };

  return (
    <TrackPlayer 
      {...props} 
      getTracks={fetchTracks}
      headerTitle="Love Songs"
    />
  );
};

export default LoveTracks;
