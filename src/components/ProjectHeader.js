import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ProjectHeader() {
  return (
    <Card >
    <CardContent>
      <Typography textAlign="center" variant="h3" component="div">
        Projects
      </Typography>
    </CardContent>
  </Card>
  )
}
