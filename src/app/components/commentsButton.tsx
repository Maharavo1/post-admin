import { Button, Link, useRecordContext } from "react-admin";

const CommentsButton = () => {
  const record = useRecordContext();
  return (
    <Button
      component={Link}
      to={`/posts/${record.id}/comments`}
      color="primary"
      label="Comments"
    />
  );
};

export default CommentsButton;
