import React, {Component} from 'react';

import {createBottomTabNavigator} from 'react-navigation-tabs';

//import {createBottomTabNavigator} from 'react-navigation-tabs';

//import {createMaterialBottomTabNavigator} from 'react-navigation';
//import {createMaterialTopTabNavigator} from 'react-navigation';
import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Tela3 from './Tela3';

const HomeTabNavigator = createBottomTabNavigator ({
	Tela1:{
		screen:Tela1
	},
	Tela2:{
		screen:Tela2
	},
	Tela3:{
		screen:Tela3
	}
}

);

export default HomeTabNavigator;