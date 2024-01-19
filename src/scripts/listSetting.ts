import BlockingIcon from "../components/ui/BlockingIcon";
import ClockIcon from "../components/ui/ClockIcon";
import EyeIcon from "../components/ui/EyeIcon";
import LanguageIcon from "../components/ui/LanguageIcon";
import NotificationIcon from "../components/ui/NotificationIcon";
import SecurityIcon from "../components/ui/SecurityIcon";
import UsersIcon from "../components/ui/UsersIcon";

interface PageType {
  name: string;
  icon: React.FC;
  path: string;
}

export const listNavSetting: PageType[] = [
  {
    name: "Edit Profile Info",
    icon: UsersIcon,
    path: "info",
  },
  {
    name: "Language",
    icon: LanguageIcon,
    path: "language",
  },
  {
    name: "Blocking",
    icon: BlockingIcon,
    path: "blocking",
  },
  {
    name: "Notification",
    icon: NotificationIcon,
    path: "Noti",
  },
  {
    name: "Password & Security",
    icon: SecurityIcon,
    path: "security",
  },
  {
    name: "Activity Log",
    icon: ClockIcon,
    path: "log",
  },
  {
    name: "Viewing & Sharing",
    icon: EyeIcon,
    path: "view-sharing",
  },
];
