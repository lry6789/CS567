import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { observer } from "mobx-react"
import recWeightsStore from '../store/RecWeightsStore'

const Recgraphitem1 = observer(() => {
  const chartRef = useRef(null)

  useEffect(() => {
    const chart = echarts.init(chartRef.current)

    // ECharts配置项，用于定义环形图的数据和样式
    const option = {
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'], // 控制内外圆半径，实现环形图效果
          data: [
            { value: recWeightsStore.biased, name: 'Factor related to bias' },
            { value: recWeightsStore.interaction, name: 'Factor unrelated to bias' },
          ],
          label: {
            show: true, // 不显示标签
          },
        },
      ],
      title: {
        text: 'Bias and non-bias comparsion', // 设置标题文本
        textStyle: {
          color: 'blue', // 设置标题文本颜色
          fontSize: 16, // 设置标题文本字体大小
        },
        left: 'center', // 设置标题水平居中
        top: 20, // 设置标题距离顶部的距离
      },
    }

    chart.setOption(option)

    return () => {
      chart.dispose() // 在组件卸载时销毁ECharts实例，以防止内存泄漏
    }
  }, [])

  return (
    <div
      ref={chartRef}
      className='rec-graph-item'
    />
  )
})
export default Recgraphitem1