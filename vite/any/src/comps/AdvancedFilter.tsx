import React, { useState } from 'react';
import { Button, Menu, MenuItem, TextField } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


interface FilterOption {
    label: string;
    value: any;
}


interface AdvancedFilterProps {
    options: FilterOption[];
    onSelect: (value: any, textValue: string) => void;
    buttonText?: string;
}

const AdvancedFilter = ({ options, onSelect, buttonText = 'Filtrar' }: AdvancedFilterProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (value: any, textValue: string) => {
        console.log('value: ', value, 'textValue' , textValue);
        onSelect(value, textValue);
    };

    return (
        <div className="component-advanced-filter">
            <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" endIcon={<FilterAltIcon />} onClick={handleClick}>
                {buttonText}
            </Button>
            <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
>
    {options.map((option) => (
        <MenuItem key={option.value}> {/* Usando option.value como clave */}
            {option.label}
            <TextField
                size="small"
                variant="outlined"
                onChange={(e) => {
                    handleSelect(option.value, e.target.value);
                }}
                style={{ marginLeft: '10px' }}
            />
        </MenuItem>
    ))}
</Menu>

        </div>
    );
};

export default AdvancedFilter;
