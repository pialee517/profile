import React, { useRef, useState } from 'react'

//material ui
import { Box, Button, Card, CardHeader, Grid, TextField, Typography } from '@mui/material'
//component
import Title from './Title'
//toast for msg
import { Toaster, toast } from 'sonner';
//content
import {content, style, buttons} from './../../data/content'
import { useOutletContext } from 'react-router-dom';

const Contact = () => {
  const contact = content.contact
  const items = content.contact.items
  const refContact = useOutletContext()[5]
  // const refMsg = useRef()
  // const [errorMsg, setErrorMsg] = useState(false)
  // function handleMsg(e) {
  //   e.preventDefault()
  //   let msg = refMsg.current.value
  //   console.log(msg)
  //   if(msg){
  //     toast.promise(() => new Promise((resolve) => setTimeout(resolve, 1500)), {
  //       loading: 'Loading',
  //       success: 'Thank you for your message',
  //       error: 'Please try again!',
  //     });
  //     setErrorMsg(false)
  //     refMsg.current.value = null
  //   }else{
  //     setErrorMsg(true)
  //   }
  //   console.log(errorMsg)
  // }
  return (
    <Box ref={refContact}>
      <Toaster position="bottom-center" richColors closeButton />
      <Title title={contact.title} subtitle={contact.subtitle} txtAlign='center' />
      <Grid container 
        sx={{width:{maxWidth:'2000px', xs:style.width.full, sm:style.width.center},
        margin:'auto', p:style.spacing.xsmall, pb:style.spacing.medium,
        justifyContent:{xs:'space-around', md:'center'}}}>
      {/* <Grid item xs={style.grid.full} md={style.grid.half}> */}
        <Card elevation={0} 
          sx={{
            display:'flex', flexDirection:{xs:'column', md:'row'}, //without msg
            background:'inherit', margin:'auto', width:style.width.center}}>
          {items.map((item, idx)=>(
          <CardHeader
            key={`${item.title}}_${idx}`} 
            sx={{textAlign:'left',
            width:style.width.full, 
            m:{xs:'auto', sm:'0 0 0 auto'}}}
            avatar={item.icon}
            title={<Typography variant='h6' fontWeight='bold'>{item.title}</Typography>}
            subheader={<Typography component='span' variant='subtitle2' title='Click to Copy' 
              sx={{color: 'gray', '&:hover':{color:'rgba(25, 118, 210, 1)'}, cursor:'pointer'}} onClick={()=>navigator.clipboard.writeText(item.content)}>{item.content}</Typography>} />))}
        </Card>
      {/* </Grid> */}
      {/* <Grid item xs={style.grid.full} md={style.grid.half}>
        <Card elevation={0}
          sx={{background:'inherit', margin:'auto', width:style.width.center}}>
          <CardHeader sx={{textAlign:'left'}}
            avatar={contact.message.icon}
            title={<Typography variant='h6' fontWeight='bold'>{contact.message.title}</Typography>}
            subheader={
            <Box item='true' component="form" onSubmit={(e)=>{handleMsg(e)}}
              noValidate autoComplete="off"
              sx={{pt:1, display:'flex', flexDirection:'column', rowGap:style.spacing.xsmall}}>
              <TextField 
                inputRef={refMsg} variant='filled' label={(errorMsg) ? "No Message Is Also A Message" : "Message"} 
                error={errorMsg} multiline rows={5} id='message'
                sx={{background:'rgba(25, 118, 210, 0.1)', borderRadius:'5px'}} />
              <Button startIcon={buttons.submit.icon} 
                ml='auto' type='submit' variant="outlined">{buttons.submit.name}
              </Button>
            </Box>} />
        </Card>
      </Grid> */}
    </Grid>     
  </Box>
  )
}

export default Contact