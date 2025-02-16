import { View, Text, StyleSheet, TextInput,Image,Pressable,FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Categories from '../Components/Categories';

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
      <Pressable style={{ marginLeft: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image 
                style={{width:150,height:100}}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU",
                  }}
                />
                <Image
                  style={{width:150,height:100}}
                  source={{
                    uri: "https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1002269/zomato-infinity-dining-916x516-1-916x516.jpg",
                  }}
                />
                </View>
                </Pressable>
    </SafeAreaView>
  );
};

export default ExplorePage;

const styles = StyleSheet.create({
  container: {

  },
});