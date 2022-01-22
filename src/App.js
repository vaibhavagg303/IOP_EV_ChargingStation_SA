import React,{useEffect,useState} from 'react';

import {CssBaseline,  Card , Typography, Grid } from '@material-ui/core';

import { getPlacesData } from './api'; 
const App = () => {
    const [places,setPlaces] = useState([]);
    useEffect(() => {
        getPlacesData()
        .then((data) => {
            console.log(data.us_stations);
            const st = data.us_stations.map((station,i) => station)
            setPlaces(st.filter((station) => station.city));
             console.log({places});
        })
    },[])
    return(
        <>
        <CssBaseline />
        <Grid container spacing={3} style={{ width: '100%'}}>
       {
        places.length ? (places.map((station,i) => (
            <Grid item xs={12} md={3} key={station.station_id} >
            <Card elevation={6} key={station.station_id}>
            <Typography variant="h4">{station.station_name}</Typography>
              <Typography variant="h5">{station.station_id}</Typography>
              <Typography variant="subtitle1">{station.city}</Typography>
              <Typography variant="subtitle2">{station.street_address}</Typography>
              
                  {/* <CardActions></CardActions> */}
        </Card>
        </Grid>
        ))) : (<Typography variant="h4">Nothing to Show</Typography>)
       } 
        </Grid>
        </>
        )
}

export default App;