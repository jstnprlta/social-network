const router = require("express").Router();

import userRoutes from "./user-routes";
import thoughtRoutes from "./thoughts-routes";

router.use("/api/users", userRoutes);
router.use("/api/thoughts", thoughtRoutes);

export default router;
