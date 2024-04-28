import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export default function PostCreate() {
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" />
        <TextInput source="body" />
      </SimpleForm>
    </Create>
  );
}
