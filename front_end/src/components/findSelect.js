import { MdAddCircleOutline } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { useState } from "react";
import { newOrganizer } from "../services/api/drawers.js";
import { useContext } from "react";
import { AuthContext } from "../temp/context.js";

export default function Select(name, updateOpt) {

  const { reload, setReload, dataList } = useContext(AuthContext);

    let types = dataList;

    const optionsTypes = (
        <select name={name} required onChange={updateOpt} defaultValue={'default'}>
          <option disabled value={"default"}>Selecione</option>
          {types[name].map((e, i) => {
            return <option key={i} value={e.id}>{e.name}</option>
          })}
        </select>
      )

    const [addText, setAddText] = useState("");

    const [data, setData] = useState("");

    function sendData() {
      newOrganizer(name, data).then(() => {
        console.log("created");
        setData("");
        setAddText("");
        setReload(!reload);
      }).catch(e => {
        console.log(e);
      })
    }

    return (
      <div className={name}>
        {name}: {addText === name ? 
          <>
          <input placeholder={name} name={name} value={data} onChange={e => setData(e.target.value)}/>
          <GiConfirmed onClick={() => sendData()} className="add"/>
          </> 
          : <>
          {optionsTypes} <MdAddCircleOutline onClick={() => setAddText(name)} className="add"/>
          </> 
        }
      </div>
    )
}