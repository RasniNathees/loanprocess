import { type RouteConfig, route } from "@react-router/dev/routes";
import path from "path";

export default [
    route('/', 'routes/dashboard/dashboard.tsx'),
] satisfies RouteConfig;
