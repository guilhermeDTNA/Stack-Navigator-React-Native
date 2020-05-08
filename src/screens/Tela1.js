import React, {Component} from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';

export default class Tela1 extends Component {


  static navigationOptions = {
    title: 'Tela 1',
    headerRight: <View style={{marginRight:30, width:30, height:30, backgroundColor:'#FF0000'}} >  </View>,



  };

  render(){
    return (
      <View style={styles.body}>
      <Text>Tela 1</Text>


      <Button title="Ir para a tela 2 e mostrar nome" onPress={()=>this.props.navigation.navigate('Tela2', {nome:'Guilherme', idade:22})} />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:Platform.select({
    ios:{
      fontSize:16,
      color:'#0000FF'
    },

    android:{
      fontSize:20,
      color:'#00FF00'
    }
  })
});
