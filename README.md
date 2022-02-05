# DynamoDB Single Table Design demo

Demonstrates a single DynamoDB Single Table Design approach using [npm dynamodb-onetable](https://www.npmjs.com/package/dynamodb-onetable)

## Background

Great articles explaining the problem and solution:

- https://www.alexdebrie.com/posts/dynamodb-single-table/#what-is-single-table-design
- https://www.sensedeep.com/blog/posts/2021/dynamodb-singletable-design.html

## How to run

Rename `.env-sample` to `.env` and change the values

```
AWS_PROFILE=default
AWS_REGION=ap-southeast-2
DYNAMO_DB_TABLE_NAME=OneTableTestDrive
```

## Install

Install

```
npm i
```

Run

```
npm run dev
```

## Docs

https://github.com/sensedeep/dynamodb-onetable

## Observations around `npm dynamodb-onetable`

Pros

- Complex relationships between types are abstracted away using semantic partition and sort keys
- Supporting validation, enums, default values, encrypted fields, hidden fields and references
- Supports transactions :-)
- Greatly simplifies CRUD operations and relationship mapping
- Slick and easy-to-learn query engine
- Strictly typed models can be shared amongst multiple codebases with workloads on the same domain
- DB fields `create` and `updated` timestamps are built-in
- TypeScript compatible

Cons & Concerns

- The raw DB table entries will look like a dog's breakfast
- What if you want to replace OneTable, can another ORM understand the underlying data structure and model relationships?
