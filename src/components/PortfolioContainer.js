import * as React from 'react';
import Paper from '@mui/material/Paper';
import '../assets/css/PortfolioContainer.css'
import Intro from './Intro';
import ProjectHeader from './ProjectHeader';
import ProjectsContainer from './ProjectsContainer';


export default function PortfolioContainer() {
  return (
    <Paper className='port-container' elevation={3} >
        <Intro />
        <ProjectHeader />
        < ProjectsContainer />
    </Paper>
    
  )
}
