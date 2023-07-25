import  aysa  from "../../assets/img/aysa_pagos.png"
import movistar from "../../assets/img/movistar_pagos.png"
import flow from "../../assets/img/flow_pagos.png"
import netflix from "../../assets/img/netflix_pagos.png"

const data = [
    {
        id:1,
        empresa:"Movistar",
        monto:"-$3.500",
        fecha:"Ayer",
        img: movistar,
        ruta: "/empresa"
    },
    {
        id:2,
        empresa:"Flow",
        monto:"-$7.500",
        fecha:"Ayer",
        img: flow,
        ruta: "/empresa"
    },
    {
        id:3,
        empresa:"Aysa",
        monto:"-$2.500",
        fecha:"Ayer",
        img: aysa,
        ruta: "/empresa"
    },
    {
        id:4,
        empresa:"Netflix",
        monto:"-$1.500",
        fecha:"Ayer",
        img: netflix,
        ruta: "/empresa"
    }
]


export {data}