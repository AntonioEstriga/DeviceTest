import { type ResultSetHeader } from 'mysql2'
import { deviceRepository } from './device.repository.ts'
import { type CreateDeviceDTO } from './dto/CreateDeviceDTO.ts'
import { type UpdateDeviceDTO } from './dto/UpdateDeviceDTO.ts'
import { type IDevice } from './entity/IDevice.ts'

class DeviceService {
  async create (createDeviceDTO: CreateDeviceDTO): Promise<number> {
    return await deviceRepository.create(createDeviceDTO)
  }

  async update (updateDeviceDTO: UpdateDeviceDTO): Promise<number> {
    return await deviceRepository.update(updateDeviceDTO)
  }

  async findAll (): Promise<IDevice[]> {
    return await deviceRepository.findAll()
  }

  async findById (id: number): Promise<IDevice | undefined> {
    return await deviceRepository.findById(id)
  }

  async findByBrand (name: string): Promise<IDevice[]> {
    return await deviceRepository.findByBrand(name)
  }

  async remove (id: number): Promise<number> {
    return await deviceRepository.remove(id)
  }
}
export const deviceService = new DeviceService()
