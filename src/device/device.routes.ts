import express from "express";
import { createDevice, deleteDevice, getAllDevices, getDeviceByBrand, getDeviceById, updateDevice } from "./device.controller.ts";

export const router = express.Router()

router.post('/create',createDevice)

router.get('/id/:id',getDeviceById)

router.get('/brand/:brand',getDeviceByBrand)

router.get('/all',getAllDevices)

router.patch('/:id',updateDevice)

router.delete('/:id',deleteDevice)
