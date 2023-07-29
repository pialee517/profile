import React from 'react'

//material ui
import { Box, Slide, useMediaQuery, useScrollTrigger, useTheme } from '@mui/material'
import { AppBar, List, ListItem, ListItemText, Toolbar } from '@mui/material'

import { NavLink, useNavigate } from 'react-router-dom';

//content
import {content, style} from './../../data/content'

const Nav = ({scrollMethod}) => {
    const menu = content.menu
    const theme = useTheme()
    const xsmall = useMediaQuery(theme.breakpoints.down('sm'))
    const navigate = useNavigate()
    const trigger = useScrollTrigger();
  return (
    <Slide appear={true} direction="down" in={!trigger}>
    <AppBar elevation={0} sx={{margin:'auto', position:'sticky', top:0, zIndex:999}}>
        <Toolbar sx={{justifyContent:'space-between', 
            width:{xs:style.width.full, md:style.width.center}, margin:'auto'}}>
            <Box sx={{mx:style.spacing.small, display:{xs:'none', sm:'block'}, 
                height:'40px', width:'40px', cursor:'pointer', 
                background:`url(${menu[0].name}) no-repeat center center/contain`}} 
                onClick={()=>{navigate('/profile')}}/>
            <List sx={{width:{xs:style.width.full, sm:'initial'}, display:'flex', flexDirection:'row', justifyContent:'space-between',px:(xsmall) ? 0: 1, alignItems:'center'}}>
                {menu.map((item, idx)=>(
                <ListItem key={idx} sx={{display:(xsmall || !(idx===0))? 'list-item':'none', width: (xsmall)? '50px': 'inherit', textAlign:'center'}}>
                {xsmall ? 
                    <NavLink sx={{mr:0, px: 1, color:'white'}} 
                        onClick={(e)=>{e.preventDefault(); scrollMethod(item.path)}}>{item.icon}</NavLink>
                   :
                    <NavLink sx={{p:0}}>
                        <ListItemText 
                            sx={{color:'black', textTransform:'capitalize', p:0, whiteSpace:'nowrap'}} 
                            onClick={(e)=>{e.preventDefault(); 
                            scrollMethod(item.path)}}>{item.name}</ListItemText>
                    </NavLink>
                    }
                </ListItem>))}
            </List>
        </Toolbar>
    </AppBar>
    </Slide>
  )
}

export default Nav