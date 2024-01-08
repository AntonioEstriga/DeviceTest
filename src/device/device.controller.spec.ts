import { createDevice } from "./device.controller";
import { getMockReq, getMockRes } from '@jest-mock/express'

describe('Device controller', () => {
  let res: any;
  beforeEach(async () => {
    jest.mock('./device.service', () => {
      return {
        deviceService: jest.fn().mockImplementation(() => ({
          create: jest.fn(async () => { true }),
        })),
      };
    });
    res = getMockRes();

  })
  it('should create', async () => {
    const deviceBody = { name: 'dispositivo', brand: "teste" }
    const req = getMockReq({ body: { ...deviceBody } })
    await createDevice(req, res)
    expect(res.send).toHaveBeenCalledWith(
      expect.objectContaining(deviceBody));
  })
})