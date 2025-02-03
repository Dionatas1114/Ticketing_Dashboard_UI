import { TextField, TextFieldProps } from '@mui/material';

// const sanitizeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
// let value = event.target.value;
// value = value.replace(/[^a-zA-Z ]/g, '').trimStart(); // Remove espaços no início e caracteres inválidos
// event.target.value = value; // Atualiza o valor no input que será retornado para o componente Pai
// };

const InputUserName = ({ id = 'user name', ...props }: TextFieldProps) => (
  <TextField
    id={id}
    name="name"
    autoComplete="name"
    fullWidth
    // onInput={sanitizeUserName}
    {...props}
    sx={{
      '& .MuiFormHelperText-root': {
        height: '0.5rem', // Ajusta a altura do helperText
      },
    }}
  />
);

export default InputUserName;
