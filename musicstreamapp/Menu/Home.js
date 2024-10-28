import { Text, View, Image, TextInput, ScrollView,TouchableOpacity, } from 'react-native';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import EvilIcons from '@expo/vector-icons/EvilIcons';


function Home({ navigation }) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 70,
          flex: 1,
        }}>
        <Image
          source={require('../assets/HomeImage/Image36.png')}
          style={{ width: 50, height: 30, marginLeft: 20, marginRight: 190 }}
        />
        <FontAwesome5
          name="bell"
          size={30}
          color="#808080"
          style={{width: 50, height: 40,paddingTop:5}}
        />
        <Image
          source={require('../assets/HomeImage/Avatar3.png')}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <View style={{ paddingTop: 70 }}>
        <Image
          source={require('../assets/HomeImage/Goodmorning,.png')}
          style={{ width: 140, height: 20, marginLeft: 20, marginRight: 160 }}
        />
      </View>
      <View style={{ paddingTop: 10 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 700,
            marginLeft: 20,
            marginRight: 160,
          }}>
          Ashley Scott
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 10,
          marginTop: 12,
          marginLeft: 12,
          borderWidth: 1,
          borderColor: '#808080',
          borderRadius: 50,
          width: 350,
        }}>
        <EvilIcons
          name="search"
          size={30}
          color="black"
          style={{ paddingTop: 10, paddingLeft: 10 }}
        />
        <TextInput
          placeholder="What you want to listen to"
          // placeholderTextColor="black"
          style={{
            paddingLeft: 10,
            height: 45,
            width: 300,
          }}
        />
      </View>
      <ScrollView style={{height:460,marginTop:10}}>
        <View style={{ paddingTop: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              marginLeft: 20,
              marginRight: 160,
            }}>
            Suggests for you
          </Text>
        </View>
        <ScrollView horizontal={true} style={{ paddingTop: 10 }}>
          <Image
            source={require('../assets/HomeImage/Container26.png')}
            style={{ width: 150, height: 190, marginLeft: 20, borderRadius: 5 }}
          />
          <Image
            source={require('../assets/HomeImage/Container27.png')}
            style={{ width: 150, height: 190, marginLeft: 20, borderRadius: 5 }}
          />
          <Image
            source={require('../assets/HomeImage/Container26.png')}
            style={{ width: 150, height: 190, marginLeft: 20, borderRadius: 5 }}
          />
          <Image
            source={require('../assets/HomeImage/Container27.png')}
            style={{ width: 150, height: 190, marginLeft: 20, borderRadius: 5 }}
          />
        </ScrollView>
        <View style={{ paddingTop: 20, flexDirection: 'row' }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              marginLeft: 20,
              marginRight: 120,
            }}>
            Charts
          </Text>
          <Image
            source={require('../assets/HomeImage/Seeall.png')}
            style={{ width: 50, height: 20, marginLeft: 100 }}
          />
        </View>
        <ScrollView
          horizontal={true}
          style={{ paddingTop: 10, paddingBottom: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('ChartsCanada')} >
            <View>
              <Image
                source={require('../assets/HomeImage/Container31.png')}
                style={{
                  width: 100,
                  height: 100,
                  marginLeft: 20,
                  borderRadius: 5,
                }}
              />
              <Text
                style={{
                  color: '#808080',
                  marginLeft: 20,
                  fontSize: 10,
                  fontWeight: 700,
                  paddingTop:10
                }}>
                Daily chart-toppers
              </Text>
              <Text
                style={{
                  color: '#808080',
                  marginLeft: 20,
                  fontSize: 10,
                  fontWeight: 700,
                }}>
                update
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Image
              source={require('../assets/HomeImage/Container32.png')}
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                color: '#808080',
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
                paddingTop:10
              }}>
              Daily chart-toppers
            </Text>
            <Text
              style={{
                color: '#808080',
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
              }}>
              update
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/HomeImage/Container33.png')}
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                color: '#808080',
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
                paddingTop:10
              }}>
              Daily chart-toppers
            </Text>
            <Text
              style={{
                color: '#808080',
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
              }}>
              update
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/HomeImage/Container31.png')}
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                color: '#808080',
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
                paddingTop:10
              }}>
              Daily chart-toppers
            </Text>
            <Text
              style={{
                color: '#808080',
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
              }}>
              update
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/HomeImage/Container32.png')}
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                color: '#808080',
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
                paddingTop:10
              }}>
              Daily chart-toppers
            </Text>
            <Text
              style={{
                color: '#808080',
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
              }}>
              update
            </Text>
          </View>
        </ScrollView>
        <View style={{ paddingTop: 20, flexDirection: 'row' }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              marginLeft: 20,
              marginRight: 20,
            }}>
            Trending albums
          </Text>
          <Image
            source={require('../assets/HomeImage/Seeall.png')}
            style={{ width: 50, height: 20, marginLeft: 100 }}
          />
        </View>
         <ScrollView
          horizontal={true}
          style={{ paddingTop: 10, paddingBottom: 10 }}>
          <View>
            <Image
              source={require('../assets/HomeImage/Image45.png')}
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
                paddingTop:10
              }}>
              ME
            </Text>
            <Text
              style={{
                color: '#808080',
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
              }}>
              Jessica Gonzalez
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/HomeImage/Image46.png')}
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
                paddingTop:10
              }}>
              Magna nost
            </Text>
            <Text
              style={{
                color: '#808080',
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
              }}>
              Brian Thomas
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/HomeImage/Image47.png')}
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
                paddingTop:10
              }}>
              Magna nost
            </Text>
            <Text
              style={{
                color: '#808080',
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
              }}>
              Brian Mass
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/HomeImage/Image45.png')}
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
                paddingTop:10
              }}>
              ME
            </Text>
            <Text
              style={{
                color: '#808080',
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
              }}>
              Jessica Gonzalez
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/HomeImage/Image46.png')}
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
                paddingTop:10
              }}>
              Magna nost
            </Text>
            <Text
              style={{
                color: '#808080',
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
              }}>
              Brian Thomas
            </Text>
          </View>
        </ScrollView>
        <View style={{ paddingTop: 20, flexDirection: 'row' }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              marginLeft: 20,
              marginRight: 35,
            }}>
            Popular Artists
          </Text>
          <Image
            source={require('../assets/HomeImage/Seeall.png')}
            style={{ width: 50, height: 20, marginLeft: 100 }}
          />
        </View>
         <ScrollView
          horizontal={true}
          style={{ paddingTop: 10, paddingBottom: 10 }}>
          <View>
            <Image
              source={require('../assets/HomeImage/Image39.png')}
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
                paddingLeft:10,
                paddingTop:10,
                alignItems:'center'
              }}>
              Jennifer Wilson 
            </Text>
            <View style={{
              border:1,
              backgroundColor:'black',
              borderRadius:50,
              width:60,
              height:40,
              alignItems:'center',
              justifyContent:'center',
              marginTop:10,
              marginLeft:35
            }}>
              <Text style={{color:'#FFFF',fontWeight:700,fontSize:12}}>
                Follow
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={require('../assets/HomeImage/Image40.png')}
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
                paddingLeft:10,
                paddingTop:10,
                alignItems:'center'

              }}>
              Elizabeth Hall 
            </Text>
            <View style={{
              border:1,
              backgroundColor:'black',
              borderRadius:50,
              width:60,
              height:40,
              alignItems:'center',
              justifyContent:'center',
              marginTop:10,
              marginLeft:35
            }}>
              <Text style={{color:'#FFFF',fontWeight:700,fontSize:12}}>
                Follow
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={require('../assets/HomeImage/Image41.png')}
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
                paddingLeft:20,
                paddingTop:10,
                alignItems:'center'
              }}>
              Anthoni Loi
            </Text>
            <View style={{
              border:1,
              backgroundColor:'black',
              borderRadius:50,
              width:60,
              height:40,
              alignItems:'center',
              justifyContent:'center',
              marginTop:10,
              marginLeft:35
            }}>
              <Text style={{color:'#FFFF',fontWeight:700,fontSize:12}}>
                Follow
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={require('../assets/HomeImage/Image39.png')}
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
                paddingLeft:10,
                paddingTop:10,
                alignItems:'center'
              }}>
              Jennifer Wilson
            </Text>
            <View style={{
              border:1,
              backgroundColor:'black',
              borderRadius:50,
              width:60,
              height:40,
              alignItems:'center',
              justifyContent:'center',
              marginTop:10,
              marginLeft:35
            }}>
              <Text style={{color:'#FFFF',fontWeight:700,fontSize:12}}>
                Follow
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={require('../assets/HomeImage/Image40.png')}
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 10,
                fontWeight: 700,
                paddingTop:10,
                paddingLeft:20,
                alignItems:'center'
              }}>
              Anthoni Loi
            </Text>
            <View style={{
              border:1,
              backgroundColor:'black',
              borderRadius:50,
              width:60,
              height:40,
              alignItems:'center',
              justifyContent:'center',
              marginTop:10,
              marginLeft:35
            }}>
              <Text style={{color:'#FFFF',fontWeight:700,fontSize:12}}>
                Follow
              </Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}
export default Home;
