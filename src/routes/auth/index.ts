import Elysia, { t } from "elysia";

export const AuthRoutes = new Elysia().group(
    "/auth", (app) => app

        .get("/:id",
            ({ params: { id }, set }) => 
                {
                    set.headers["content-type"] = "application/json"
                    return {token: id}
                },
            {
                params: t.Object({
                    id: t.Numeric()
                })
            })


        .post("/in",
            ({ set }) => {
                set.headers["content-type"] = "application/json"
                return {message: "AAAAAAAAAA"}
            })
)
