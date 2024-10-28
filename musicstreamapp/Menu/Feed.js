
import {
  Text
} from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';


function Feed({ navigation }) {
  return (
    <EvilIcons
          name="bell"
          size={30}
          color="#C4C4C4"
          style={{ paddingTop: 100 }}
        />
  );
}
export default Feed;
