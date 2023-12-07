import { useState, useEffect } from 'react';
import { getPublicData } from '../service/api';
import KakaoMap from './KakaoMap';
import RechartBar from './RechartBar';
import RechartPie from './RechartPie';
import { CODES } from '../service/api';


export default function Dashboard({ disId, card}) {
  // 매개 변수
  const [error, setError] = useState(null);

  const [isLoaded, setIsLoaded] = useState(false);
  // 지역별 저장
  const [accidents, setAccidents] = useState([]);
  // 지역별 질병 건수
  const [accidentCount, setAccidentCount] = useState(null);

  const [guname, setGuname] = useState('용산구');

  // key state
  console.log(accidents);

  async function fetchData() {
    try {
      setIsLoaded(false);
      setError(null);

      const data = await getPublicData(disId, card);

      setAccidents(data.response.body.items);
      setAccidentCount(data.response.body.totalCount);
      console.log(data);


    } catch (error) {
      setError(error)
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, [disId, card])

  if (error) {
    return <p className="p-8 text-center text-red-400">{error.message}</p>
  }

  if (!isLoaded) {
    return (
      <div className="p-8 flex justify-center">
        <div className="w-12 h-12 border-8 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  // 데이터를 가져오고 난뒤 접근
  // ...
  


  

  return accidentCount > 0 ? (
    <>
    <div>
      <div>
        <KakaoMap
        accidents={accidents}
        guname={guname}
        />
      </div>

    <div className='grid grid-cols-1 md:grid-cols-2 py-8'>
      <div className='w-full h-[350px]'>
        <RechartBar 
        accidents = {accidents}/>
      </div>

      <div className='pl-10'>
        <RechartPie 
        accidents = {accidents}
        card = {card}
        guname={guname}
        />
      </div>
    </div>

    </div>
    
      
      
    </>
  ): (
    <p className="p-8 text-center">데이터가 없습니다</p>
  )
}