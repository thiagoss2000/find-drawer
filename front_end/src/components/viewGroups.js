import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDrawerGroup, getOrganizer } from "../services/api/drawers";
import { AuthContext } from "../temp/context";

export default function ViewGroup() {
    const { setListDrawers, setDataList, dataList, setPage } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        getOrganizer().then((res) => {
            setDataList(res);
        }).catch(() => {
        navigate("/");
        })
    }, []);

    function updateListDrawers(groupId) {
        getDrawerGroup(groupId).then((res) => {
            setListDrawers(res);
        }).catch(e => {
            console.log(e);
            navigate("/");
        })
    }

    return (
      <>
        <div className="barr">
            <h3>Group</h3>
        </div>
        <div className="cont">
          {dataList.group.map((e, i) => {
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