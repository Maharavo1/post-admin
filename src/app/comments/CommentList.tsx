import { Datagrid, EmailField, List, TextField } from "react-admin";

export default function CommentList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
      </Datagrid>
    </List>
  );
}