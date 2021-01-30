import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import roma from '../assets/roma.json'
// import shine from '../assets/shine'

echarts.registerTheme('roma', roma)

function useChart(chartRef, options) {
  let myChart = null;

  function renderChart() {
    const chart = echarts.getInstanceByDom(chartRef.current);
    if (chart) {
      myChart = chart;
    } else {
      myChart = echarts.init(chartRef.current, 'roma');
    }
    myChart.setOption(options);
  }

  useEffect(() => {
    renderChart();
  }, [options]);

  useEffect(() => {
    return () => {
      myChart && myChart.dispose();
    };
  }, []);

  return [myChart];
}

export default useChart;
