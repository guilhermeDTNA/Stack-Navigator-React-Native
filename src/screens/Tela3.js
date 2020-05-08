import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Tela3 extends Component {

  static navigationOptions = {
    title: 'Tela 3',
  };

  render(){
    return (
      <View style={styles.body}>
      <Text>Tela 3</Text>


      <Button title="Voltar" onPress={()=>this.props.navigation.goBack()} />
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
  }
});
