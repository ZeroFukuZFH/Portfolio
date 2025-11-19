import { Box } from "@mui/material";
import Introduction from "./Sections/Introduction/Main";

function Home(){
  return (
    <>
      <Box sx={{width:"100%",display:'flex', justifyContent:'center'}}>
        <Introduction/>
      </Box>
    </>
  )
}

export default Home;