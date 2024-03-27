import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ friend }) => {
  return (
    <div className={css.item_wrapper}>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p className={css.friend_name}>{friend.name}</p>
      <p className={clsx(friend.isOnline ? css.online : css.offline)}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
