// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
const cookie = require("cookie");
const API = process.env.API_URL;
export default async function handleLogout(req, res) {
  try {
    res
      .setHeader(
        "Set-Cookie",
        cookie.serialize("jwt", "", {
          httpOnly: true,
          path: "/api",
        }),
      )
      .status(200)
      .json({});
  } catch (err) {
    res.status(500).json({ ...err.response.data });
  }
}
