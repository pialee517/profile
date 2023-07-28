import React from 'react'
//material ui
import { Box, Typography } from '@mui/material'
//content
import { style } from '../../data/content'

const Title = ({
    title, titleSize='h3', titleColor='black',
    subtitle, subtitleSize='h6', subtitleColor='gray',
    txtAlign='left', bgColor='inherit',
    pTop=style.spacing.large, pBottom=style.spacing.medium
  }) => {
  return (
      <Box pt={pTop} pb={pBottom} sx={{backgroundColor:bgColor}}>
          {title && <Typography variant={titleSize} textAlign={txtAlign} fontWeight='bold' color={titleColor}>{title}</Typography>}
          {subtitle && <Typography gutterBottom variant={subtitleSize} textAlign={txtAlign} color={subtitleColor}>{subtitle}</Typography>}
      </Box>
  )
}

export default Title