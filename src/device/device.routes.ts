import express from "express";
import { createDevice, deleteDevice, getAllDevices, getDeviceByBrand, getDeviceById, updateDevice } from "./device.controller";

export const router = express.Router()

router.post('/create',createDevice)//inserir midleware validator

router.get('/:deviceId',getDeviceById)

router.get('/brand/:deviceBrand',getDeviceByBrand)

router.get('/all',getAllDevices)

router.patch('/:deviceId',updateDevice)

router.delete('/:deviceId',deleteDevice)
