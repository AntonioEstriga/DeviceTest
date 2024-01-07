import { validate, validateOrReject } from "class-validator";
import { CreateDeviceDTO } from "./dto/CreateDeviceDTO";
import { deviceService } from "./device.service"
import { Request, Response } from 'express'
import { UpdateDeviceDTO } from "./dto/UpdateDeviceDTO";

const createDevice = async (req: Request, res: Response) => {
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
}

const getDeviceById = (req: Request, res: Response) => {
  const id = req.params.id
  const device = deviceService.findById(+id)
  res.send(device)
  }

const updateDevice = async (req: Request, res: Response) => {
  const id = req.body.id;

  if(!id)
    res.send("Missing id")

  const device = await deviceService.findById(id);

  if(!device)
    res.send("Invalid id")

  const updateDeviceDTO = new UpdateDeviceDTO()
  updateDeviceDTO.brand = req.body.brand || device?.brand
  updateDeviceDTO.name = req.body.name || device?.name;
  updateDeviceDTO.id = id

  const errors = await validate(updateDeviceDTO)
  if (errors.length > 0) {
    res.send(errors)
  } else {
    const device = deviceService.update(updateDeviceDTO)
    res.status(201).send(device)
  }
}

const getAllDevices = (req: Request, res: Response) => {
  const devices = deviceService.findAll()
  res.send(devices)
}

const deleteDevice = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id)
    res.send("Missing id")

  const device = await deviceService.findById(+id);
  if (!device)
    res.send("Invalid id")

  return deviceService.remove(+id);
}

const getDeviceByBrand = (req: Request, res: Response) => {
  const brand = req.params.brand
  const device = deviceService.findByBrand(brand)
  res.send(device)
}

export {createDevice,getAllDevices,getDeviceById,updateDevice,getDeviceByBrand,deleteDevice}