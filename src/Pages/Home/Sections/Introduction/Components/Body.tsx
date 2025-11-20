import { Button, Box } from "@mui/material";

function Body() {
    return (
        <Box sx={{
            display:'flex', 
            gap:1,
        }}>

            <Button variant="outlined" sx={{
                width:'12vw',
                height:'6vh', 
                color:'primary.main',
                borderColor:'primary.main'
            }}>
                Curr Vitae
            </Button>

            <Button variant="contained" sx={{
                width:'12vw', 
                height:'6vh',
                backgroundColor:'primary.main',
            }}>
                View Projects
            </Button>

        </Box>
    )
}
  
export default Body;