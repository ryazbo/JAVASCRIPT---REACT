function ButtonsTable({ texto , isEditButton , driveContact}){

  return (
    <button className={ isEditButton ? 'EditThisContact' : 'DeleteThisContact' } onClick={driveContact}>
      {texto}
    </button>
  );
}

export default ButtonsTable;
