import { createTableIfNotExists } from './db';
import { runTests } from './db/tests';

(async () => {
  await createTableIfNotExists();
  await runTests();

  // Avoid creating/deleting tables in rapid succession
  // await deleteTableIfExists();
})();
