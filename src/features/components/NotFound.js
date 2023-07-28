import { Box, Button, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { style } from '../../data/content'

const NotFound = () => {
    const theme = useTheme()
    const navigate = useNavigate()
  return (
    <Box sx={{width:style.width.full, height:'100vh', p:style.spacing.large}}>
        <Typography gutterBottom variant='h3' p={style.spacing.medium}>
            Page not Found
        </Typography>
        <Button variant='contained' onClick={()=>{navigate('/')}}>Back to the home page</Button>
    </Box>
  )
}

export default NotFound