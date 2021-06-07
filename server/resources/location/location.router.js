import Router from "express";

const router = Router();

router.route("/").get((_req, res) => {
  res.status(200).json({ txt: "Hello world" });
});

export default router;
