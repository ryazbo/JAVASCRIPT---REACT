import { Autocomplete , TextField } from "@mui/material";



function MaterialActs(){

    const options = [
        { label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 },
        { label: 'Añañin', id: 2 },
        { label: 'mainkra', id: 2 },
        { label: 'Gta', id: 2 },
        { label: 'MaduroDeidad', id: 2 },

      ];

    return(
        <div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
                />
        </div>
    );
}


export default MaterialActs;