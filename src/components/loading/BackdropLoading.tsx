import { Backdrop, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: '#fff',
}));

const BackdropLoading = () => {
  return (
    <StyledBackdrop open={true}>
      <CircularProgress color="inherit" />
    </StyledBackdrop>
  );
};

export default BackdropLoading;
