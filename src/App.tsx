import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { StudentsTable } from "@components/StudentsTable";

function App() {
  return (
    <>
      <h1>Students table</h1>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          <Button variant="contained" startIcon={<AddIcon />}>
            Add Student
          </Button>
        </Stack>
        <StudentsTable />
      </Box>
    </>
  );
}

export default App;
