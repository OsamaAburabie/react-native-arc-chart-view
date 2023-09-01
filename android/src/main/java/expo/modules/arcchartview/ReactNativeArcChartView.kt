package expo.modules.arcchartview

import android.annotation.SuppressLint
import android.content.Context
import android.util.Log
import com.neo.arcchartview.ArcChartView
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView
import expo.modules.kotlin.viewevent.EventDispatcher

@SuppressLint("ViewConstructor")
class ReactNativeArcChartView(context: Context, appContext: AppContext) :
    ExpoView(context, appContext) {
    private val onStartSettingSectionValue by EventDispatcher()
    private val onContinueSettingSectionValue by EventDispatcher()
    private val onFinishedSettingSectionValue by EventDispatcher()

    internal val arcChartView = ArcChartView(context).also {
        it.layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT)

        it.listener = object : ArcChartView.AcvListener {
            override fun onStartSettingSectionValue(sectionPos: Int, sectionValue: Int) {
                onStartSettingSectionValue(
                    mapOf(
                        "sectionPos" to sectionPos,
                        "sectionValue" to sectionValue
                    )
                )

                Log.d("ReactNativeArcChartView", "onStartSettingSectionValue $sectionPos $sectionValue")
            }

            override fun onContinueSettingSectionValue(sectionPos: Int, sectionValue: Int) {
                onContinueSettingSectionValue(
                    mapOf(
                        "sectionPos" to sectionPos,
                        "sectionValue" to sectionValue
                    )
                )

                Log.d("ReactNativeArcChartView", "onContinueSettingSectionValue $sectionPos $sectionValue")
            }

            override fun onFinishedSettingSectionValue(sectionPos: Int, sectionValue: Int) {
                onFinishedSettingSectionValue(
                    mapOf(
                        "sectionPos" to sectionPos,
                        "sectionValue" to sectionValue
                    )
                )

                Log.d("ReactNativeArcChartView", "onFinishedSettingSectionValue $sectionPos $sectionValue")
            }
        }
        addView(it)
    }
}
