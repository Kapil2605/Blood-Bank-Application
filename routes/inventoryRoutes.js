const express = require("express");
const authMiddelware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getInventoryHospitalController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddelware, createInventoryController);
router.get("/get-inventory", authMiddelware, getInventoryController);
router.get("/get-donars", authMiddelware, getDonarsController);
//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddelware, getHospitalController);
//GET orgnaisation RECORDS
router.get(
  "/get-orgnaisation",
  authMiddelware,
  getOrgnaisationForHospitalController
);
//GET orgnaisation RECORDS
router.get(
  "/get-orgnaisation-for-hospital",
  authMiddelware,
  getOrgnaisationForHospitalController
);

//GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddelware,
  getInventoryHospitalController
);
module.exports = router;
