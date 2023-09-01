package expo.modules.arcchartview

import android.annotation.SuppressLint
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.drawable.Drawable
import androidx.core.net.toUri
import com.bumptech.glide.Glide
import com.bumptech.glide.request.target.CustomTarget
import com.bumptech.glide.request.transition.Transition
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL


class ReactNativeArcChartViewModule : Module() {
    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    @SuppressLint("DiscouragedApi")
    override fun definition() = ModuleDefinition {
        // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
        // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
        // The module will be accessible from `requireNativeModule('ReactNativeArcChartView')` in JavaScript.
        Name("ReactNativeArcChartView")

        // Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.
        Constants(
            "PI" to Math.PI
        )

        // Defines event names that the module can send to JavaScript.
        Events("onChange")

        // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
        Function("hello") {
            "Hello world! 👋"
        }

        // Defines a JavaScript function that always returns a Promise and whose native code
        // is by default dispatched on the different thread than the JavaScript runtime runs on.
        AsyncFunction("setValueAsync") { value: String ->
            // Send an event to JavaScript.
            sendEvent(
                "onChange", mapOf(
                    "value" to value
                )
            )
        }

        // Enables the module to be used as a native view. Definition components that are accepted as part of
        // the view definition: Prop, Events.
        View(ReactNativeArcChartView::class) {

            Events("onStartSettingSectionValue", "onContinueSettingSectionValue", "onFinishedSettingSectionValue")

            Prop("sectionsCount") { view: ReactNativeArcChartView, prop: Int ->
                view.arcChartView.sectionsCount = prop
            }

            Prop("iconSize") { view: ReactNativeArcChartView, prop: Float ->
                view.arcChartView.iconSize = prop
            }

            Prop("linesCount") { view: ReactNativeArcChartView, prop: Int ->
                view.arcChartView.linesCount = prop
            }

            Prop("linesSpace") { view: ReactNativeArcChartView, prop: Float ->
                view.arcChartView.linesSpace = prop
            }

            Prop("linesWidth") { view: ReactNativeArcChartView, prop: Float ->
                view.arcChartView.linesWidth = prop
            }

            Prop("midStartExtraOffset") { view: ReactNativeArcChartView, prop: Float ->
                view.arcChartView.midStartExtraOffset = prop
            }

            Prop("sectionsSpace") { view: ReactNativeArcChartView, prop: Float ->
                view.arcChartView.sectionsSpace = prop
            }

            Prop("sectionsIcons") { view: ReactNativeArcChartView, prop: List<String> ->
                val icons = mutableListOf<Bitmap?>()

                for (imageUrl in prop) {
                    val target = object : CustomTarget<Bitmap>() {
                        override fun onResourceReady(resource: Bitmap, transition: Transition<in Bitmap>?) {
                            icons.add(resource)

                            if (icons.size == prop.size) {
                                view.arcChartView.setSectionIcons(icons)
                            }
                        }

                        override fun onLoadCleared(placeholder: Drawable?) {
                            // Handle onLoadCleared if needed
                        }
                    }

                    if (imageUrl.startsWith("http")) {
                        Glide.with(view.context)
                            .asBitmap()
                            .load(imageUrl.toUri())
                            .into(target)
                    } else {
                        val id = view.context.resources.getIdentifier(imageUrl, "drawable", view.context.packageName)
                        Glide.with(view.context)
                            .asBitmap()
                            .load(id)
                            .into(target)
                    }

                }

            }

            Prop("sectionsValues") { view: ReactNativeArcChartView, prop: List<Int> ->
                for (i in prop.indices) {
                    view.arcChartView.setSectionValue(i, prop[i])
                }
            }

            OnViewDidUpdateProps { view: ReactNativeArcChartView ->
                view.arcChartView.invalidate()
            }

        }
    }
}
