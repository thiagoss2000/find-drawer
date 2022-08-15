import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDrawerTable, getOrganizer } from "../services/api/drawers";
import { AuthContext } from "../temp/context";

export default function ViewTable() {
    const { setListDrawers, setDataList, dataList, setPage } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        getOrganizer().then((res) => {
            setDataList(res);
        }).catch(() => {
        navigate("/");
        })
    }, []);

    function updateListDrawers(tableId) {
        getDrawerTable(tableId).then((res) => {
            setListDrawers(res);
        }).catch(e => {
            console.log(e);
            navigate("/");
        })
    }

    return (
      <>
        <div className="barr">
            <h3>Tables</h3>
        </div>
        <div className="cont">
          {dataList.table.map((e, i) => {
            return (                
              <div onClick={() => {updateListDrawers(e.id); setPage("search")}} key={i} className="info">
                <p>{e.name}</p>
              </div>               
            )
          })}
        </div>
      </> 
    )
}