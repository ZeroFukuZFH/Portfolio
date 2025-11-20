import {  ArrowForward } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"

function Body(){
    return(
        <>
        <Box sx={{
            padding:2,
            display:'flex',
            flexDirection:'column',
            gap:2
        }}>
            <Typography sx={{
                fontSize:'60px',
                fontWeight:'bold',
            }}>
                Projects
            </Typography>

            <Typography sx={{
                fontSize:'30px',
            }}>
                some project desc
            </Typography>
            <Button 
            variant="contained"
            endIcon={<ArrowForward/>}
            sx={{
                backgroundColor:'primary.dark',
                color:'primary.contrastText',
                padding:2
            }}> 
                GO TO PROJECTS 
            </Button>
        </Box>
        </>
    )
}

function Projects(){
    return(
        <>
        <section>
            <Box sx={{
                backgroundColor:'primary.main',
                color:'primary.contrastText',
                height:'100vh',
                display:'flex',
                justifyContent:'space-evenly',
                alignItems:'center'
            }}>
                <img src="https://placehold.co/400" alt="nigger"/>
                <Body/>
            </Box>
        </section>
        </>
    )
}

export default Projects