import React from 'react'
import { useOutletContext } from 'react-router-dom';
//component
import TitleItem from './Title'
//material ui
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, LinearProgress, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//content
import {content, style} from './../../data/content'



const Skills = () => {
    const skills = content.skills
    const categories = content.skills.categories
    const refSkills = useOutletContext()[3]
    return (
        <Box ref={refSkills} sx={{width:{xs:style.width.full, md:style.width.center}, margin:'auto', pb:style.spacing.large}}>
            <TitleItem title={skills.title} subtitle={skills.subtitle} txtAlign='center' />
            <Grid container px={1} rowGap={style.spacing.xsmall} 
                sx={{maxWidth:'2000px', backgroundColor:'transparent', justifyContent:'space-between', margin:'auto'}}>
                {categories.map((category, idx)=>(
                <Grid item xs={style.grid.full} md={style.grid.half} key={`${category.categoryTitle}_${idx}`}>
                <Accordion elevation={0} sx={{backgroundColor:'transparent'}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box display='flex' flexDirection='row'>
                            {category.categoryIcon}
                            <div>
                                <Typography fontWeight='bold'>{category.categoryTitle}</Typography>
                                <Typography textAlign='left' variant='subtitle2' color='gray'>
                                    {category.categoryTitle}
                                </Typography>
                            </div>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{pl:7}} >
                        {(category.items).map((item, idx)=>(<>
                            <Box py={1} key={`${item.itemName}_${idx}`}
                                display='flex'
                                justifyContent='space-between'>
                                <Typography>{item.itemName}</Typography>
                                <Typography>{item.itemContent}</Typography>
                            </Box>
                            <LinearProgress
                            variant="determinate" 
                            value={Number(item.itemContent)} sx={{pb:1, mb:2}}/></>))}
                    </AccordionDetails>
                </Accordion>
                </Grid>))}
            </Grid>
        </Box>
    )
}

export default Skills