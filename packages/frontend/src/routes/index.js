/* eslint-disable import/first */
import React from "react";
import { ROUTES } from "../constants";
import { useAuth0 } from "@auth0/auth0-react";

import async from "../components/Async";

import { BookOpen, Grid, Home, List, Monitor, Users } from "react-feather";

import AuthGuard from "../components/AuthGuard";
import AdminGuard from "../components/AdminGuard";
import AdminVisibilityFilter from "../components/AdminVisibilityFilter";

import Blank from "../pages/pages/Blank";
import Changelog from "../pages/docs/Changelog";
import Landing from "../pages/presentation/Landing";
import ProtectedPage from "../pages/protected/ProtectedPage";
import Welcome from "../pages/docs/Welcome";
import Support from "../pages/docs/Support";
import { All, EXAMPLE_COMPONENTS } from "../pages/components/All";
import { DocumentationProvider } from "../pages/docs/DocumentationProvider";
import { dasherize, underscore } from "inflected";
import GettingStarted from "../pages/docs/GettingStarted";
import Default from "../pages/dashboards/Default";

const Account = async(() => import("../pages/pages/Account"));
const Profile = async(() => import("../pages/pages/Profile"));

import ContactsConfig from "../pages/models/ContactsConfig";
import { CrudProvider } from "../CrudProvider";

const CrudIndexPage = async(() => import("../components/crud/CrudIndexPage"));
const CrudViewPage = async(() => import("../components/crud/CrudViewPage"));

//   containsHome: true,

const modelRoutes = {
  id: "Contacts",
  path: ROUTES.MODEL_CONTACTS,
  model: "Contact",
  header: "Models",
  icon: <Users />,
  children: null,
  component: CrudIndexPage,
  config: ContactsConfig,
  provider: CrudProvider,
};

const modelCrudRoutes = {
  id: "Contacts",
  path: ROUTES.MODEL_CONTACTS,
  model: "Contact",
  header: "Models",
  crud: [
    {
      path: `${ROUTES.MODEL_CONTACTS}/:id`,
      name: "View Contact",
      component: CrudViewPage,
      config: ContactsConfig,
      provider: CrudProvider,
      model: "Contact",
    },
    {
      path: `${ROUTES.MODEL_CONTACTS}/add`,
      name: "Add Contact",
      component: CrudViewPage,
      config: ContactsConfig,
      provider: CrudProvider,
      model: "Contact",
    },
  ],
  component: CrudIndexPage,
  config: ContactsConfig,
  provider: CrudProvider,
};

const accountRoutes = {
  id: "Account",
  path: "/account",
  name: "Account",
  header: "Pages",
  icon: <Users />,
  component: Account,
  children: [
    {
      path: ROUTES.USER_PROFILE,
      name: "Profile",
      component: Profile,
    },
    {
      path: "/auth/logout",
      name: "Logout",
      component: function Logout() {
        const { logout } = useAuth0();
        logout();
      },
    },
  ],
};

const landingRoutes = {
  id: "Landing Page",
  path: "/",
  header: "Docs",
  icon: <Monitor />,
  component: Landing,
  children: null,
};

const mainRoutes = {
  id: "Dashboard",
  path: "/dashboard",
  icon: <Home />,
  component: Default,
  children: null,
  containsHome: true,
};

const pageRoutes = {
  id: "Pages",
  path: "/pages",
  icon: <Monitor />,
  component: Blank,
  children: [
    {
      path: "/dashboard/default",
      name: "Dashboard",
      component: Default,
    },
    {
      path: ROUTES.PAGE_ABOUT,
      name: "About LRE Water UP PoC Starter Kit",
      component: Blank,
    },
    {
      path: ROUTES.PAGE_SUPPORT,
      name: "Support",
      component: Blank,
    },
    {
      path: ROUTES.PAGE_DOCUMENTATION,
      name: "Documentation",
      component: Blank,
    },
    {
      path: ROUTES.PAGE_BLANK,
      name: "Blank",
      component: Blank,
    },
  ],
};

const documentationRoutes = {
  id: "Documentation",
  path: ROUTES.PAGE_DOCUMENTATION,
  icon: <BookOpen />,
  provider: DocumentationProvider,
  children: [
    {
      path: ROUTES.PAGE_DOCS_WELCOME,
      name: "Welcome",
      component: Welcome,
      guard: AdminGuard,
    },
    {
      path: ROUTES.PAGE_DOCS_GETTING_STARTED,
      name: "Getting Started",
      component: GettingStarted,
      guard: AdminGuard,
    },
    {
      path: ROUTES.PAGE_DOCS_SUPPORT,
      name: "Support",
      component: Support,
      guard: AdminGuard,
    },
    {
      path: ROUTES.PAGE_CHANGELOG,
      name: "Changelog",
      component: Changelog,
    },
  ],
  component: null,
  guard: AdminGuard,
  visibilityFilter: AdminVisibilityFilter,
};

const slugify = (str) => {
  return dasherize(underscore(str));
};

const componentsRoutes = {
  id: "Components",
  path: "/components",
  header: "UI Kit",
  icon: <Grid />,
  children: [
    {
      path: "/components/all",
      name: "All",
      component: All,
    },
    ...EXAMPLE_COMPONENTS.map((x) => ({
      name: x.title,
      path: `/components/${slugify(x.title)}`,
      component: () => All({ exampleComponent: x }),
    })),
  ],
  component: null,
  visibilityFilter: AdminVisibilityFilter,
};

const changelogRoutes = {
  id: "Changelog",
  path: "/changelog",
  badge: process.env.REACT_APP_VERSION || "v1.0.0",
  icon: <List />,
  component: Changelog,
  provider: DocumentationProvider,
  children: null,
};

// This route is only visible while signed in
const protectedPageRoutes = {
  id: "Private",
  path: "/private",
  icon: <Monitor />,
  component: ProtectedPage,
  children: null,
  guard: AuthGuard,
};

const adminRoutes = {
  id: "Users",
  header: "Administration",
  path: "/admin/users",
  icon: <Users />,
  component: Blank,
  children: [
    {
      path: "/admin/users",
      name: "Users",
      component: Blank,
    },
    {
      path: "/admin/roles",
      name: "Roles",
      component: Blank,
    },
    {
      path: "/admin/permissions",
      name: "Permissions",
      component: Blank,
    },
  ],
  guard: AdminGuard,
  visibilityFilter: AdminVisibilityFilter,
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  pageRoutes,
  mainRoutes,
  changelogRoutes,
  accountRoutes,
  documentationRoutes,
  componentsRoutes,
  adminRoutes,
];

export const dashboardMaxContentLayoutRoutes = [modelRoutes, modelCrudRoutes];

// Routes using the Auth layout
export const authLayoutRoutes = [accountRoutes];

// Routes using the Presentation layout
export const presentationLayoutRoutes = [landingRoutes];

// Routes that are protected
export const protectedRoutes = [protectedPageRoutes];

// Routes visible in the sidebar
export const sidebarRoutes = [
  mainRoutes,
  modelRoutes,
  adminRoutes,
  componentsRoutes,
  documentationRoutes,
];
