import { useEffect, useState, useRef } from 'react';
import { stocks } from 'stock-api';
import useChart from '../hooks/useChart';
import styles from './stock.css';

export default function() {
  const chartRef = useRef(null);
  const options = {
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
    },
    yAxis: {},
    series: [
      {
        type: 'k',
        data: [
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42],
        ],
      },
    ],
  };
  const [myChart] = useChart(chartRef, options);
  const [code, setCode] = useState('SH600519');
  /*const stockHistory = useRef([]);

  const { readyState, sendMessage, latestMessage, disconnect, connect } = useWebSocket(
    'ws://real.cnshuhai.com:17381/stock',
  );

  stockHistory.current = useMemo(() => stockHistory.current.concat(latestMessage), [
    latestMessage,
  ]);

  useEffect(() => {
    myChart.setOption({
      series: formatData(stockHistory)
    })
  }, [stockHistory])
*/
  useEffect(() => {
    // 获取股票实时数据
    stocks.tencent.getStock(code).then(console.log);

    async function  fetchData(code) {
      const res = await fetch(`https://qt.gtimg.cn/q=${code.toLowerCase()}`)
      const data = res.json()
      myChart.setOption({
        series: data
      })
    }

    // setInterval(() => fetchData(code), 400)
    // fetchData(code)
  }, [code]);

  return (
    <div className={styles.normal}>
      <div ref={chartRef} style={{ width: '400px', height: '400px' }} />
    </div>
  );
}
