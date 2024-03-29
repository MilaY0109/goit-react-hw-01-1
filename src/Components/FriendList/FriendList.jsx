import FriendListItem from './FriendListItem';
import css from './Friendlist.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => {
        return (
          <li className={css.friendsListItem} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;