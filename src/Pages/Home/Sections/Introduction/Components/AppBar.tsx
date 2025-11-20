import { ExpandMore } from '@mui/icons-material';
import { Box, Button, Fade } from '@mui/material'
import { useState } from 'react';

function OverLay({toggle}:{toggle:boolean}) { // fix this later
    return (
        <Fade in={toggle}>
            <Box sx={{
                position:'fixed',
                width:'100vw',
                height:'40vh',
                top:0,
                backgroundColor:'primary.light',
            }}>

            </Box>
        </Fade>
    )
}

function LeadingLogo() {
    const [toggle,setToggle] = useState(false);
    const handleToggle = () => setToggle(prev => !prev)

    return(
        <>
        <OverLay toggle={toggle}/>
        <Button 
        variant='text' 
        sx={{ 
            color: 'primary.contrastText', 
            width:'15vw', 
            '&:hover':{
                color:'primary.main',
                backgroundColor:'transparent'
            }
        }} 
        endIcon={<ExpandMore/>}
        onClick={handleToggle}
        >
            My Logo Here
        </Button>
        </>
    )
}

function InquireButton() {
    return <Button 
    variant='contained' 
    sx={{
        backgroundColor: 'primary.main',
        width:'15vw'
    }}>
        Click Me!
    </Button>;
}

function AppButton({content, link}:{content:string,link:string}){
    return <Button 
    variant='text' 
    href={link}
    sx={{
        color:"primary.contrastText",
        '&:hover':{
            color:'primary.main',
            backgroundColor:'transparent'
        }
    }}>
        {content}
    </Button>
}

function AppBar(){
    return (
        <Box sx={{
            position:'fixed',
            width:'100%',
            display:'flex',
            backgroundColor:'rgb(0,0,0,0.1)',
            boxShadow:'5',
            justifyContent:'space-evenly',
            alignItems:'center',
            padding:1
        }}>

            <LeadingLogo/>
            <AppButton content='HOME' link=''/>
            <AppButton content='SERVICES' link=''/>
            <AppButton content='SOCIALS' link=''/>
            <InquireButton/>
        </Box>

    )
}

export default AppBar;