import Elysia from "elysia";
import { AuthRoutes } from "./auth";

export const router = new Elysia()
    .get("/", ({ set }) => {
        set.status = 200
        return
    })
    .use(AuthRoutes)