import { type SchemaTypeDefinition } from 'sanity'
import banner from '../schema/banner'
import category from './category'
import products from './products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, category, products],
}
