import { AppBar, Box, Button, ListItem, Typography } from '@mui/material'
import React from 'react'
import { buttons, content, style } from '../../data/content'
import Title from './Title'
import { useNavigate, useOutletContext } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const footer = content.footer
  const button = buttons.source
  return (
    <Box sx={{background:'linear-gradient(to top, rgba(25, 118, 210, 1) 0% 50%, transparent 50% 100%)', py:style.spacing.medium}}>
      <Box
        sx={{margin:'auto', py:style.spacing.small, px:style.spacing.medium, boxShadow:'0px 5px 8px rgba(0, 0, 0, 0.2)',
        width:style.width.center, borderRadius:'10px', background:'rgba(20, 80, 150, 1)'}}>
          <Title
            title={footer.title} titleSize='h6' titleColor='white' txtAlign='right'
            subtitle={footer.subtitle} subtitleSize='body2' subtitleColor='white' 
            pTop={0} pBottom={0}/>
      </Box>
    </Box>
  )
}

export default Footer