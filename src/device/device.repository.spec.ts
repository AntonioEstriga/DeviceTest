import { db } from '../db';
import { testDB } from '../testDb';
import { deviceRepository } from './device.repository';
describe('Device repository', () => {

  beforeEach(async () => {
    //writing to test DB
    jest.spyOn(db, "query").mockImplementation( testDB.query);
    jest.spyOn(db, "execute").mockImplementation(testDB.execute);
  })
  let deviceList:any[] = []
  const brand = "marca"

  it('should create', async () => {
    const createDeviceDTO = {name:"Test",brand}
    const id =  await deviceRepository.create(createDeviceDTO)
    const device = await deviceRepository.findById(id)
    deviceList.push(device)
    expect(device?.brand).toEqual(createDeviceDTO.brand)
    expect(device?.name).toEqual(createDeviceDTO.name)
  });
  it('should create', async () => {
    const createDeviceDTO = { name: "Test", brand: "marca" }
    const id = await deviceRepository.create(createDeviceDTO)
    const device = await deviceRepository.findById(id)
    deviceList.push(device)
    expect(device?.brand).toEqual(createDeviceDTO.brand)
    expect(device?.name).toEqual(createDeviceDTO.name)
  });
  it('should find all devices', async () => {
    const allDevices = await deviceRepository.findAll()
    expect(allDevices.length).toEqual(deviceList.length)
  });
  it('should find by brand', async () => {
    const deviceByBrand = await deviceRepository.findByBrand(brand)
    expect(deviceByBrand.length).toEqual(deviceList.length)
  });
  it('should update name', async () => {
    const updateDeviceDTO = { name: "Test234", brand, id: deviceList[0]?.id }
     await deviceRepository.update(updateDeviceDTO)
    const updatedDevice = await deviceRepository.findById(updateDeviceDTO.id)
    expect(updatedDevice?.name).toEqual(updateDeviceDTO.name)
  });
  it('should delete all devices', async () => {
    for(const device of deviceList){
      await deviceRepository.remove(device.id)
    }
    const emptyList = await deviceRepository.findAll()
    expect(emptyList?.length).toEqual(0)
  });
})