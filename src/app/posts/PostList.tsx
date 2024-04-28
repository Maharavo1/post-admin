import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export default function PostList() {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="title" />
        <ReferenceField source="userId" reference="users" />
      </Datagrid>
    </List>
  );
}