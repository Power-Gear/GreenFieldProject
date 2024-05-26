import React from 'react';
import { Grid} from '@mui/material';
import Navbar from './Navbarr';
import FitnessEquipment from './FitnessEquipment';
import SportsWear from './SportsWear';
import Nutrition from './Nutrition';

function Categories() {
 

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FitnessEquipment  />
            
          </Grid>
          <Grid item xs={12}>
            <SportsWear />
            
          </Grid>
          <Grid item xs={12}>
            <Nutrition  />
            
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Categories;
