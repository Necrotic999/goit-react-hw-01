import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends_list}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={css.friend}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
