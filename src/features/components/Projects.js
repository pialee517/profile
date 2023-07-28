import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import Title from './Title';
import { content } from '../../data/content';
import { style } from '../../data/content';
import Item from './Item';
import { useOutletContext } from 'react-router-dom';

const Projects = () => {
    const projects = content.projects
    const items = projects.items
    const refProjects = useOutletContext()[2]
  return (
        <Box ref={refProjects}>
            <Title 
                title={projects.title} titleColor='white'
                subtitle={projects.subtitle} subtitleColor='white'
                txtAlign='center'
                bgColor='rgba(25, 118, 210, 1)'/>
                <Grid container spacing={{xs:style.spacing.small, xl:style.spacing.large}} sx={{justifyContent:'space-around', 
                    px:{xs:style.spacing.medium, sm:style.spacing.small, lg:style.spacing.large}, 
                    background: {xs:'linear-gradient(to bottom, rgba(25, 118, 210, 1) 0px 100px, transparent 100px 100%)', xl:'linear-gradient(to bottom, rgba(25, 118, 210, 1) 0 50%, transparent 50% 100%)'}}}>
                {items.map((item, idx)=>(
                    <Grid key={`${item.content.button}_${idx}`} item xs={style.grid.full} md={style.grid.half} lg={style.grid.third}>
                        <Item item={item} />
                    </Grid>))}
                </Grid>
        </Box>
  )
}

export default Projects