import { View, Text, StyleSheet, TextInput } from 'react-native';
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
    
    </SafeAreaView>
  );
};

export default ExplorePage;

const styles = StyleSheet.create({
  container: {

  },
});