import {  Box } from "@mui/material";
import Title from './Components/Title'
import Body from "./Components/Body";
import AppBar from "./Components/AppBar"

function Introduction(){
    return (
        <>
        
            
            <AppBar/>
            <Box sx={{
                display:'flex',
                alignItems:'center', 
                justifyContent:'center',
                flexDirection:'column', 
                height:'100vh',
                width:'100%',
                backgroundColor:'primary.dark',
                gap:2,
                textAlign:'center',
                color:'primary.contrastText'
            }}>    
            
                <Title/>
                <Body/>
                
            </Box>
        
        </>
    )
}

export default Introduction;

