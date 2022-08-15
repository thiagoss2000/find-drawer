import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../temp/context";

export default function Menu() {

  const { fewItens } = useContext(AuthContext);

  return (
    <Menubar>
      <Remain>
        <div className="barrRemain">
          <h3>Few items</h3>
        </div>
        {fewItens.map((e, i) => {
          return(
            <div className="remains" key={i}>
              <p>{e.name}<span>Qty: {e.qtd}</span></p>
            </div>
          )
        })}
      </Remain>
      <TopItens>
        <div className="barrTopItens">
          <h3>Top items</h3>
        </div>
        <h2>Feature unavailable!</h2>
      </TopItens>
    </Menubar>
  )
}

const Menubar = styled.div`
  width: 20%;
  height: 100%;
  background-color: var(--theme);
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    width: 100%;
    text-align: center;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1%;
  } 
`

const Remain = styled.div`
  width: 80%;
  height: 40%;
  background-color: var(--theme-black);
  border-radius: 10px;
  margin-top: 20%;
  .remains {
    width: 80%;
    margin-top: 2px;
    background-color: var(--theme-back);;
    border: none;
    border-radius: 5px;
  }
  p {
    width: 100%;
    position: relative;
  }
  span {
    position: absolute;
    right: 0;
  }
`
const TopItens = styled.div`
  width: 80%;
  height: 40%;
  background-color: var(--theme-black);
  border-radius: 10px;
  margin-top: 10%;
  h2{
    margin-top: 40%;
    font-size: 120%;
    text-align: center;
  }
`