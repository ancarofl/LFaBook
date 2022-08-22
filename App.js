import React from 'react';
import type { Node } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import AppNav from './src/stacks/AppNav';

const App: () => Node = () => {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
			    <AppNav />       
            </SafeAreaProvider>                     
        </NavigationContainer>           
    );
};

export default App;
