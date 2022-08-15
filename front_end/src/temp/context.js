import React,  { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [reload, setReload] = useState(false);
    const [dataList, setDataList] = useState({
        type: [],
        unit: [],
        class: [],
        subclass: [],
        group: [],
        table: [],
      });
      const [page, setPage] = useState("search");
      const [fewItens, setFewItens] = useState([]);
      const [listDrawers, setListDrawers] = useState([]);
      const [listView, setListView] = useState({});

    return (
        <AuthContext.Provider value={{
            reload, setReload,
            dataList, setDataList,
            page, setPage,
            fewItens, setFewItens,
            listDrawers, setListDrawers,
            listView, setListView
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}