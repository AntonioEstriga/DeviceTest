import { Router } from "express";
import { createDevice, deleteDevice, getAllDevices, getDeviceByBrand, getDeviceById, updateDevice } from "./device.controller";

Router.post('/create',createDevice)//inserir midleware validator

Router.get('/:deviceId',getDeviceById)

Router.get('/brand/:deviceBrand',getDeviceByBrand)

Router.get('/all',getAllDevices)

Router.patch('/:deviceId',updateDevice)

Router.delete('/:deviceId',deleteDevice)

module.exports = Router