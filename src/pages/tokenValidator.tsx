import { TextField, Box, Grid } from "@mui/material";
import React from "react";
import { getLanguage } from "../assets/language/language";
import SendIcon from '@mui/icons-material/Send';
export default class TokenValidator extends React.Component{

    render(){
        return (
            <div>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '80vh' }}
                >
                    <p>{getLanguage("%tokenValidatorText%", localStorage.getItem("lang") == null ? "fr_FR" : localStorage.getItem("lang"))}</p>
                <Grid item xs={3}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', alignContent: "center"}}>
                        <TextField id="outlined-basic" label="Token" variant="outlined" sx={{m: 1}}/>
                       
                    <SendIcon sx={{m: 2, fontSize: 40}}/>
                    </Box>
                </Grid>   
                
                </Grid> 
                
              
            </div>
        )
    }
}
