import Timeline from '@mui/lab/Timeline';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { TimelineOutlined } from '@mui/icons-material';

import {content, style} from './../../data/content'

import TitleItem from './Title';
import { useOutletContext } from 'react-router-dom';


const TimeLine = () => {
    const theme = useTheme()
    const timeline = content.timeline
    const items = content.timeline.items
    const refTimeLine = useOutletContext()[1]
    const xsmall = useMediaQuery(theme.breakpoints.only('xs'))
  return (
    <Box ref={refTimeLine}>
        <TitleItem title={timeline.title} subtitle={timeline.subtitle} txtAlign='center'/>
        {xsmall ?
        <Timeline sx={{[`& .${timelineItemClasses.root}:before`]: {
            flex: 0, px: style.spacing.small}, pb:style.spacing.medium}}>
            {items.map((item, idx)=>(
            <TimelineItem key={`${item.title}_${idx}`}>
                <TimelineSeparator sx={{px:((items.length-1)===idx)? '12px':'initial'}} >
                    <TimelineDot color={item.color}>
                        {item.icon}
                    </TimelineDot>
                    {((items.length-1)===idx) ? null : <TimelineConnector sx={{py:4}} />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: 0, px: 2 }}>
                    <Typography variant="h6" fontWeight='bold' component="span">
                        {item.title}
                    </Typography>
                    <Typography gutterBottom variant="body1" >{item.subtitle}</Typography>
                    <Typography sx={{align:"right" }}
                        variant="body2"
                        color="text.secondary">
                        {item.content}
                    </Typography> 
                </TimelineContent>
            </TimelineItem>
            ))}
        </Timeline>
        :
        <Timeline sx={{pb:style.spacing.medium}}>
            {items.map((item, idx)=>(
            <TimelineItem key={`${item.title}_${idx}`}>
                {(item.category=='study') ?
                <TimelineOppositeContent sx={{ py: 0, px: 2 }}>
                    <Typography variant="h6" fontWeight='bold' component="span">
                        {item.title}
                    </Typography>
                    <Typography gutterBottom variant="body1" >{item.subtitle}</Typography>
                    <Typography sx={{align:"right" }}
                        variant="body2"
                        color="text.secondary">
                        {item.content}
                    </Typography> 
                </TimelineOppositeContent > : <TimelineOppositeContent sx={{ py: 0, px: 2 }}></TimelineOppositeContent>}
                    <TimelineSeparator>
                        <TimelineDot color={item.color}>
                            {item.icon}
                        </TimelineDot>
                        {((items.length-1)===idx) ? null : <TimelineConnector sx={{py:4}} />}
                    </TimelineSeparator>
                {!(item.category==='study') ?
                <TimelineContent sx={{ py: 0, px: 2 }}>
                    <Typography variant="h6" fontWeight='bold' component="span">
                        {item.title}
                    </Typography>
                    <Typography gutterBottom variant="body1" >{item.subtitle}</Typography>
                    <Typography sx={{align:"right" }}
                        variant="body2"
                        color="text.secondary">
                        {item.content}
                    </Typography> 
                </TimelineContent> : <TimelineContent sx={{ py: 0, px: 2 }}></TimelineContent>}
            </TimelineItem>
            ))}
        </Timeline>}
    </Box>
  )
}

export default TimeLine