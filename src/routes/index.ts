import Signin from "../page/Signin";
import Signup from "../page/Signup";
import Community from "../page/Community";
import Messages from "../page/Messages";
import Notification from "../page/Notification";
import Explore from "../page/Explore";
import Profile from "../page/Profile";
import Settings from "../page/Settings";
import ForgotPassword from "../page/ForgotPassword";
import InfoSetting from "../page/InfoSetting";
import LanguageSetting from "../page/LanguageSetting";
import BlockingSetting from "../page/BlockingSetting";
import SecuritySetting from "../page/SecuritySetting";
import ActivityLogSetting from "../page/ActivityLogSetting";
import ViewingSetting from "../page/ViewingSetting";
import NotificationSetting from "../page/NotificationSetting";
interface RouteType {
  path: string;
  components: React.FC;
  icon?: React.FC;
  type?: boolean;
  name?: string;
}

export const publicRoutes: RouteType[] = [
  {
    path: "signup",
    components: Signup,
  },
  {
    path: "signin",
    components: Signin,
  },
  {
    path: "forgot",
    components: ForgotPassword,
  },
];

export const PrivateRoutes: RouteType[] = [
  {
    path: "community",
    components: Community,
  },
  {
    path: "messages",
    components: Messages,
  },
  {
    path: "noti",
    components: Notification,
  },
  {
    path: "explore",
    components: Explore,
  },
  {
    path: "profile",
    components: Profile,
  },
  {
    path: "setting",
    components: Settings,
  },
];
export const settingsRoutes: RouteType[] = [
  {
    path: "info",
    components: InfoSetting,
  },
  {
    path: "language",
    components: LanguageSetting,
  },
  {
    path: "blocking",
    components: BlockingSetting,
  },
  {
    path: "Noti",
    components: NotificationSetting,
  },
  {
    path: "security",
    components: SecuritySetting,
  },
  {
    path: "log",
    components: ActivityLogSetting,
  },
  {
    path: "view-sharing",
    components: ViewingSetting,
  },
];
