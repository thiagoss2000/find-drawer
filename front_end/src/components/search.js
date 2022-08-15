import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDrawer } from "../services/api/drawers";
import { AuthContext } from "../temp/context";

export default function SearchContain() {
  const { listDrawers, setListDrawers, setListView, setPage } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    getDrawer().then((res) => {
      console.log(res);
      setListDrawers(res);
    }).catch(e => {
      console.log(e);
      navigate("/");
    })
  }, []);

    return (
      <>
        <div className="barr">
            <h3>Name</h3>
            <h3>Group</h3>
            <h3>Qtd</h3>
        </div>
        <div className="cont">
          {listDrawers.map((e, i) => {
            return (                
              <div onClick={() => {setListView(e); setPage("view")}} key={i} className="info">
                <p>{e.name}</p>|
                <p>{e.groups.name}</p>|
                <p>{e.qtd}</p>
              </div>               
            )
          })}
        </div>
      </> 
    )
}