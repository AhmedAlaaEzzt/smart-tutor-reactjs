import { students } from "../utils/students";

export const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => {
          return (
            <tr>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
