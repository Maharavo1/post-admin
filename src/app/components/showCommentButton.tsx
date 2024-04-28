import { Button, Link, useRecordContext } from "react-admin";

const ShowCommentButton = () => {
  const comment = useRecordContext();
  return (
    <Button
      component={Link}
      to={`/posts/${comment?.postId}/comments/${comment?.id}`}
      label="Show"
    />
  );
};

export default ShowCommentButton;
