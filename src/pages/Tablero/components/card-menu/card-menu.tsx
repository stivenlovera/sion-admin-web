import React, { useState } from 'react'
import CardMenuResumen, { CardMenuResumenProps } from '../../../../components/card-menu-resumen/card-menu-resumen'
const intialState: CardMenuResumenProps[] = [
    {

        color: 'default',
        descripcion: 'Freelancer activos',
        estado: false,
        icon: 'freelancer',
        route: '',
        valor: '182'
    },
    {

        color: 'default',
        descripcion: 'Ventas personales',
        estado: false,
        icon: 'personal',
        route: '',
        valor: '456,985.00 $us | 196 v.'
    },
    {

        color: 'default',
        descripcion: 'Ventas grupo',
        estado: false,
        icon: 'grupo',
        route: '',
        valor: ''
    },
    {

        color: 'default',
        descripcion: 'Ventas residual',
        estado: false,
        icon: 'residual',
        route: '',
        valor: ''
    }
];

const CardMenu = () => {
    const [card, setCard] = useState<CardMenuResumenProps[]>(intialState)
    return (
        <>
            {card.map((tarjeta, i) => {
                return (<CardMenuResumen
                    key={i}
                    icon={tarjeta.icon}
                    color={tarjeta.color}
                    descripcion={tarjeta.descripcion}
                    route={tarjeta.route}
                    valor={tarjeta.valor}
                    estado={false}
                />)
            })}
        </>
    )
}

export default CardMenu
