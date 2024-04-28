import { EmailField, Show, SimpleShowLayout, TextField } from "react-admin";
import { useParams } from "react-router-dom";

export default function CommentShow() {
  const { commentId } = useParams();
  return (
    <Show resource="comments" id={commentId}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
      </SimpleShowLayout>
    </Show>
  );
}
