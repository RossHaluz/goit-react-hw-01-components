import { Friends } from "./FriendList.styled"
import { FriendListItem } from "./FriendListItem"




export const FriendList = ({ friends }) => {
    return (
        <Friends>
            {friends.map(({id, avatar, name, isOnline}) => {
               return <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
            })}
      </Friends>
    )
}