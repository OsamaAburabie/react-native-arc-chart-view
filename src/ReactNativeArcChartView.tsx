import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeArcChartViewProps } from './ReactNativeArcChartView.types';

const NativeView: React.ComponentType<ReactNativeArcChartViewProps> =
  requireNativeViewManager('ReactNativeArcChartView');

export default function ReactNativeArcChartView(props: ReactNativeArcChartViewProps) {
  return <NativeView {...props} />;
}
