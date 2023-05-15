import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Meter from './Meter'
import Customer from './Customer'

export default class Site extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public coordinates: string

  @column()
  public address: string

  @column()
  public postCode: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Meter, {
    foreignKey: 'meterId',
  })
  public meters: HasMany<typeof Meter>

  @belongsTo(() => Customer)
  public customer: BelongsTo<typeof Customer>
}
