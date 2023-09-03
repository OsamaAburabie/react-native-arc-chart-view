import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to ReactNativeArcChartView.web.ts
// and on native platforms to ReactNativeArcChartView.ts
import ReactNativeArcChartViewModule from "./ReactNativeArcChartViewModule";
import ReactNativeArcChartView from "./ReactNativeArcChartView";
import {
  ChangeEventPayload,
  ReactNativeArcChartViewProps,
} from "./ReactNativeArcChartView.types";

// Get the native constant value.
export const PI = ReactNativeArcChartViewModule.PI;

export function hello(): string {
  return ReactNativeArcChartViewModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeArcChartViewModule.setValueAsync(value);
}

const emitter = new EventEmitter(
  ReactNativeArcChartViewModule ?? NativeModulesProxy.ReactNativeArcChartView
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export {
  ReactNativeArcChartView,
  ReactNativeArcChartViewProps,
  ChangeEventPayload,
};
