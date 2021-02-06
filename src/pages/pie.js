import { useRef } from 'react';
import useChart from '../hooks/useChart';
import styles from './pie.css';

export default function() {
  const chartRef = useRef();
  const options = {
    legend: {
      top: 'bottom',
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: '面积模式',
        type: 'pie',
        radius: [50, 250],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8,
        },
        data: [
          { value: 28, name: '家用电器' },
          { value: 38, name: '食用酒水' },
          { value: 32, name: '母婴产品' },
          { value: 30, name: '其他' },
          { value: 28, name: '电子产品' },
        ],
      },
    ],
  };
  useChart(chartRef, options);

  return (
    <div className={styles.normal}>
      <h1>Page pie</h1>
      <div style={{ width: '800px', height: '80vh' }} ref={chartRef} />
    </div>
  );
}
