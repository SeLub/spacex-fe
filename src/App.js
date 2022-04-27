import React from "react";
import Button from '@mui/material/Button';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from './dashboard/budget';
import { TotalCustomers } from './dashboard/total-customers';
import { TasksProgress } from './dashboard/tasks-progress';
import { TotalProfit } from './dashboard/total-profit';
import { TrafficByDevice } from './dashboard/traffic-by-device';
import { LatestOrders } from './dashboard/latest-orders';
import { LatestProducts } from './dashboard/latest-products';
import { Sales } from './dashboard/sales';
import { styled } from '@mui/material/styles';
const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 280
    }
  }));

function App() {
    
    return (
    <>
    <div>
        <h2>Welcome to React App</h2>
        <h3>Date : {new Date().toDateString()}</h3>
    </div>
    <Button variant="contained">Hello World</Button>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
    )
}

export default App
