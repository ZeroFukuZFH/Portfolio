import { Box, Typography } from "@mui/material"

function Socials(){
    return (
        <>
            <section>
                <Box sx={{
                    backgroundColor:'primary.dark',
                    color:'primary.contrastText',
                    display:'flex',
                    height:'70vh',
                    width:'100vw',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Typography> SOCIALS </Typography>
                </Box>
            </section>
        </>
    )
}

export default Socials