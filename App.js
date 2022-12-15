import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomePage from './screens/HomePage';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>
  );
}

