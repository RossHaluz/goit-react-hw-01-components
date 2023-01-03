import {
  FriendsItem,
  FriendsItemStatus,
  Avatar,
  Name,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <FriendsItemStatus>{isOnline}</FriendsItemStatus>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendsItem>
  );
};
