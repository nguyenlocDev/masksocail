import CommunityIcon from "../components/ui/CommunityIcon";
import ExproleIcon from "../components/ui/ExproleIcon";
import HomeIcon from "../components/ui/HomeIcon";
import MessageIcon from "../components/ui/MessageIcon";
import NotificationIcon from "../components/ui/NotificationIcon";
import SettingIcon from "../components/ui/SettingIcon";
import UsersIcon from "../components/ui/UsersIcon";

interface PageType {
  name: string;
  icon: React.FC;
  path: string;
}
export const listPage: PageType[] = [
  {
    icon: HomeIcon,
    name: "Feed",
    path: "",
  },
  {
    icon: CommunityIcon,
    name: "My Community",
    path: "community",
  },
  {
    icon: MessageIcon,
    name: "Messages",
    path: "messages",
  },
  {
    icon: NotificationIcon,
    name: "Notification",
    path: "noti",
  },
  {
    icon: ExproleIcon,
    name: "Exprole",
    path: "explore",
  },
  {
    icon: UsersIcon,
    name: "Profile",
    path: "profile",
  },
  {
    icon: SettingIcon,
    name: "Setting",
    path: "setting",
  },
];
