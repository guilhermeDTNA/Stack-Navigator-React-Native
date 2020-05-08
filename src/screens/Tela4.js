import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Tela4 extends Component {

	static navigationOptions = {
		title: 'Tela 4',

    //Personaliza o botão de voltar
    headerBackImage:()=>(

    	<View style={{width:30, height:30, backgroundColor:'#FF0000'}} >

    	</View>
    	),

    headerStyle:{
    	backgroundColor:'#0000FF',
    	height:80
    },

    headerTintColor:'#FFFFFF'
};

render(){
	return (
		<View style={styles.body}>
		<Text>Tela 4</Text>


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





