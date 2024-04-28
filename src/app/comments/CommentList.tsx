import { Datagrid, EmailField, List, TextField } from "react-admin";
import { useParams } from "react-router-dom";
import ShowCommentButton from "../../components/showCommentButton";

export default function CommentList() {
  const { postId } = useParams();
  return (
    <List resource="comments" filter={{ postId }}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <ShowCommentButton />
      </Datagrid>
    </List>
  );
}
