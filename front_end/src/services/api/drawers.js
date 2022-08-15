import api from "./api.js"

export function create (name) {
    return api.post('/drawer', 
        name
    , {authorization: JSON.parse(localStorage.getItem("tokenUser"))});
}

export function newOrganizer (route, name) {
    return api.post(`/${route}`, 
        name
    , {authorization: JSON.parse(localStorage.getItem("tokenUser"))});
}

export function getOrganizer () {
    return api.get(`/table`, {
    }, {authorization: JSON.parse(localStorage.getItem("tokenUser"))});
}

export function getDrawer () {
    return api.get(`/drawer`, {
    }, {authorization: JSON.parse(localStorage.getItem("tokenUser"))});
}

export function getFewItens () {
    return api.get(`/few`, {
    }, {authorization: JSON.parse(localStorage.getItem("tokenUser"))});
}

export function updateDrawer (drawerId, data) {
    return api.put(`/drawer`, 
        data
    , {authorization: JSON.parse(localStorage.getItem("tokenUser"))}, {id: drawerId});
}

export function getDrawerGroup (groupId) {
    return api.get(`/drawer/group`, {
    }, {authorization: JSON.parse(localStorage.getItem("tokenUser"))}, {id: groupId});
}

export function getDrawerTable (tableId) {
    return api.get(`/drawer/table`, {
    }, {authorization: JSON.parse(localStorage.getItem("tokenUser"))}, {id: tableId});
}