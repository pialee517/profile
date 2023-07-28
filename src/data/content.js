import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BugReportIcon from '@mui/icons-material/BugReport';
import TerminalIcon from '@mui/icons-material/Terminal';
import SendIcon from '@mui/icons-material/Send';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/List';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
// import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GitHubIcon from '@mui/icons-material/GitHub';

//about image
import faceImg from './../assets/images/face.png'

//logo image
import blackLogo from './../assets/images/logo.png'
import whiteLogo from './../assets/images/logo1.png'

//banner image
import bannerImg from './../assets/images/github-mark.png'

//portofolio image - bgimg
import project1 from './../assets/images/disney.png'
import project2 from './../assets/images/noshop.png'
import project3 from './../assets/images/tesla.png'

//image- itemimg(logo)
import project1Logo from './../assets/images/disneylogo.png'
import project2Logo from './../assets/images/noshoplogo.png'
import project3Logo from './../assets/images/teslalogo.png'

//resume pdf file
import resume from './../assets/Resume 2023.pdf'

import React from 'react';

export const content = {
    menu:[
        {
        name:blackLogo,
        path:'home',
        icon:<img src={whiteLogo} width='36px' />
    },
    {
        name:'About Me',
        path:'about',
        icon:<AccountCircleIcon />
    },{
        name:'Qualification',
        path:'timeline',
        icon:<HistoryEduIcon />
    },{
        name:'Projects',
        path:'projects',
        icon:<CodeIcon />
    },{
        name:'Skills',
        path:'skills',
        icon:<DesignServicesIcon />
    },{
        name:'Contact',
        path:'contact',
        icon:<EmailIcon />
    }],
    about:{
        img:faceImg,
        title:'Hi, I\'m Pia',
        subtitle: 'Web Developer',
        content:'Passionately put all the efforts and import solid knowledge throughtout courses at college. Self-studying for extending knowledge.',
    },
    timeline:{
        title:'Qualification',
        subtitle:'My study and work experience',
        items:[{
        category:'study',
        title:'Software Engineering',
        subtitle:'Centennial College',
        content:'2016 August',
        color: 'primary',
        icon:<AutoStoriesIcon />
        },{
            category:'work',
            title:'Application Developer',
            subtitle:'Co-op at CIBC',
            content:'2018 May',
            color: 'success',
            icon:<WorkIcon />
        },{
            category:'work',
            title:'Completion of 8 months',
            subtitle:'Co-op at CIBC',
            content:'2018 December',
            color: 'success',
            icon:<WorkIcon />
        },{
            category:'study',
            title:'Completion of College certificate',
            subtitle:'Centennial College',
            content:'2019 August',
            color: 'primary',
            icon:<AutoStoriesIcon />
        },{
            category:'work',
            title:'Sales Associate',
            subtitle:'Robotix',
            content:'2021 July',
            color: 'warning',
            icon:<WorkIcon />
        },{
            category:'work',
            title:'Termination of Employment',
            subtitle:'Robotix',
            content:'2022 December',
            color: 'warning',
            icon:<WorkIcon />
        },{
            category:'work',
            title:'Job Searching',
            subtitle:'Position - Web Developer',
            content:'Current',
            color: 'grey',
            icon:''
        }]
    },
    projects:{
        title:'Portfolio',
        subtitle:'Enjoy my work',
        items:[{
            bgImg:project1,
            itemImg:project1Logo,
            overly:'rgba(0, 0, 100, 0.5)',
            hoverColor:'rgba(0, 0, 100, 1)',
            content:{
                title:'Local fresh vegetables and fruits provider',
                button:'See My Project',
                path:'https://github.com/pialee517/reactjs-disney-clone'
            }
        },{
            bgImg:project2,
            itemImg:project2Logo,
            overly:'rgba(0, 130, 0, 0.5)',
            hoverColor:'rgba(0, 130, 0, 1)',
            content:{
                title:'Copy netflix with styled and ReactJs',
                button:'See My Project',
                path:'https://github.com/pialee517/noshop'
            }
        },{
            bgImg:project3,
            itemImg:project3Logo,
            overly:'rgba(0, 0, 0, 0.5)',
            hoverColor:'rgba(0, 0, 0, 1)',
            content:{
                title:'Project 3',
                button:'See My Project',
                path:'https://github.com/pialee517/reactjs-tesla-clone'
            }
        }]
    },
    contact:{
        title:'Contact',
        subtitle:'Let\'s connect with',
        img:null,
        message:{
            title:'Leave a Message',
            icon:<SouthEastIcon />,
            content:'Looking forward to hearing from you',
            copy:false
        },
        items:[{
            title:'Phone',
            icon:<PhoneIcon />,
            content:'647-513-1650',
            copy:true,
        },{
            title:'Email',
            icon:<AlternateEmailIcon />,
            content:'pialee517@gmail.com',
            copy:true,
        },{
            title:'Linkedin',
            icon:<LinkedInIcon />,
            content:'https://ca.linkedin.com/in/pialee',
            copy:true,
        }],
    
    },
    skills:{
        title:'Skills',
        subtitle:'My strength',
        categories:[{
            categoryIcon: <DesignServicesIcon fontSize='large' sx={{my:1, mr:2}}/>,
            categoryTitle:'Frontend developer',
            categorySubtitle:'',
            items:[{
                itemName:'HTML',
                itemContent: '86',
            },{
                itemName:'CSS',
                itemContent: '79',
            },{
                itemName:'Javascript',
                itemContent: '89',
            },{
                itemName:'Material Ui',
                itemContent: '92',
            },{
                itemName:'React Js',
                itemContent: '90',
            }]
        },{
            categoryIcon: <CodeIcon fontSize='large' sx={{my:1, mr:2}}/>,
            categoryTitle:'Backend developer',
            categorySubtitle:'',
            items:[{
                itemName:'Java',
                itemContent: '94',
            },{
                itemName:'C#',
                itemContent: '73',
            },{
                itemName:'Python',
                itemContent: '83',
            }]
        },{
            categoryIcon: <DataUsageIcon fontSize='large' sx={{my:1, mr:2}}/>,
            categoryTitle:'Database',
            categorySubtitle:'',
            items:[{
                itemName:'MySql',
                itemContent: '74',
            },{
                itemName:'MongoDB',
                itemContent: '79',
            },{
                itemName:'Azure',
                itemContent: '69',
            }]
        },{
            categoryIcon: <TerminalIcon fontSize='large' sx={{my:1, mr:2}}/>,
            categoryTitle:'Programs',
            categorySubtitle:'',
            items:[{
                itemName:'Selenium',
                itemContent: '84',
            },{
                itemName:'GitHub',
                itemContent: '78',
            },{
                itemName:'Android Studio',
                itemContent: '70',
            },{
                itemName:'Visual Studio',
                itemContent: '90',
            }]
        }]
    },
    banner:{
        title:'Pia\'s github',
        subtitle:'With enhanced skills, various personal projects are updated continuously on github',
        img:bannerImg
    },
    footer:{
        title:'Pia Lee',
        subtitle:'Copyright 2023 by Pia Lee. All Rights Reserved.'
    }, 
}

export const buttons = {
    submit:{
        name:'submit',
        path:'submit',
        icon:''
    },
    clear:{
        name:'Clear',
        path:'/clear',
        icon: <HighlightOffIcon />
    },
    send:{
        name:'Send',
        path:'/send',
        icon: <SendIcon />
    },
    resume:{
        name:'Download My Resume',
        path:resume,
        icon:<DownloadForOfflineIcon />,
        download: 'Resume_PiaLee.pdf'
    },
    banner:{
        name:'Visit My Github',
        path:'https://github.com/pialee517/',
    },
}

export const style = {
    grid:{
        full:12,
        half:6,
        third:4,
        quater:3,
    },
    spacing:{
        large:10,
        medium:5,
        double:4,
        small:3,
        xsmall:2,
        none:0,
    },
    width:{
        full:'100%',
        center:'90%',
        half:'50%',
        quater:'25%',
    }
}