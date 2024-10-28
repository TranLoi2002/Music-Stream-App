
import {
  Text,View,TouchableOpacity,Image,ScrollView
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';


function ChartsCanada({ navigation }) {
  return (
    <View style ={{flex:1}}>
      <View style={{paddingTop:40,flexDirection:'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
          <View style ={{paddingLeft:20}}>
            <FontAwesome name="angle-left" size={40} color="#808080" />
          </View>
        </TouchableOpacity>
        <View style ={{paddingLeft:280,paddingTop:5}}>
            <FontAwesome5 name="chromecast" size={30} color="#808080"  />
          </View>
      </View>
      <View style ={{paddingTop:30,flexDirection:'row'}}>
        <View>
          <Image
                source={require('../../assets/HomeImage/Container31.png')}
                style={{
                  width: 150,
                  height: 150,
                  marginLeft: 20,
                  borderRadius: 5,
                }}
              />
        </View>
        <View style ={{paddingTop:30,paddingLeft:10}}>
          <View>
            <Text style={{fontSize:20,fontWeight:700}}>
              Top 50 - Canada
            </Text>
          </View>
          <View style={{flexDirection:'row',paddingTop:10}}>
            <View style={{paddingRight:10}}>
              <FontAwesome5 name="heart" size={24} color="#6EC2F7" />
            </View>
            <View style={{paddingTop:5,paddingRight:10}}>
              <Text style={{color:"#808080",fontWeight:700}}>
                1,234
              </Text>
            </View>
            <View style={{paddingRight:10}}>
              <Octicons name="dot-fill" size={24} color="#808080" />
            </View>
            <View style={{paddingTop:5}}>
              <Text style={{color:"#808080",fontWeight:700}}>
                05:10:18
              </Text>
            </View>
          </View>
          <View style ={{paddingTop:10}}>
            <Text style={{color:"#808080",fontWeight:700}}>
                Daily chart-topper update
              </Text>
          </View>
        </View>
      </View>
      <View style={{paddingLeft:20,flexDirection:'row',marginTop:15}}>
        <View style={{paddingTop:15,paddingRight:30}}>
          <FontAwesome5 name="heart" size={30} color="black" />
        </View>
        <View style={{paddingTop:15,paddingRight:140}}>
          <Entypo name="dots-three-horizontal" size={30} color="black" />
        </View>
        <View style={{paddingTop:15,paddingRight:20}}>
          <FontAwesome5 name="random" size={30} color="black" />
        </View>
        <View>
          <AntDesign name="play" size={60} color="black" />
        </View>
      </View>
      <ScrollView style={{height:180,marginTop:10}}>
        <View style={{flexDirection:"row"}}>
          <View>
            <Image
                  source={require('../../assets/PlayList/Image51.png')}
                  style={{
                    width: 80,
                    height: 80,
                    marginLeft: 20,
                    borderRadius: 5,
                  }}
                />
          </View>
          <View style ={{paddingLeft:20,paddingTop:5}}>
            <View>
              <Text style={{fontSize:20,fontWeight:400}}>
                FOLLOWER
              </Text>
            </View>
            <View style ={{paddingTop:5}}>
              <Text style={{color:"#808080",fontWeight:400}}>
                Jessica Gonzalez
              </Text>
          </View>
            <View style={{flexDirection:'row',paddingTop:5}}>
              <View style={{paddingRight:10,paddingTop:3}}>
                <Feather name="play" size={20} color="#808080" />
              </View>
              <View style={{paddingTop:5,paddingRight:10}}>
                <Text style={{color:"#808080",fontWeight:400}}>
                  2,1M
                </Text>
              </View>
              <View style={{paddingRight:10,paddingTop:5}}>
                <Octicons name="dot-fill" size={17} color="#808080" />
              </View>
              <View style={{paddingTop:5}}>
                <Text style={{color:"#808080",fontWeight:400}}>
                3:36
                </Text>
              </View>
            </View>
          </View>
          <View style={{paddingTop:30,paddingLeft:80}}>
            <Entypo name="dots-three-horizontal" size={30} color="black" />
          </View>
        </View>
        <View style={{flexDirection:"row",paddingTop:10}}>
          <View>
            <Image
                  source={require('../../assets/PlayList/Image52.png')}
                  style={{
                    width: 80,
                    height: 80,
                    marginLeft: 20,
                    borderRadius: 5,
                  }}
                />
          </View>
          <View style ={{paddingLeft:20,paddingTop:5}}>
            <View>
              <Text style={{fontSize:20,fontWeight:400}}>
                Shape Of You 
              </Text>
            </View>
            <View style ={{paddingTop:5}}>
              <Text style={{color:"#808080",fontWeight:400}}>
                Anthony Taylor
              </Text>
          </View>
            <View style={{flexDirection:'row',paddingTop:5}}>
              <View style={{paddingRight:10,paddingTop:3}}>
                <Feather name="play" size={20} color="#808080" />
              </View>
              <View style={{paddingTop:5,paddingRight:10}}>
                <Text style={{color:"#808080",fontWeight:400}}>
                  68M
                </Text>
              </View>
              <View style={{paddingRight:10,paddingTop:5}}>
                <Octicons name="dot-fill" size={17} color="#808080" />
              </View>
              <View style={{paddingTop:5}}>
                <Text style={{color:"#808080",fontWeight:400}}>
                  03:35
                </Text>
              </View>
            </View>
          </View>
          <View style={{paddingTop:30,paddingLeft:70}}>
            <Entypo name="dots-three-horizontal" size={30} color="black" />
          </View>
        </View>
        <View style={{flexDirection:"row",paddingTop:10}}>
          <View>
            <Image
                  source={require('../../assets/PlayList/Image53.png')}
                  style={{
                    width: 80,
                    height: 80,
                    marginLeft: 20,
                    borderRadius: 5,
                  }}
                />
          </View>
          <View style ={{paddingLeft:20,paddingTop:5}}>
            <View>
              <Text style={{fontSize:20,fontWeight:400}}>
                Bliding Lights 
              </Text>
            </View>
            <View style ={{paddingTop:5}}>
              <Text style={{color:"#808080",fontWeight:400}}>
                Brian Bailey
              </Text>
          </View>
            <View style={{flexDirection:'row',paddingTop:5}}>
              <View style={{paddingRight:10,paddingTop:3}}>
                <Feather name="play" size={20} color="#808080" />
              </View>
              <View style={{paddingTop:5,paddingRight:10}}>
                <Text style={{color:"#808080",fontWeight:400}}>
                  93M
                </Text>
              </View>
              <View style={{paddingRight:10,paddingTop:5}}>
                <Octicons name="dot-fill" size={17} color="#808080" />
              </View>
              <View style={{paddingTop:5}}>
                <Text style={{color:"#808080",fontWeight:400}}>
                  04:39
                </Text>
              </View>
            </View>
          </View>
          <View style={{paddingTop:30,paddingLeft:70}}>
            <Entypo name="dots-three-horizontal" size={30} color="black" />
          </View>
        </View>

        <View style={{flexDirection:"row",paddingTop:10}}>
          <View>
            <Image
                  source={require('../../assets/PlayList/Image54.png')}
                  style={{
                    width: 80,
                    height: 80,
                    marginLeft: 20,
                    borderRadius: 5,
                  }}
                />
          </View>
          <View style ={{paddingLeft:20,paddingTop:5}}>
            <View>
              <Text style={{fontSize:20,fontWeight:400}}>
                Levitating
              </Text>
            </View>
            <View style ={{paddingTop:5}}>
              <Text style={{color:"#808080",fontWeight:400}}>
                Anthony Taylor
              </Text>
          </View>
            <View style={{flexDirection:'row',paddingTop:5}}>
              <View style={{paddingRight:10,paddingTop:3}}>
                <Feather name="play" size={20} color="#808080" />
              </View>
              <View style={{paddingTop:5,paddingRight:10}}>
                <Text style={{color:"#808080",fontWeight:400}}>
                  9M
                </Text>
              </View>
              <View style={{paddingRight:10,paddingTop:5}}>
                <Octicons name="dot-fill" size={17} color="#808080" />
              </View>
              <View style={{paddingTop:5}}>
                <Text style={{color:"#808080",fontWeight:400}}>
                  07:48
                </Text>
              </View>
            </View>
          </View>
          <View style={{paddingTop:30,paddingLeft:80}}>
            <Entypo name="dots-three-horizontal" size={30} color="black" />
          </View>
        </View>

        <View style={{flexDirection:"row",paddingTop:10}}>
          <View>
            <Image
                  source={require('../../assets/PlayList/Image55.png')}
                  style={{
                    width: 80,
                    height: 80,
                    marginLeft: 20,
                    borderRadius: 5,
                  }}
                />
          </View>
          <View style ={{paddingLeft:20,paddingTop:5}}>
            <View>
              <Text style={{fontSize:20,fontWeight:400}}>
                Astronaut 
              </Text>
            </View>
            <View style ={{paddingTop:5}}>
              <Text style={{color:"#808080",fontWeight:400}}>
                Pedro Moreno
              </Text>
          </View>
            <View style={{flexDirection:'row',paddingTop:5}}>
              <View style={{paddingRight:10,paddingTop:3}}>
                <Feather name="play" size={20} color="#808080" />
              </View>
              <View style={{paddingTop:5,paddingRight:10}}>
                <Text style={{color:"#808080",fontWeight:400}}>
                  23M
                </Text>
              </View>
              <View style={{paddingRight:10,paddingTop:5}}>
                <Octicons name="dot-fill" size={17} color="#808080" />
              </View>
              <View style={{paddingTop:5}}>
                <Text style={{color:"#808080",fontWeight:400}}>
                  03:36
                </Text>
              </View>
            </View>
          </View>
          <View style={{paddingTop:30,paddingLeft:70}}>
            <Entypo name="dots-three-horizontal" size={30} color="black" />
          </View>
        </View>

        <View style={{flexDirection:"row",paddingTop:10}}>
          <View>
            <Image
                  source={require('../../assets/PlayList/Image56.png')}
                  style={{
                    width: 80,
                    height: 80,
                    marginLeft: 20,
                    borderRadius: 5,
                  }}
                />
          </View>
          <View style ={{paddingLeft:20,paddingTop:5}}>
            <View>
              <Text style={{fontSize:20,fontWeight:400}}>
                Dynamite
              </Text>
            </View>
            <View style ={{paddingTop:5}}>
              <Text style={{color:"#808080",fontWeight:400}}>
                Elena Jimenez
              </Text>
          </View>
            <View style={{flexDirection:'row',paddingTop:5}}>
              <View style={{paddingRight:10,paddingTop:3}}>
                <Feather name="play" size={20} color="#808080" />
              </View>
              <View style={{paddingTop:5,paddingRight:10}}>
                <Text style={{color:"#808080",fontWeight:400}}>
                  10M
                </Text>
              </View>
              <View style={{paddingRight:10,paddingTop:5}}>
                <Octicons name="dot-fill" size={17} color="#808080" />
              </View>
              <View style={{paddingTop:5}}>
                <Text style={{color:"#808080",fontWeight:400}}>
                  06:22
                </Text>
              </View>
            </View>
          </View>
          <View style={{paddingTop:30,paddingLeft:70}}>
            <Entypo name="dots-three-horizontal" size={30} color="black" />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Play')}>
        <View style={{backgroundColor:'black',height:100,flexDirection:'row'}}>
          <View style={{flexDirection:"row"}}>
            <View style ={{paddingTop:20}}>
              <Image
                    source={require('../../assets/PlayList/Image57.png')}
                    style={{
                      width: 60,
                      height: 60,
                      marginLeft: 20,
                      borderRadius: 5,
                    }}
                  />
            </View>
            <View style={{paddingLeft:20,paddingTop:25}}>
              <View style={{}}>
                  <Text style={{fontSize:20,fontWeight:700,color:"#FFFF"}}>
                    FOLOWER
                  </Text>
              </View>
              <View style={{flexDirection:'row',paddingTop:5}}>
                <View style={{paddingTop:5,paddingRight:10}}>
                  <Text style={{color:"#FFFF",fontWeight:700}}>
                        ME
                  </Text>
                </View>
                <View style={{paddingRight:10}}>
                  <Octicons name="dot-fill" size={24} color="#FFFF" />
                </View>
                <View style={{paddingTop:5}}>
                  <Text style={{color:"#FFFF",fontWeight:700}}>
                    Jessica Gonzalez
                  </Text>
                </View>
              </View>
            </View>
            <View style={{paddingLeft:20,paddingTop:40 }}>
                  <FontAwesome5 name="heart" size={24} color="#FFFF" />
            </View>
            <View style={{paddingLeft:20,paddingTop:37}} >
              <Feather name="play" size={30} color="#FFFF" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default ChartsCanada;
