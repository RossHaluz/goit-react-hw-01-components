import { Friends } from "./FriendList.styled"
import { FriendListItem } from "./FriendListItem"




export const FriendList = ({ friends }) => {
    return (
        <Friends>
            {friends.map(friend => {
               return <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
            })}
      </Friends>
    )
}