import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import Title from './Title'
import {style} from './../../data/content'

const Item = ({item}) => {
  return (
    <Box sx={{
    width:style.width.full, height:style.width.center, aspectRatio: 1 / 0.6,
    borderRadius:'10px', 
    px:style.spacing.medium, py:style.spacing.large,
    display:'flex', alignItems: 'center', flexDirection:'column',
    justifyContent: 'center',
    background:
      `url(${item.itemImg}) no-repeat center center/${style.width.half}, 
      linear-gradient(0deg, ${item.overly}, ${item.overly}), 
      url(${item.bgImg}) no-repeat center center/cover`,
    '& *':{visibility: 'hidden'},
        '&:hover':{background:item.hoverColor}, 
        '&:hover *':{visibility:'visible', transition:'ease-in-out 0.3s'}}}>
        <Typography gutterBottom color='white' sx={{pb:2}}>{item.content.title}</Typography>
        <Button onClick={()=>(window.open(`${item.content.path}`, '_blank'))}
          sx={{color:'white', background:'rgba(50, 180, 250, 1)', 
          borderRadius:style.spacing.large, 
          textTransform:'capitalize', py:1, px:2,
          '&:hover':{background: 'rgba(50, 150, 250, 1)'}
          }}>{item.content.button}</Button>
    </Box>
  )
}

export default Item