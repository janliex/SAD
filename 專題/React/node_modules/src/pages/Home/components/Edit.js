import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [dep, setDep] = useState("");
  const [address, setAddress] = useState("");

  console.log(number, name, dep, address);

  function numberChange(e) {
    setNumber(e.target.value);
  }

  function nameChange(e) {
    setName(e.target.value);
  }

  function depChange(e) {
    setDep(e.target.value);
  }

  function addressChange(e) {
    setAddress(e.target.value);
  }

  function addItem() {
    submittingStatus.current = true;
    add(function (prevData) {
        const newItem = {
            "name": name,
            "description": "這是我的學生證",
            "image": "https://gateway.pinata.cloud/ipfs/QmNo2R7zNgAcMf2kyChiTjdDRfvEL1kK9TtQeJuSWQkxiU?_gl=1*168rv2k*rs_ga*ODBlODA5N2ItY2MxMy00ODU0LTg2OTQtM2QwODdjMTVkZGY0*rs_ga_5RMPXG14TE*MTY4NTQyODYxNS4yNy4xLjE2ODU0MzM0ODIuNjAuMC4w",
             number,
             dep,
             address
          };

      setNumber("");
      setName("");
      setDep("");
      setAddress("");

      return [newItem, ...prevData];
    });
  }

  return (
    <div>
      <h1>學生資料</h1>
      <p>學號：</p>
      <input type="text" value={number} onChange={numberChange} />
      <p>姓名：</p>
      <input type="text" value={name} onChange={nameChange} />
      <p>系所：</p>
      <input type="text" value={dep} onChange={depChange} />
      <p>錢包地址：</p>
      <input type="text" value={address} onChange={addressChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
