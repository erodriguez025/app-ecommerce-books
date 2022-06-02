import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Item from '../../Item/Item'
import { spacing } from '@mui/system';

const gridItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ItemList() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item />
        </Grid>
      </Grid>
    </Box>
  );
}
