import React from "react";

// Admin Imports
import MainDashboard from "./views/admin/default";

// Auth Imports
import SignIn from "./views/auth/SignIn";

import NFTMarketplace from "./views/admin/marketplace";
import Profile from "./views/admin/profile";
import DataTables from "./views/admin/tables";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdCategory,
  MdShoppingBag,
  MdProductionQuantityLimits,
} from "react-icons/md";
import CategoryOverview from "./views/admin/category";
import Product from "./views/admin/product";
import Order from "./views/admin/order";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Category",
    layout: "/admin",
    path: "category",
    icon: <MdCategory className="h-6 w-6" />,
    component: <CategoryOverview />,
    secondary: true,
  },
  {
    name: "Product",
    layout: "/admin",
    path: "product",
    icon: <MdProductionQuantityLimits className="h-6 w-6" />,
    component: <Product />,
    secondary: true,
  },
  {
    name: "Order",
    layout: "/admin",
    icon: <MdShoppingBag className="h-6 w-6" />,
    path: "order",
    component: <Order />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
