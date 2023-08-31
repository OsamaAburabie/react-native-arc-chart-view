import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativeArcChartView from 'react-native-arc-chart-view';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeArcChartView.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
