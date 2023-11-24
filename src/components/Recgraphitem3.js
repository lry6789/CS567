import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { observer } from "mobx-react"
import recResStore from '../store/RecResStore'

const Recgraphitem3 = observer(() => {
  const chartRef = useRef(null)
  console.log(recResStore.recRes)
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(chartRef.current)

    // 指定图表的配置项和数据
    const option = {
      title: {
        text: 'Statistical data of labels of top20 recommnedations',
        textStyle: {
          color: 'blue', // 设置标题文本颜色
          fontSize: 16, // 设置标题文本字体大小
        },
        left: 'center', // 设置标题水平居中
        top: 20, // 设置标题距离顶部的距离
      },
      tooltip: {},
      xAxis: {
        data: ['Biased', 'Unbiased', 'Unclear'] // X轴的数据
      },
      yAxis: {},
      series: [{
        name: 'Num',
        type: 'bar', // 这里指定了类型为条形图
        barWidth: '50%', // 这里使用百分比来设置宽度
        data: [{ value: recResStore.Biased, itemStyle: { color: '#f44336' } },
        { value: recResStore.Unbiased, itemStyle: { color: '#e91e63' } },
        { value: recResStore.Unclear, itemStyle: { color: '#9c27b0' } },]
      }]
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)

    // 组件卸载时清理资源
    return () => {
      myChart.dispose()
    }
  }, [])

  return <div ref={chartRef} className='rec-graph-item' />
})
export default Recgraphitem3