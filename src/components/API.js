"use strict";

const fetchDelete = (url= ``, id="") => {
    let trueUrl = `${url}/${item}`;
    return fetch(trueUrl, {
        method: 'delete'
    })
        .then(res => res.json());
};


export default fetchDelete;

export {
    fetchDelete,
};