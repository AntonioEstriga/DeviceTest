import { createDevice, updateDevice } from "./device.controller";
import { getMockReq, getMockRes } from '@jest-mock/express'
import { deviceService } from "./device.service";
import { IDevice } from "./entity/IDevice";

describe('Device controller', () => {
    ;
  beforeEach(async () => {
    jest.spyOn(deviceService,"update").mockImplementation(async ()=> 2)
    jest.spyOn(deviceService, "create").mockImplementation(async () => 2)
    jest.spyOn(deviceService, "findById").mockImplementation(async (id) => ({ id, name: 'dispositivo', brand: "teste"}) as IDevice)
  })
  it('should create', async () => {
    const deviceBody = { name: 'dispositivo', brand: "teste" }
    const req = getMockReq({ body: { ...deviceBody } })
    const { res } = getMockRes()
    await createDevice(req, res)
    expect(res.status).toHaveBeenCalledWith(
      201);
  })
  it('should fail to create', async () => {
    const deviceBody = { name: 'dispositivo', brand: "teste11111111111111111111111111111111111111111" }
    const req = getMockReq({ body: { ...deviceBody } })
    const { res } = getMockRes()
    await createDevice(req, res)
    expect(res.send).toHaveBeenCalledWith(
      [{
        "children": [],
        "constraints":
          { "isLength": "brand must be shorter than or equal to 20 characters" },
        "property": "brand", "target": {
          "brand": "teste11111111111111111111111111111111111111111",
          "name": "dispositivo"
        }, "value": "teste11111111111111111111111111111111111111111"
      }]
    )
  })
  it('should update', async () => {
    const deviceBody = { brand: "teste11",id:2 }
    const req = getMockReq({ body: { ...deviceBody } })
    const { res } = getMockRes()
    await updateDevice(req, res)
    expect(res.send).toHaveBeenCalledWith(
      { "deviceId": 2 });
  })

})