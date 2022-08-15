import styled from "styled-components";
import { useState, useContext } from "react";
import Select from "./findSelect";
import { create, getOrganizer } from "../services/api/drawers.js";
import { useEffect } from "react";
import { AuthContext } from "../temp/context";
import { useNavigate } from "react-router-dom";

export default function InsertItem() {
  const navigate = useNavigate();
  const { reload, setDataList, setPage } = useContext(AuthContext);

  useEffect(() => {
    getOrganizer().then((res) => {
      console.log(res);
      setDataList(res);
    }).catch(() => {
      navigate("/");
    })
  }, [reload]);
  
  const [data, setData] = useState({
    code: "",
    name: "",
    type: 0,
    unit: 0,
    value: "",
    cost: "",
    class: 0,
    subclass: 0,
    group: 0,
    manufacturer: "",
    table: 0,
    position: "",
    document: "",
    note: ""
  });

  function updateData(event) {
      const { name, value } = event.target;
      setData((prevState) => ({ ...prevState, [name]: value }));
  }

  function insert() {
    create(data).then(() => {
      console.log("created");
      setPage("search");
    }).catch(e => {
      console.log(e);
    })
  }

    return (
        <>
            <div className="barr">
                <h3>New item</h3>
            </div>
            <Insert onSubmit={(event) => {event.preventDefault()}}>
                <div className="code">Code: <input required type="number" name="code" onChange={updateData}/></div>
                <div className="name">Name: <input required type="text" name="name" onChange={updateData}/></div>
                {Select("type", updateData)}
                {Select("unit", updateData)}
                <div className="value">Value: <input name="value" onChange={updateData}/></div>
                <div className="cost">Cost: <input name="cost" onChange={updateData}/></div>
                {Select("class", updateData)}
                {Select("subclass", updateData)}
                {Select("group", updateData)}
                <div className="manufacturer">Manufacturer: <input name="manufacturer" onChange={updateData}/></div>
                {Select("table", updateData)}

                <div className="position">Position: 
                  <select name="position" onChange={updateData} defaultValue={'default'}>
                    <option disabled value={"default"}>Selecione</option>
                    <option value={"teste"}>{"teste"}</option>
                  </select>
                </div>

                <div className="document">Document: <input name="document" onChange={updateData}/></div>
                <div className="note">Note: <textarea name="note" onChange={updateData}/></div>

                <button className="send" onClick={insert}>Save</button>
                <button className="cancel" onClick={() => setPage("search")}>Cancel</button>
            </Insert>
        </>
    )
}

const Insert = styled.form`
  border-radius: 10px;
  margin: auto;
  width: 99%;
  height: 95%;
  background-color: #333;// var(--theme);
  box-sizing: border-box;
  padding: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  button {
    width: 10%;
    height: 10%;
    margin-inline: 2%;
  }

  input {
    /* position: absolute; */
    width: calc(100% - 10px);
    height: 100%;
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    font-size: 110%;
  }
  textarea {
    width: calc(100% - 5px);
    height: 100%;
    margin-left: 5px;
    border-radius: 10px;
    border: none;
    font-size: 150%;
  }
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: 1%;
    height: 6%;
  }
  .code { width: 20% }
  .name{ width: 75% }
  .type{ width: 20% }
  .unit{ width: 10% }
  .value{ width: 15% }
  .cost{ width: 15% }
  .class{ width: 20% }
  .subclass{ width: 20% }
  .group{ width: 20% }
  .manufacturer{ width: 25% }
  .document{ width: 80% }
  .table{ width: 20% }
  .position{ width: 15% }
  .note {
    width: 60%;
    height: 30%;
    align-items: flex-start;
  }
  select {
    background-color: #fff;
    width: calc(100% - 10px);
    height: 100%;
    margin-left: 10px;
    border-radius: 10px;
    border: none;
  }
  .add {
    color: #888;
    font-size: 30px;
    position: absolute;
    right: -35px;
    cursor: pointer;
  }
`