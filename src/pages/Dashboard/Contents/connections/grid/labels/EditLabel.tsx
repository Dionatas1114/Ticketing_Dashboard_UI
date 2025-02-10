import { Box, Button } from '@mui/material';

const EditLabel = (params: any) => {
  const handleAddUser = (row: any) => console.log('User added:', row);

  return (
    <Box sx={{ textAlign: 'center', alignItems: 'center' }}>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => handleAddUser(params.row)}
      >
        Add User
      </Button>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => handleAddUser(params.row)}
      >
        Edit User
      </Button>
    </Box>
  );
};

export default EditLabel;
