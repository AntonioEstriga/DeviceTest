import express from 'express'
import { deviceController } from './device.controller.ts'

export const router = express.Router()

router.post('/create', deviceController.createDevice)

router.get('/id/:id', deviceController.getDeviceById)

router.get('/brand/:brand', deviceController.getDeviceByBrand)

router.get('/all', deviceController.getAllDevices)

router.patch('/:id', deviceController.updateDevice)

router.delete('/:id', deviceController.deleteDevice)
