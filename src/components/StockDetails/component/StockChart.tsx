import * as React from 'react';

import { Radio } from 'antd';
import { Chart, Geom, Tooltip, View } from 'bizcharts';
//import DataSet from '@antv/data-set';
export interface StockChartProps {
  selectedRange: string;
  chartData: Array<any>;
  chartRange: Array<any>;
  handleChartChange: () => {};
}
const getDataFilter = (str: string) => {
  let dataFilter = {
    type: 'pick',
    key: 'symbol',
    value: 'average',
    fields: ['', ''],
  };
  if (str === '1D') {
    dataFilter.fields = ['label', 'average'];
  } else {
    dataFilter.fields = ['date', 'close'];
  }
  return dataFilter;
};
export const StockChart: React.SFC<StockChartProps> = (props) => {
  const DataSet = require('@antv/data-set');
  const ds = new DataSet();
  const dataFilter = getDataFilter(props.selectedRange);
  const dv = ds
    .createView()
    .source(props.chartData)
    .transform(dataFilter)
    .transform({
      type: 'filter',
      callback(row: any) {
        return row.average !== -1;
      },
    });
  const cols = {
    average: { range: [0, 1] },
  };
  return (
    <div className="SymbolChart">
      <Chart height={300} data={dv} forceFit={true}>
        <Tooltip
          crosshairs={{
            type: 'y',
          }}
        />
        <View scale={cols} data={dv}>
          <Geom
            type="line"
            position={dataFilter.fields[0] + '*' + dataFilter.fields[1]}
            size={2}
            color="#af3232"
          />
        </View>
      </Chart>
      <Radio.Group defaultValue="1D">
        {props.chartRange.map((r) => (
          <Radio.Button value={r} onClick={props.handleChartChange}>
            {r}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};
