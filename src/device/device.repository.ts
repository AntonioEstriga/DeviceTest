import { ResultSetHeader } from "mysql2";
import { db } from "../db.ts"
import { IDevice } from "./entity/IDevice.ts"
import { CreateDeviceDTO } from "./dto/CreateDeviceDTO.ts";
import { UpdateDeviceDTO } from "./dto/UpdateDeviceDTO.ts";

class DeviceRepository {
  async findAll(): Promise<IDevice[]> {
    const [result, _] = await db.execute<IDevice[]>("SELECT * FROM device");
    return result;
  }

  async findByBrand(brand: string): Promise<IDevice[]> {
    const [result, _] = await db.execute<IDevice[]>("SELECT * FROM device WHERE brand = ?", [brand]);
    return result;
  }

  async findById(id: number): Promise<IDevice | undefined> {
    const [result, _] = await db.query<IDevice[]>(
      "SELECT * FROM device WHERE id = ?",
      [id])

    return result?.[0]
  }

  async create(device: CreateDeviceDTO): Promise<number> {
    const [result, _] = await db.query<ResultSetHeader>(
      "INSERT INTO device (name, brand) VALUES(?,?)",
      [device.name, device.brand],)
    return result.insertId;
  }

  async update(device: UpdateDeviceDTO): Promise<number> {
    console.log(device)
    const [result, _] = await db.query<ResultSetHeader>(
      "UPDATE device SET name = ?, brand = ? WHERE id = ?",
      [device.name, device.brand, device.id]
    )
    return result.insertId;

  }

  async remove(id: number): Promise<ResultSetHeader[]> {
    const [result, _] = await db.query<ResultSetHeader[]>(
      "DELETE FROM device WHERE id = ?",
      [id],)
    return result;
  }
}
export const deviceRepository = new DeviceRepository();
