import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PersonListScreen} from '../screens/PersonListScreen';
import {PersonInfoScreen} from '../screens/PersonInfoScreen';

import ChouseUserRoleScreen from '../screens/ChouseUserRoleScreen';
import EngeneerLoginScreen from '../screens/Engeneer/EngeneerLoginScreen';
import CreateTaskScreen from '../screens/Engeneer/CreateTaskScreen';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'users'}>
      <Stack.Screen name={'users'} component={ChouseUserRoleScreen} />
      <Stack.Screen name={'engineer/login'} component={EngeneerLoginScreen} />
      <Stack.Screen name={'engineer/list/tasks'} component={PersonListScreen} />
      <Stack.Screen
        name={'engineer/list/tasks/info'}
        component={PersonInfoScreen}
      />
      <Stack.Screen
        name={'engineer/list/tasks/create'}
        component={CreateTaskScreen}
      />
    </Stack.Navigator>
  );
};
