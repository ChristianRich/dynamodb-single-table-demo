import { OneSchema } from 'dynamodb-onetable';

const Schema: OneSchema = {
  format: 'onetable:1.1.0',
  version: '0.0.1',
  indexes: {
    primary: { hash: 'pk', sort: 'sk' },
    gs1: { hash: 'gs1pk', sort: 'gs1sk' },
  },
  models: {
    User: {
      pk: { type: String, value: 'user#${id}' },
      sk: { type: String, value: 'user#${id}' },
      id: { type: String, generate: 'ulid' },
      name: { type: String, required: true },
      status: {
        type: String,
        default: 'not-activated',
        enum: ['not-activated', 'active', 'banned'],
      },
      zip: { type: String },
      gs1pk: { type: String, value: 'sec#${name}' },
      gs1sk: { type: String, value: 'sec#${id}' },
    },
  },
  params: {
    isoDates: true,
    timestamps: true,
  },
};

export default Schema;
