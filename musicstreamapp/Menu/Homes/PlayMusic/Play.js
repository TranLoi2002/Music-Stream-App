import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

function Play({ navigation }) {
  return (
    <View>
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
            <AntDesign name="down" size={24} color="#FFFF" />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          width: 400,
          height: 300,
          marginTop: 500,
        }}>
        <View style={{paddingLeft:20,paddingTop:20}}>
          <Text style={{fontSize:20,fontWeight:700,color:"#FFFF"}}>
            FOLOWER
          </Text>
        </View>
        <View style={{paddingTop:5,paddingLeft:20}}>
          <Text style={{color:"#FFFF",fontWeight:700}}>
            Jessica Gonzalez
          </Text>
        </View>
      </View>
    </View>
  );
}
export default Play;
