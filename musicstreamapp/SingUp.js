
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

function SingUp({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('/assets/LanchScreen/Image30.png')}
        style={{ width: 400, height: 900 }}
      />
      <Image
        source={require('/assets/LanchScreen/Image33.png')}
        style={{
          width: 100,
          height: 90,
          position: 'absolute',
          marginTop: 100,
          marginLeft: 140,
        }}
      />
      <Image
        source={require('/assets/LanchScreen/YourmusicYourartists.png')}
        style={{
          width: 200,
          height: 150,
          position: 'absolute',
          marginTop: 400,
          marginLeft: 100,
        }}
      />
      <TouchableOpacity
        style={{ position: 'absolute' }}
        onPress={() => navigation.navigate('Tabs')}>
        <Image
          source={require('/assets/LanchScreen/Group3.png')}
          style={{ width: 350, height: 124, marginTop: 630, marginLeft: 12 }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default SingUp;