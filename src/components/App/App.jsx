import user from "data/user.json"
import data from "data/data.json";
import transactions from "data/transactions.json";
import friends from "data/friends.json";
import { Profile } from "../Profile/Profile";
import { Container } from "./App.styled";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import { Transactions } from "components/Transactions/Transactions";


export const App = () => {
  return (
    <Container>
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      /> 
      
     <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions}/>
    </Container>
  );
};
