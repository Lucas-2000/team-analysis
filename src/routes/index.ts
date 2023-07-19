import express, { Router } from "express";
import { teamRoutes } from "./team.routes";
import { positionRoutes } from "./position.routes";
import { playerRoutes } from "./player.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/teams", teamRoutes);
routes.use("/positions", positionRoutes);
routes.use("/players", playerRoutes);
routes.use("/users", userRoutes);
routes.use("/files", express.static("uploads"));

export { routes };
