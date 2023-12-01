import React from 'react'
import  { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { getStoredJob } from '../../components/utility/Local';


  const COLORS = [ '#0052FF','#FF444A',];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


const Statistics = () => {
    const storedItem=getStoredJob()
    const count=storedItem.length *290
    const total=(290*12)-(290*storedItem.length)
    console.log(count,total)
    const data = [
        { name: 'Donated', value: count },
        { name: 'Not Donated', value: total },
       
      ];

    return (
    <div>
         <PieChart  className='md:mx-auto' width={250} height={250}>
        <Pie
           data={data}
          
           labelLine={false}
           label={renderCustomizedLabel}
           outerRadius={100}
           fill="#8884d8"
           dataKey="value"
        >
           {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
      </PieChart>
      <div className='md:flex gap-9 justify-center'>
        <div className='flex items-center gap-9'>
            <hr className='h-2 bg-[#0052FF] w-[100px]'  />
            <h1> Doneted</h1>
        </div>
        <div className='flex items-center gap-9'>
            <hr className='h-2 bg-[#FF444A] w-[100px]'  />
            <h1>Not Doneted</h1>
        </div>
      </div>
    </div>
      
       

      
    
        
       
      )
}

export default Statistics
