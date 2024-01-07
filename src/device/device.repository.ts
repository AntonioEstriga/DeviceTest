import { ResultSetHeader } from "mysql2";
import { db } from "../db"
import { IDevice } from "./entity/IDevice"
import { CreateDeviceDTO } from "./dto/CreateDeviceDTO";
import { UpdateDeviceDTO } from "./dto/UpdateDeviceDTO";

class DeviceRepository {
  async findAll(): Promise<IDevice[]> {
    const [result, _] = await db.execute<IDevice[]>("SELECT * FROM device");
    return result;
  }

  async findByBrand(name: string): Promise<IDevice[]> {
    const [result, _] = await db.execute<IDevice[]>("SELECT * FROM device WHERE brand = ?",name);
    return result;
  }

  async findById(id: number): Promise<IDevice | undefined> {
    const [result, _] = await db.query<IDevice[]>(
      "SELECT * FROM device WHERE id = ?",
      [id])

    return result?.[0]
  }

  async create(device: CreateDeviceDTO): Promise<ResultSetHeader> {
    const [result, _] = await db.query<ResultSetHeader>(
      "INSERT INTO device (name, brand) VALUES(?,?)",
      [device.name, device.brand],)
    return result;
  }

  async update(device: UpdateDeviceDTO): Promise<ResultSetHeader> {
    const [result, _] = await db.query<ResultSetHeader>(
      "UPDATE device SET name = ?, brand = ? WHERE id = ?"
      [device.name, device.brand, device.id],
    )
    return result;

  }

  async remove(id: number): Promise<ResultSetHeader[]> {
    const [result, _] = await db.query<ResultSetHeader[]>(
      "DELETE FROM device WHERE id = ?",
      [id],)
    return result;
  }
}
export const deviceRepository = new DeviceRepository();
