  const API_KEY = "z1xu2sp6YWQMeoZTjQTQVm3%2B4vPkCEusayZGZcxh%2FvxKkldWDQjDdaq%2FlpEIf3tXqLFrVcLemQ61Papzaz7I2Q%3D%3D";
  
  export async function getPublicData(disId, card) {
  
    let url = "http://apis.data.go.kr/B550928/dissForecastInfoSvc/getDissForecastInfo";
    // let url = "https://apis.data.go.kr/B550928/dissForecastInfoSvc/getDissForecastInfo?serviceKey=z1xu2sp6YWQMeoZTjQTQVm3%2B4vPkCEusayZGZcxh%2FvxKkldWDQjDdaq%2FlpEIf3tXqLFrVcLemQ61Papzaz7I2Q%3D%3D&numOfRows=10&pageNo=1&type=json&dissCd=1&znCd=11"
  
    // query
    url += "?serviceKey=" + API_KEY;
    url += "&numOfRows=25";
    url += "&pageNo=1";
    url += "&type=json";
    url += "&dissCd=" + card;
    url += "&znCd=" + disId;
  
    const res = await fetch(url, {});
  
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }
 
    
    
    return res.json();
  }
  
  