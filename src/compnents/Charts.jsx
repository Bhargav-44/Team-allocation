import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';





const Charts = () => {

  const [time, setTime] = useState('');

const [data, setData] = useState(() => {
  const storedData = localStorage.getItem('data');
  return storedData ? JSON.parse(storedData) : [
    {
      name: 'Day1',
      time: 4,
    },
    {
      name: 'Day2',
      time: 2,
    },
    {
      name: 'Day3',
      time: 3,
    },
    {
      name: 'Day4',
      time: 5,
    },
  ];
});

useEffect(() => {
  localStorage.setItem('data', JSON.stringify(data));
}, [data]);

function handleAdd(){
  const newData = [...data, {name:`Day${data.length + 1}`, time: parseInt(time) }];
  setData(newData);
  setTime('');
}
  return (

    
    <div className='chart'>

        <label>
          Time:
          <input type="text" value={time} onChange={e => setTime(e.target.value)} />
        </label>
        <button onClick={handleAdd}>Add</button>
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="time"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
    </LineChart>
    </div>
  )
}

export default Charts
