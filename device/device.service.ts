import { deviceRepository } from "./device.repository";
import { CreateDeviceDTO } from "./dto/CreateDeviceDTO";
import { UpdateDeviceDTO } from "./dto/UpdateDeviceDTO";

class DeviceService {
  async create(createDeviceDTO:CreateDeviceDTO){
    return deviceRepository.create(createDeviceDTO)
  }
  async update(updateDeviceDTO: UpdateDeviceDTO){
    return deviceRepository.update(updateDeviceDTO)
  }
  async findAll() {
    return deviceRepository.findAll()
  }
  async findById(id:number){
    return deviceRepository.findById(id)
  }
  async findByName(name:string){
    return deviceRepository.findByName(name)
  }
  async remove(id:number){
    return deviceRepository.remove(id)
  }
}
export const deviceService = new DeviceService();
