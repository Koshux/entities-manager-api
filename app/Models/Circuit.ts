import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Meter from './Meter'

export default class Circuit extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public installationDate: DateTime

  @column()
  public isMain: Boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Meter)
  public circuit: BelongsTo<typeof Meter>
}
