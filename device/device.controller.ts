import { validate, validateOrReject } from "class-validator";
import { CreateDeviceDTO } from "./dto/CreateDeviceDTO";
import { deviceService } from "./device.service"

const createDevice = (async (req, res) => {
  const createDeviceDTO = new CreateDeviceDTO()
  createDeviceDTO.brand = req.body.brand
  createDeviceDTO.name = req.body.name

  const errors = await validate(createDeviceDTO)
  if (errors.length > 0 ){
    res.send(errors)
  }else{
    const device = deviceService.create(createDeviceDTO)
    res.status(201).send(device)
  }
})

const getDeviceById = ((req, res) => {
  res.json();
})

const updateDevice = ((req, res) => {
  res.json();
})

const getAllDevices = ((req, res) => {
  res.json();
})

const deleteDevice = ((req, res) => {
  res.json();
})

const getDeviceByBrand = ((req, res) => {
  res.json();
})

export {createDevice,getAllDevices,getDeviceById,updateDevice,getDeviceByBrand,deleteDevice}