package expo.modules.arcchartview

import android.annotation.SuppressLint
import android.content.Context
import com.neo.arcchartview.ArcChartView
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView

@SuppressLint("ViewConstructor")
class ReactNativeArcChartView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {

    internal val arcChartView = ArcChartView(context).also {
        it.layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT)
        
        addView(it)
    }
}
