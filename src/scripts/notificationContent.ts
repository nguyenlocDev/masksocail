import {
  LoveIconNoti,
  ShareIconNoti,
  CommentsIconNoti,
  UsersIconNoti,
} from "../components/ui/ui";
interface Content {
  element: React.FC;
  title: string;
}
interface ListNoti {
  love: Content;
  share: Content;
  users: Content;
  comment: Content;
}

export const notificationContent: ListNoti = {
  love: {
    element: LoveIconNoti,
    title: "Like your post",
  },
  users: {
    element: UsersIconNoti,
    title: "Followed you",
  },
  share: {
    element: ShareIconNoti,
    title: "Share your post",
  },
  comment: {
    element: CommentsIconNoti,
    title: "Commented on your photo",
  },
};
