import React from 'react'

//material ui
import { Box, Button, Typography } from '@mui/material'

//content
import { style, buttons, content } from '../../data/content'
import { useOutletContext } from 'react-router-dom'

const Banner = () => {
  const refBanner = useOutletContext()[4]
  const banner = content.banner
  const button = buttons.banner
  return (
    <Box ref={refBanner} elevation={0} sx={{p:style.spacing.small,
    margin:'auto', width:{xs: style.width.center, md:style.width.half},
    border:'1px rgba(25, 118, 210, 1) solid', maxWidth: '500px',
    borderRadius: '15px', textAlign:'justify',
    background: ` url(${banner.img}) no-repeat bottom 20px right 20px/${style.width.quater}, rgba(25, 118, 210, 1)`}}>
        <Typography gutterBottom variant='h6' fontWeight='bold'>{banner.title}</Typography>
        <Typography gutterBottom variant='body1' color='white' sx={{pb:style.spacing.xsmall}}>{banner.subtitle}</Typography>
        <Button startIcon={button.icon} onClick={()=>(window.open(`${button.path}`, '_blank'))}
          sx={{textTransform:'capitalize', py:1, px:2,
          background:'rgba(255, 255, 255, 1)', 
          '&:hover':{background:'rgba(20, 80, 150, 1)', color:'rgba(255, 255, 255, 1)'}}}>
          {button.name}
        </Button>
    </Box>
  )
}

export default Banner