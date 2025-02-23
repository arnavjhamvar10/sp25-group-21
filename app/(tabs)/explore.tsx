import { View, Text, StyleSheet, TextInput,Image,Pressable,FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Categories from '../components/Categories';
import ItemComponent from '../components/ItemComponent';

const ExplorePage = () => {
  return (
    <SafeAreaView style={{margin:10}}>
      <View style={{ 
        flexDirection: "row", 
        alignItems: "center", 
        backgroundColor: "#BCBCBC", 
        padding:7,
        borderRadius: 6
        }}
        >
        <FontAwesome5 name="search" size={20} color="green" />
        <TextInput style={{ paddingLeft:5}} placeholder='Get Explorin...' />
      </View>
      <Categories/>
      <Pressable>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image 
                style={{width:150,height:100,margin:10,borderRadius:7}}
                  source={{
                    uri: "https://ca-times.brightspotcdn.com/dims4/default/55792cb/2147483647/strip/true/crop/2160x1440+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa4%2F92%2Fef0947e5423fa684a597c1953545%2Ffood-delivery-service-app-fees-restaurants.jpg",
                  }}
                />
                <Image
                  style={{width:150,height:100,borderRadius:7}}
                  source={{
                    uri: "https://s7d1.scene7.com/is/image/mcdonalds/1PUB_DigitalExperience_McDelivery:1-column-desktop?resmode=sharp2",
                  }}
                />
                </View>
                </Pressable>
                <ItemComponent/>
    </SafeAreaView>
  );
};

export default ExplorePage;

const styles = StyleSheet.create({
  container: {

  },
});