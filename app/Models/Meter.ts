import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Circuit from './Circuit'
import Site from './Site'

export default class Meter extends BaseModel {
  @column({ isPrimary: true })
  public serialNumber: string

  @column.dateTime()
  public installationDate: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public siteId: number

  @hasMany(() => Circuit, {
    localKey: 'serialNumber',
  })
  public circuits: HasMany<typeof Circuit>

  @belongsTo(() => Site, {
    localKey: 'siteId',
  })
  public meter: BelongsTo<typeof Site>
}
