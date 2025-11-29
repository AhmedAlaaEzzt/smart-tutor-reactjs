import Button from "@mui/material/Button";
import Dialog, { type DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { StudentForm } from "./StudentForm";

type StudentEditModalProps = DialogProps;

export const StudentEditModal = (
  studentEditModalProps: StudentEditModalProps
) => {
  return (
    <Dialog {...studentEditModalProps}>
      <DialogTitle>Add new student</DialogTitle>
      <DialogContent>
        <StudentForm />
      </DialogContent>
      <DialogActions>
        <Button variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
};
