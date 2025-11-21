import { Box, Typography, Button } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';

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
                fontSize:'40px',
                fontWeight:'bold',
            }}>
                Services
            </Typography>

            <Typography sx={{
                fontSize:'20px',
            }}>
                some service desc
            </Typography>
            <Button 
            variant="contained"
            startIcon={<ArrowBack/>}
            sx={{
                backgroundColor:'primary.main',
                color:'primary.contrastText'
            }}> 
                INQUIRE
            </Button>
        </Box>
        </>
    )
}


function Services(){
    return(
        <>
        <section >
            <Box sx={{
                backgroundColor:'primary.contrastText',
                width:'100vw',
                height:'100vh',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                gap:2,
                border:'solid'
            }}>
                
                <Body/>
            </Box>
        </section>
        </>
    )
}

export default Services;