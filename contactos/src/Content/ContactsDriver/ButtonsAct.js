import Button from '@mui/material/Button';

function ButtonsTable({ texto , isEditButton , driveContact}){

  return (
    <Button variant="contained" className={ isEditButton ? 'EditThisContact' : 'DeleteThisContact' } onClick={driveContact}>
      {texto}
    </Button>
  );
}

export default ButtonsTable;
