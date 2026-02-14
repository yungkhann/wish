import { Hono } from "hono";
import type { Bindings } from "../index";
import { createAuth } from "../lib/auth";
import { createUser } from "../services/user.service";

export const userRegistrationRouter = new Hono<{ Bindings: Bindings }>();

userRegistrationRouter.post("/", async (c) => {
    const auth = createAuth(c.env);

    const session = await auth.api.getSession({
        headers: c.req.raw.headers,
    });

    if (!session) {
        return c.json({ error: 'Unauthorized' }, 401);
    }

    // TODO: Change to retrieve values from request body
    const name = c.req.query("name");
    const surname = c.req.query("surname");
    const phoneNumber = c.req.query("phoneNumber");
    const parentPhoneNumber = c.req.query("parentPhoneNumber");
    const educationLevel = c.req.query("educationLevel");
    const iin = c.req.query("iin");

    const teamName = c.req.query("teamName");

    //TODO: Retrive CV as file from requst and upload to GoogleDrive

    if (!name || !surname || !phoneNumber || !educationLevel || !iin) {
        return c.json({message: "Missing a required field"}, 400);
    } 

    await createUser(c.env.wishDB, session.user.id, name, surname, phoneNumber, educationLevel, iin, parentPhoneNumber, teamName);

    return c.json({}, 200);
})