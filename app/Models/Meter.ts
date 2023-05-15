import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Circuit from './Circuit'
import Site from './Site'

export default class Meter extends BaseModel {
  @column({ isPrimary: true })
  public meterId: number

  @column.dateTime()
  public installationDate: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public siteId: number

  @hasMany(() => Circuit)
  public circuits: HasMany<typeof Circuit>

  @belongsTo(() => Site, {
    foreignKey: 'siteId',
  })
  public meter: BelongsTo<typeof Site>
}
