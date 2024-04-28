import PostCreate from "./PostCreate";
import PostEdit from "./PostEdit";
import PostList from "./PostList";
import PostShow from "./PostShow";

const posts = {
  list: <PostList />,
  show: <PostShow />,
  edit: <PostEdit />,
  create: <PostCreate />,
};

export default posts;
