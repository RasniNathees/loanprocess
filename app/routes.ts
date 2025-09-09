import { type RouteConfig, layout, route } from "@react-router/dev/routes";
import path from "path";

export default [
    layout('routes/dashboard/dashboard-layout.tsx', [
          route('/', 'routes/dashboard/dashboard.tsx'),
    ]),
  
] satisfies RouteConfig;
