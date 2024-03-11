import './App.css';
import userData from './Components/Profile/userData.json';
import Profile from './Components/Profile/Profile.jsx';
import friends from './Components/FriendList/friends.json';
import FriendList from './Components/FriendList/FriendList';
import transactions from './Components/Transactions/transactions.json';
import TransactionHistory from './Components/Transactions/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
