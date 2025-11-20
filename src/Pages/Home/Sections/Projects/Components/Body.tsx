import { Box, Typography, Button } from '@mui/material'

function Details(){
    return(
        <>
            <Box sx={{
                padding:2,
                display:'flex', 
                flexDirection:'column',
                gap:2,
                justifyContent:'center',
            }}>
                <Typography sx={{
                    color:'primary.contrastText',
                    fontWeight:'bold',
                    fontSize:'40px'
                }}>
                    Project Name
                </Typography>

                <Typography sx={{
                    backgroundColor:'black',
                    color:'primary.contrastText',
                    padding:1,
                    display:'flex',
                    justifyContent:'center',
                    fontSize:'10px'
                }}>
                    <i>FULLSTACK WEB APPLICATION</i>
                </Typography>

                <Typography sx={{
                    color:'primary.contrastText'
                }}>
                    Project Description
                </Typography>

                <Typography sx={{
                    color:'primary.contrastText'
                }}>
                    made with 
                </Typography>

                <Box sx={{
                    display:'flex',
                    gap:1
                }}>
                    <Button 
                        variant="outlined" 
                        sx={{
                            width:'12vw'
                    }}>
                        GO TO REPOSITORY
                    </Button>

                    <Button 
                        variant="contained" 
                        sx={{
                            width:'12vw'
                    }}>
                        VIEW PROJECT
                    </Button>
                </Box>
            </Box>
        </>
    )
}

function Body(){
    return (
        <>
        <Box>
            <Details/>
        </Box>
        </>
    )
}

export default Body