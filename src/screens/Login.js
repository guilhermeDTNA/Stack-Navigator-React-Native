import React, {Component} from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';

export default class Login extends Component {


  static navigationOptions = {
    title: 'Login',
    
    
  };

  render(){
    return (
      <View style={styles.body}>
      <Text>Login</Text>

      <Text></Text>

      <Button title="Ir para a tela 2 e mostrar nome" onPress={()=>this.props.navigation.navigate('Tela2', {nome:'Guilherme', idade:22})} />

	<Text></Text>      

      <Button title="Entrar" onPress={()=>this.props.navigation.navigate('HomeTab')} />

      <Text></Text>

      <Button title="Ir para a tela 4" onPress={()=>this.props.navigation.navigate('Tela4')} />
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
