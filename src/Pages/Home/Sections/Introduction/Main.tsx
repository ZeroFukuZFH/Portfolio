import { Typography, Button, Box } from "@mui/material";

function Introduction(){
    return (
        <>
        <section>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'100vh'}}>
                <Typography>Hi, My Name is Albert and I am a Fullstack Software Engineer</Typography>
                <Box sx={{display:'flex', gap:1}}>
                    <Button variant="outlined" sx={{width:'12vw',height:'6vh', overflow:'hidden'}}>Curr Vitae</Button>
                    <Button variant="contained" sx={{width:'12vw', height:'6vh'}}>View Projects</Button>
                </Box>
            </Box>
        </section>
        </>
    )
}

export default Introduction;