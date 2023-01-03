import { FriendsItem, FriendsItemStatus } from "./FriendList.styled"


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsItem>
            <FriendsItemStatus>{isOnline}</FriendsItemStatus>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
</FriendsItem>
    )
}