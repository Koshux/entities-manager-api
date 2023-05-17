import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasManyThrough, belongsTo, column, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import Meter from './Meter'

export default class Circuit extends BaseModel {
  @column({ isPrimary: true, serializeAs: 'id' })
  public id: number

  @column()
  public name: string

  @column.dateTime()
  public installationDate: DateTime

  @column()
  public isMain: Boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public meterId: number

  @column()
  public circuitId: number

  @hasManyThrough([() => Circuit, () => Meter])
  public circuits: HasManyThrough<typeof Circuit>

  @belongsTo(() => Meter)
  public circuit: BelongsTo<typeof Meter>
}
