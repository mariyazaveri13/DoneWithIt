import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Image } from 'react-native';

export default function App() {

  let x = 1;
  return (
    <SafeAreaView style={styles.container}>
      <Text>Heyyy!</Text>
      <Image source={{uri:"https://fastly.picsum.photos/id/339/200/300.jpg?hmac=rX8fDMMSNKZhzvcqJCduRuj33pXDgDlJiqOMqSuNwOo",
        width:200,
        height:300
    }}></Image>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
  },
});
