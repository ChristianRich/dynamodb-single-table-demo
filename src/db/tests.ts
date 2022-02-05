import { getRandomName } from '../utils/random';
import { getTable } from './index';

export const runTests = async () => {
  const table = getTable();
  const User = table.getModel('User');

  let user = (await User.create(
    {
      name: getRandomName(),
    },
    { log: true },
  )) as any;

  console.log('CREATED user', user);

  user = await User.update({ id: user.id });
  console.log('UPDATED user', user);

  // //  Remove attribute by setting to null
  user = await User.update({ id: user.id, status: null });
  console.log('UPDATED user', user);

  // //  Update and remove attributes using {remove}
  user = await User.update(
    { id: user.id, status: 'active' },
    { remove: ['gs1pk', 'gs1sk'] },
  );
  console.log('UPDATED user', user);

  // //  Scan is not normally advised -- scans entire table
  const users = (await User.scan({})) as any;
  console.log('FOUND users', users);

  // for (let user of users) {
  //   await User.remove({ id: user.id });
  // }
};
