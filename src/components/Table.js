import React from "react";
import { useState } from "react";
import Dashboard from "./Dashboard";

export default function Table({ accidents, card }) {
    const seoulDiss = accidents.map(accident => (
        <tr key={accident}>
            <td>{accidents.dissCd}</td>
        </tr>
    ))

    var sum = 0;
    for (var i=0; i<accidents.length; i++) {
      sum += accidents[i].cnt
    }
    
    console.log("서울 합계:", sum);

    // var youngsanGu = accidents.filter(item => item.lowrnkZnCd == '11170');
    // console.log("서울용산구 합계:", youngsanGu[0].cnt)

    // var yeongdeungpoGu = accidents.filter(item => item.lowrnkZnCd == '11560');
    // console.log("서울영등포구 합계:", yeongdeungpoGu[0].cnt)

    // var gangnamGu = accidents.filter(item => item.lowrnkZnCd == '11680');
    // console.log("서울강남구 합계:", gangnamGu[0].cnt)

    return (
        <>
            <h1>서울시 감기 총 환자: {sum}명</h1>
                {/* {accidents.map((accident, index) => (
                    <li key={accident}>
                    {accident.dissCd == 1 ? "감기" : "기타"}: 
                    {accident.cnt}명
                    </li>
                ))} */}
{/* 
            <h2>서울시 용산구 감기 환자: {youngsanGu[0].cnt}명</h2>
            <h2>서울시 영등포구 감기 환자: {yeongdeungpoGu[0].cnt}명</h2>
            <h2>서울시 강남구 감기 환자: {gangnamGu[0].cnt}명</h2> */}
        </>
    )

};