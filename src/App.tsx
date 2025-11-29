import { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { StudentsTable } from "@components/StudentsTable";
import { StudentEditModal } from "@components/StudentEditModal";

function App() {
  const [isStudentEditModalOpen, setIsStudentEditModalOpen] = useState(false);
  const handleStudentEditModalOpen = () => {
    setIsStudentEditModalOpen(true);
  };

  const handleStudentEditModalClose = () => {
    setIsStudentEditModalOpen(false);
  };
  return (
    <>
      <h1>Students table</h1>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleStudentEditModalOpen}
          >
            Add Student
          </Button>
        </Stack>
        <StudentsTable />
      </Box>
      <StudentEditModal
        open={isStudentEditModalOpen}
        onClose={handleStudentEditModalClose}
        maxWidth="xs"
        fullWidth
      />
    </>
  );
}

export default App;
