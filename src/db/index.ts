import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { Model, Table } from 'dynamodb-onetable';
import Dynamo from 'dynamodb-onetable/Dynamo';
import Schema from './schema-simple';

if (!process.env.DYNAMO_DB_TABLE_NAME) {
  throw new Error('DYNAMO_DB_TABLE_NAME expected');
}

if (!process.env.AWS_REGION) {
  throw new Error('AWS_REGION expected');
}

if (!process.env.DYNAMO_DB_TABLE_NAME) {
  throw new Error('DYNAMO_DB_TABLE_NAME expected');
}

const client: Dynamo = new Dynamo({
  client: new DynamoDBClient({
    region: process.env.AWS_REGION,
  }),
});

const tableInstance: Table = new Table({
  client,
  name: process.env.DYNAMO_DB_TABLE_NAME,
  schema: Schema,
});

export const createTableIfNotExists = async (
  table: Table = tableInstance,
): Promise<void> => {
  const exists = await table.exists();
  if (!exists) {
    console.log(`CREATED table ${process.env.DYNAMO_DB_TABLE_NAME}`); // eslint-disable-line
    await table.createTable();
  }
};

export const deleteTableIfExists = async (
  table: Table = tableInstance,
): Promise<void> => {
  const exists = await table.exists();
  if (exists) {
    console.log(`DELETE table ${process.env.DYNAMO_DB_TABLE_NAME}`); // eslint-disable-line
    await table.deleteTable('DeleteTableForever');
  }
};

// Return the single table instance
export const getTable = (): Table => tableInstance;

// Get a model without having the table instance
export const getModel = (modelName: string): Model<any> =>
  getTable().getModel(modelName);
