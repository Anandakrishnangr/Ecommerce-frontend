import { Grid } from '@mui/joy'
import { Box, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'

export const Registration = () => {
  return (
    <>
 <Grid
      container
      sx={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        padding: "8px 16px",
        backgroundColor: "white",
        zIndex: 1000,
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src="/amazone.png"
        alt="Amazon Logo"
        sx={{
          height: "100px",
          width: "auto",
          borderRadius: "4px",
          paddingBottom:"8px",
          boxShadow: "none",
          cursor: "pointer",
          transition: "opacity 0.3s ease-in-out",
          '&:hover': {
            opacity: 0.8,
          },
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="h6" sx={{ fontSize: "20px" }}>
          Seller Central
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "14px", textAlign: "right", marginTop: "-4px" }} 
        >
          India
        </Typography>
      </Box>
      <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined"><CardHeader>
      <Typography variant='h6'>
        Create 
      </Typography>
        </CardHeader> <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">

      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>

    </CardActions></Card>
    </Box>
    </Grid>
   
    </>
  )
}
