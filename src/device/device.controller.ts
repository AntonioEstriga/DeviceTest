import { validate } from "class-validator";
import { CreateDeviceDTO } from "./dto/CreateDeviceDTO.ts";
import { deviceService } from "./device.service.ts"
import { Request, Response } from 'express'
import { UpdateDeviceDTO } from "./dto/UpdateDeviceDTO.ts";
import { IDevice } from "./entity/IDevice.ts";
import { INVALID_ID, MISSING_ID } from "./constants.ts";


class DeviceController {

  async createDevice(req: Request, res: Response) {
    const createDeviceDTO = new CreateDeviceDTO()
    createDeviceDTO.brand = req.body.brand
    createDeviceDTO.name = req.body.name

    const errors = await validate(createDeviceDTO)
    if (errors.length > 0) {
      res.send(errors)
    } else {
      const deviceId = await deviceService.create(createDeviceDTO)
      res.status(201).send({ deviceId })
    }
  }

  async getDeviceById(req: Request, res: Response) {
    const id = req.params.id
    const device = await deviceService.findById(+id)
    res.send(device)
  }

  async updateDevice(req: Request, res: Response) {
    const id = req.body.id;
    const device = await deviceService.findById(id);
    console.log(device)
    const error = await this.verifyId(id, device);
    if (error)
      res.send(error)

    const updateDeviceDTO = new UpdateDeviceDTO()
    updateDeviceDTO.brand = req.body.brand || device?.brand
    updateDeviceDTO.name = req.body.name || device?.name;
    updateDeviceDTO.id = id

    const errors = await validate(updateDeviceDTO)
    if (errors.length > 0) {
      res.send(errors)
    } else {
      const deviceId = await deviceService.update(updateDeviceDTO)
      res.send({ deviceId })
    }
  }
  private async verifyId(id: number, device: IDevice | undefined) {
    let error;
    if (!id)
      error = MISSING_ID
    if (!device)
      error = INVALID_ID
    return error;

  }

  async getAllDevices(req: Request, res: Response) {
    const devices = await deviceService.findAll()
    res.send(devices)
  }

  async deleteDevice(req: Request, res: Response) {
    const id = +req.params.id;
    const device = await deviceService.findById(id);
    const error = await this.verifyId(id, device);
    if (error)
      res.send(error)

    await deviceService.remove(+id);
    res.send(device)
  }

  async getDeviceByBrand(req: Request, res: Response){
    const brand = req.params.brand
    const device = await deviceService.findByBrand(brand)
    res.send(device)
  }}

export const deviceController = new DeviceController()