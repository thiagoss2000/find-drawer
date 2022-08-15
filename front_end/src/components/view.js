import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../temp/context";
import { MdAddCircleOutline } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { updateDrawer } from "../services/api/drawers";

export default function ViewIten() {

    const { listView, setPage, reload, setReload } = useContext(AuthContext);
    const [editQty, setEditQty] = useState(false);

    function sendData() {
        updateDrawer(listView.id, data).then(() => {
            setEditQty(false);
            setReload(!reload);
            console.log("created");
        }).catch(e => {
            console.log(e);
        })
    }

    const [data, setData] = useState({
        position: listView.position,
        document: listView.document,
        note: listView.note,
        qtd: listView.qtd
    });
    
    function updateData(event) {
        const { name, value } = event.target;
        setData((prevState) => ({ ...prevState, [name]: parseInt(value) }));
    }

    return (
      <>
        <div className="barr">
            <h3>New item</h3>
        </div>
        <View>
            <div className="code"><h3>Code: {listView.code}</h3></div>
            <div className="name"><h3>Product name: {listView.name}</h3></div>
            <div className="type"><h3>Type: {listView.types.name}</h3></div>
            <div className="unit"><h3>Unit: {listView.units.name}</h3></div>
            <div className="value"><h3>Value: {listView.value}</h3></div>
            <div className="cost"><h3>Cost: {listView.cost}</h3></div>
            <div className="class"><h3>Class: {listView.classes.name}</h3></div>
            <div className="subclass"><h3>Subclass: {listView.subclasses.name}</h3></div>
            <div className="group"><h3>Group: {listView.groups.name}</h3></div>
            <div className="manufacturer"><h3>Manufacturer: {listView.manufacturer}</h3></div>
            <div className="table"><h3>Table: {listView.tables.name}</h3></div>
            <div className="position"><h3>Position: {listView.position}</h3></div>
            <div className="document"><h3>Document: {listView.document}</h3></div>
            <div className="note"><h3>Note: {listView.note}</h3></div>
            <div className="qty">
                {editQty ? 
                <>
                    <input type="number" placeholder="Qty?" name={"qtd"} value={data.qtd} onChange={updateData}/>
                    <GiConfirmed onClick={() => sendData()} className="add"/>
                </> 
                : <>
                    <h3>Qty: {data.qtd}</h3> <MdAddCircleOutline onClick={() => setEditQty(true)} className="add"/>
                </> 
                }
            </div>
            <button className="return" onClick={() => setPage("search")}>Return</button>
            <button className="update" onClick={() => setPage("search")}>To edit</button>
        </View>
      </> 
    )
}

const View = styled.div`
    border-radius: 10px;
    margin: auto;
    width: 99%;
    height: 95%;
    background-color: #333;// var(--theme);
    //position: relative;
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
    h3 {
        width: calc(100% - 10px) !important;
        height: max-content;
        word-break: break-all;
        text-align: start;
    }
    input {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: none;
        font-size: 110%;
    }
    div {
        background-color: white;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-inline: 1%;
        height: 6%;
        border-radius: 10px;
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
        width: 50%;
        height: 30%;
        align-items: flex-start;
        padding-block: 5px;
        overflow: auto;
    }
    .qty {
        width: 10%;
        height: 10%;
    }
    .add {
        color: #888;
        font-size: 30px;
        position: absolute;
        right: -35px;
        cursor: pointer;
    }
`