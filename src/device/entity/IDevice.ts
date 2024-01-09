import { type RowDataPacket } from 'mysql2'

export interface IDevice extends RowDataPacket {
  id: number
  name: string
  brand: string
  createdAt: Date
}
