import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, HasOne, belongsTo, column, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Meter from './Meter'
import Customer from './Customer'
import Circuit from './Circuit'

export default class Site extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

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

  @column()
  public customerId: number

  @hasMany(() => Meter)
  public meters: HasMany<typeof Meter>

  @belongsTo(() => Customer)
  public customer: BelongsTo<typeof Customer>
}
