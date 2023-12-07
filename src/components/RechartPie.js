import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
  { name: '관심', value: 25, color: '#00A5B3' },
  { name: '주의', value: 25, color: '#63A600' },
  { name: '경고', value: 25, color: '#FF9700' },
  { name: '위험', value: 25, color: '#EE4617' },
];
const cx = 200;
const cy = 150;
const iR = 90; // 내부 원 지름 값 낮을수록 내부 원 좁아짐
const oR = 100; // 바늘 길이
const value = 37.5; // 0~100 바늘 표시 위치




const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;


  return [
    <circle cx={x0} cy={y0} r={r+30} fill={color} stroke="none"/>,
    <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
    <p> 123456</p>

  ];
};

let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
let year = today.getFullYear();  //현재 년도
let month = today.getMonth() + 1; // 현재 월
let date = today.getDate(); // 현재 날짜
let finalDate = `${year}` + month+date;

export default function RechartPie ({accidents, guname}) {
  
  if(finalDate.length == 7 ){
    return finalDate = `${year}` + `${month}` + 0 +`${date}`;
  }
  
    const data1 = accidents.filter(accident => {
      if(finalDate == accident.dt){
        if (accident.lowrnkZnCd === '11170') {
            return accident.name = "용산구";
        } else if (accident.lowrnkZnCd === '11560') {
            return accident.name = "영등포구";
        } else if (accident.lowrnkZnCd === '11680') {
            return accident.name = "강남구"
        } else if (accident.lowrnkZnCd === '28170') {
          return accident.name = "미추홀구"
        } else if (accident.lowrnkZnCd === '28237') {
          return accident.name = "부평구"
        } else if (accident.lowrnkZnCd === '28245') {
          return accident.name = "계양구"
        } else return
      }
      })
      
      function isRisk() {
        let color1 = ['#00A5B3','#63A600','#FF9700','#EE4617'];
        let value1 = ['관심', '주의', '경고', '위험'];

        for(let i=0; i<data1.length; i++){
          if(data1[i].risk == 1) {
            return data1[i].color = color1[0], data1[i].value=value1[0];

          } else if(data1[i].risk == 2){
            return data1[i].color = color1[1], data1[i].value=value1[1];

          } else if(data1[i].risk == 3) {
            return data1[i].color = color1[2], data1[i].value=value1[2];

          } else {
            return data1[i].color = color1[3], data1[i].value=value1[3];
            
          }
        }
     }  
     function dissName() {
      for(let i=0; i<data1.length; i++) {
        if(data1[i].dissCd == 1){
          return data1[i].disName = '감기'
        } else if (data1[i].dissCd == 2) {
          return data1[i].disName = '눈병'
        } else if (data1[i].dissCd == 3) {
          return data1[i].disName = '식중독'
        } else return data1[i].disName = '천식';
      }
     }

      console.log(data1[1])
      // console.log(isRisk())
      console.log(dissName())


  
    return (
      <>
      <div className='relative'>
        <p className='absolute top-24 left-20 text-sm text-[#00A5B3]'>관심</p>
        <p className='absolute top-8 left-36 text-sm text-[#63A600]'>주의</p>
        <p className='absolute top-8 left-60 text-sm text-[#FF9700]'>경고</p>
        <p className='absolute top-24 right-32 text-sm text-[#EE4617]'>위험</p>
        <div className='absolute top-56 left-4 text-2xl font-bold text-[#666666]'>
          <p className='pl-4'> {data1[0].name}의 {}는 
          <span className='text-[#63A600]'> {data1[0].value}</span>단계입니다.</p>
        </div>
      </div>
      <PieChart width={600} height={500}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
          
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, '#63A600')} {/* 여기서 color > 바늘색깔 */}
      </PieChart>
      </>
    );
  
}