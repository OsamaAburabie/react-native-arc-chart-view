import * as React from 'react';

import { ReactNativeArcChartViewProps } from './ReactNativeArcChartView.types';

export default function ReactNativeArcChartView(props: ReactNativeArcChartViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
