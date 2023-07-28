import React from 'react'

//material ui
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useMediaQuery, useTheme } from '@mui/material'

//component
import Title from './Title'

//content
import { content, style, buttons } from '../../data/content'
import { Directions } from '@mui/icons-material'
import { useOutletContext } from 'react-router-dom'


const About = () => {
  const theme = useTheme()
  const xsmall = useMediaQuery(theme.breakpoints.only('xs'))
  const about = content.about
  const refAbout = useOutletContext()[0]

  return (
    <Grid ref={refAbout} container rowGap={5} direction="row-reverse"
        sx={{minHeight: '350px', justifyContent:'center', 
        pt:{xs:style.spacing.medium, sm:style.spacing.large},
        px:{sm:style.spacing.medium}, 
        width:{xs:style.width.full, 
        md:style.width.center}, margin:'auto'}}>
        <Grid item xs={style.grid.full} md={style.grid.half}>
          <Paper elevation={0}
              sx={{ml:'auto', mr:{xs:'auto', md:0}, borderRadius:'50%',
              aspectRatio: 1 / 1,
              minWidth:'250px', minHeight: '250px',
              width:{xs:'50vw', sm:'35vw', md:'25vw'},
              height:{xs:'50vw', sm:'35vw', md:'25vw'},
              maxWidth:'500px',maxHeight:'500px',
              background:`rgba(25, 118, 210, 1) no-repeat url(${about.img}) center top/cover` }}>
          </Paper>
        </Grid>
        <Grid item elevation={0} xs={style.grid.full} md={style.grid.half}
          sx={{background:'transparent', px:style.spacing.small,
            alignSelf:'center', textAlign:'justify'}}>
          <Title title={about.title} subtitle={about.subtitle} pTop={0} pBottom={0}/>
          <Typography textAlign='left' pb={style.spacing.small} gutterBottom variant='body1' color='gray'>{about.content}</Typography>
          <Button variant='contained' endIcon={buttons.resume.icon} download={buttons.resume.download} href={buttons.resume.path} sx={{py:2}}>
            {buttons.resume.name}
          </Button>
        </Grid>
    </Grid> 
  )
}

export default About