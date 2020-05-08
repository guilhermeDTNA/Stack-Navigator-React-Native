import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import {createBottomTabNavigator} from 'react-navigation-tabs';

//import {createMaterialBottomTabNavigator} from 'react-navigation';
//import {createMaterialTopTabNavigator} from 'react-navigation';
import Login from './src/screens/Login';
import HomeTab from './src/screens/HomeTab';
import Tela4 from './src/screens/Tela4';

const AppNavigator = createStackNavigator ({
	Login:{
		screen:Login
	},
	HomeTab:{
		screen:HomeTab
	},
	Tela4:{
		screen:Tela4
	}
},{
	initialRouteName:'Login',
	/*'float': aparece no lugar
	  'screen': sobe e se encaixa'
	  'none': não aparece header
	*/

	headerMode: 'screen',

	//true: mostra o nome da tela anerior ao lado da atual
	headerBackTitleVisible:false,
	headerLayoutPreset:'center',

}

);

export default createAppContainer(AppNavigator);