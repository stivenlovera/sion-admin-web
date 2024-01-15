import { Box, Card, CardContent, Paper } from '@mui/material'
import React from 'react'
import { ChartLineHorizontal } from '../../../../components/chart/chart-line-horizontal'
import { optionChartLinealVentaPersonal } from '../../../../components/chart/optionChartVentaPersonal'
const initial = [
  [
    "Cantidad",
    "Nombre completo",
    "Precio",
    "Fecha",
    "Dia"
  ],
  [
    "1",
    "MEDINA VEQUE ELIZABETH ALEJANDRA",
    "0.00",
    "08/12/2023",
    "08"
  ],
  [
    "1",
    "CRUZ TORREZ TANIA",
    "0.00",
    "09/12/2023",
    "09"
  ],
  [
    "1",
    "JIMENEZ ALVARADO FABIOLA ALEJANDRA",
    "0.00",
    "20/12/2023",
    "20"
  ],
  [
    "1",
    "JIMENEZ ALVARADO FABIOLA ALEJANDRA",
    "0.00",
    "21/12/2023",
    "21"
  ],
  [
    "2",
    "SURUBY YUJO DAMARYS ",
    "0.00",
    "22/12/2023",
    "22"
  ],
  [
    "1",
    "FERNANDEZ QUISPE ROBERTO ",
    "0.00",
    "26/12/2023",
    "26"
  ]
]
const VentasMesLineal = () => {
  return (
    <Card sx={{ minWidth: '100%', m: 0 }} >
      <React.Fragment>
        <CardContent>
          <ChartLineHorizontal
            titulo={'titulo'}
            tituloX={'tituloX'}
            tituloY={'tituloY'}
            data={initial}
            showLoading={false}
            option={optionChartLinealVentaPersonal({ graficoLineal: initial, titulo: 'titulo', tituloX: 'tituloX', tituloY: 'tituloY' })} />
        </CardContent>
      </React.Fragment>
    </Card>
  )
}

export default VentasMesLineal
