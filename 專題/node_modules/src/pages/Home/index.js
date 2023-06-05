import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from '../../global/constants'
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import { saveAs } from "file-saver";

function downloadJson(modifiedData, filename) {
    const jsonData = JSON.stringify(modifiedData, null, 2);
    const jsonStr = `{\n${jsonData}\n}`; // 加入換行符號
    const blob = new Blob([jsonStr], { type: "application/json" });
    saveAs(blob, filename);
  }
  

async function uploadJsonToPinata(modifiedData, filename) {
  const apiKey = 'fa4a08d7ea6c2452094c';
  const apiSecret = '6831ea23a4170dfc1f6d422496c244c7e67e8d1965e214ef3987c5438fc064eb';

  const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      pinata_api_key: apiKey,
      pinata_secret_api_key: apiSecret,
    },
    body: JSON.stringify({
      pinataMetadata: {
        name: filename, // 設置文件名
      },
      pinataContent: modifiedData,
    }),
  });

  const result = await response.json();
  return result;
}

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  setData(data)
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ data })
  })
}

const Home = () => {
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false);

  useEffect(() => {
    if (!submittingStatus.current) {
      return;
    }
    fetchSetData(data)
      .then(data => submittingStatus.current = false)
  }, [data])

  useEffect(() => {
    fetchData(setData)
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      const modifiedData = {
        name: data[0].name,
        description: data[0].description,
        image: data[0].image,
        attributes: [
          { trait_type: "number", value: data[0].number },
          { trait_type: "department", value: data[0].dep },
          { trait_type: "school", value: "國立台灣師範大學" },
          { trait_type: "address", value: data[0].address }
        ]
      };

      // 保存修改後的文件
      downloadJson(modifiedData, "data.json");

      // 使用學號作為文件名
      const number = data[0].number; // 假設學號在數據的第一個對象中
      const filename = `${number}.json`; // 使用學號作為文件名，例如：學號.json

      uploadJsonToPinata(modifiedData, filename)
        .then(result => {
          console.log('File uploaded to Pinata:', result);
          // 處理上傳成功後的操作
        })
        .catch(error => {
          console.error('Error uploading file to Pinata:', error);
          // 處理上傳失敗後的操作
        });
    }
  }, [data]);

  return (
    <div className="app">
      <Edit add={setData} submittingStatus={submittingStatus} />
      <List listData={data} deleteData={setData} submittingStatus={submittingStatus} />
    </div>
  );
};

export default Home;
