module.exports = {
    tables: [
      {
        TableName: 'Lmao',
        KeySchema: [{AttributeName: 'PK', KeyType: 'HASH' }, {AttributeName:'SK', KeyType:'RANGE'}],
        AttributeDefinitions: [{AttributeName: 'PK', AttributeType: 'S'}, {AttributeName:'SK', AttributeType:'S'}],
        ProvisionedThroughput: {ReadCapacityUnits: 5, WriteCapacityUnits: 5},
      },
      // etc
    ],
  };