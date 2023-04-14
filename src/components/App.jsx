import { Profile } from './Profile/Profile';
import user from '../json/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../json/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../json/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data}><Statistics stats={data} />
      </Statistics>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};