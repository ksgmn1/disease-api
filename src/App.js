import { DISTRICTS } from "./constants/districts";
import { DISCODES } from "./constants/cards";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import TheaterLocation from "./components/KakaoMap";


export default function App() {
  // 지역별 id
  const [districtId, setDistrictId] = useState("d0");
  // 질병 코드
  const [card, setCard] = useState(1);

  useEffect(() => {
    document.title = "질병 실시간 조회";
  }, [])

  const districtList = DISTRICTS.map(district => (
    <option key={district.id} value={district.id}>
      {district.city} {district.name}
    </option>
  ))

  const cardList = DISCODES.map(card => (
    <option key={card.codeNum} value={card.codeNum}>
      {card.codeNum} {card.codeName}
    </option>
  ))

  return (
    <>
      <header className="sticky top-0 z-[9999] shadow">
        <div className="h-16  bg-white flex justify-between px-8">
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                className="w-6 h-6"
                src={process.env.PUBLIC_URL + "/images/disease.jpg"} 
                alt="" 
              /> 
              <h3 className="ml-2 text-2xl text-gray-500 font-semibold">
                질병 실시간 조회
              </h3>
            </div>
          </div>
          <div className="flex items-center">
            <select 
              className="p-2 bg-gray-200 rounded"
              onChange={({ target }) => setDistrictId(target.value)}
            >
              {districtList}
            </select>

            <select 
              className="p-2 ml-2 bg-gray-200 rounded"
              onChange={({ target }) => setCard(target.value)}
            >
              {cardList}
            </select>
          </div>
        </div>
      </header>
      

      <main className="pb-4">
        <TheaterLocation />
        <Dashboard 
          districtId={districtId}
          card={card}
        />
      </main>
    </>  
  )
};