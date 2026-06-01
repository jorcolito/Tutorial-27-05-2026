// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { Grid } from '@mui/material';
import HeaderUI from './componens/HeaderUI';
import AlertUI from './componens/AlertUI';

function App() {
  return (
    <Grid container spacing={5} sx={{ justifyContent: "center", alignItems: "center" }}>

      {/* Encabezado */}
      <Grid size={{ xs: 12, md: 12 }}>
        <HeaderUI />
      </Grid>

      {/* Alertas */}
      <Grid
      size={{ xs: 12, md: 12 }}
      sx={{ display: { xs: "block", md: "none" } }}>
        <AlertUI description="No se preveen lluvias" />
      </Grid>

      {/* Selector */}
      <Grid size={{ xs: 12, md: 12 }}>Elemento: Selector</Grid>

      {/* Indicadores */}
      <Grid size={{ xs: 12, md: 12 }}>Elemento: Indicadores</Grid>

      {/* Gráfico */}
      <Grid size={{ xs: 12, md: 12 }}
        sx={{ display: { xs: "none", md: "block" } }} >
        Elemento: Gráfico</Grid>

      {/* Tabla */}
      <Grid size={{ xs: 12, md: 12 }}
        sx={{ display: { xs: "none", md: "block" } }} >
        Elemento: Tabla</Grid>

      {/* Información adicional */}
      <Grid size={{ xs: 12, md: 12 }}>Elemento: Información adicional</Grid>

    </Grid>
  );
}
export default App;

