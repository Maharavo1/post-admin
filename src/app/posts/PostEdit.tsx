import { Edit, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export default function PostEdit() {
  return (
    <Edit>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput source="body" />
      </SimpleForm>
    </Edit>
  );
}
