import { Entypo, Feather } from '@expo/vector-icons';
import { StyleSheet,Image, ScrollView } from 'react-native';
import pins from '../assets/data/pins';
import EditScreenInfo from '../components/EditScreenInfo';
import MasonryList from '../components/MasonryList';
import { Text, View,} from '../components/Themed';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style ={styles.icons}>
        <Feather name="share" size={24} color="black" style={styles.icon}/>
        <Entypo name="dots-three-horizontal" size={24} color="black" style={styles.icon}/>
        </View>
      <Image source={{uri:"https://pngimg.com/uploads/pinterest/small/pinterest_PNG57.png"}} style={styles.image}/>
      
      <Text style={styles.title}>User Name</Text>
      <Text style={styles.subtitle}>123 Followers | 321 Following </Text>
      </View>
      <MasonryList pins={pins}/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:10,
  },
  subtitle:{
    color:"#181818",
    fontWeight:"600",
    margin:10,
  },
  image:{
    width:150,
    aspectRatio:1,
    borderRadius:200,
    marginVertical:10,
  },
  header:{
    alignItems:'center',
    
  },
  icons:{
    flexDirection:"row",
    alignSelf:"flex-end",
    padding: 10,
  },
  icon:{
    paddingHorizontal:10,
  },
});
