import * as React from 'react';
import { StyleSheet } from 'react-native';

import * as Calendar from '../components/Calendar';
import { ScrollView, Text } from '../components/Themed';

export default function TabOneScreen(this: any) {

  return (
    <ScrollView style={styles.container}>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
  },
});
