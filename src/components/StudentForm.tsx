import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export const StudentForm = () => {
  return (
    <Stack direction="column" spacing={2} sx={{ pt: 2 }}>
      <TextField id="txt-full-name" label="Full Name" variant="outlined" />
      <TextField id="txt-age" label="Age" variant="outlined" />
      <TextField id="txt-email" label="Email" variant="outlined" type="email" />
      <TextField id="txt-class" label="Class" variant="outlined" />
    </Stack>
  );
};
