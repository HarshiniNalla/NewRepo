import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

export default function PieChart12() {
  return (
    <PieChart
      colors={["red","green","violet"]}
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'employed' },
            { id: 1, value: 15, label: 'unemployed' },
            { id: 2, value: 50, label: 'total' },
          ],
          innerRadius: 40,
          outerRadius: 100,
          arcLabel: (item) => `${item.label} (${item.value})`,
          
      
        },
      ]}
      width={400}
      height={200}
    />
  );
}
