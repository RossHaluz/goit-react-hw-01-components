import {ProfileAccount, ProfileImg, ProfileDescription, Stats, StatsItem, StatsItemQuantity, StatsItemLabel, ProfileTag, ProfileLocation, ProfileUserName} from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileAccount>
  <ProfileDescription>
    <ProfileImg
      src={avatar}
      alt={username}
    />
    <ProfileUserName>{username}</ProfileUserName>
                <ProfileTag>@{tag}</ProfileTag>
                <ProfileLocation>{location}</ProfileLocation>
  </ProfileDescription>

  <Stats>
    <StatsItem>
      <StatsItemLabel>Followers</StatsItemLabel>
                    <StatsItemQuantity>{stats.followers}</StatsItemQuantity>
    </StatsItem>
    <StatsItem>
      <StatsItemLabel>Views</StatsItemLabel>
                    <StatsItemQuantity>{stats.views}</StatsItemQuantity>
    </StatsItem>
    <StatsItem>
      <StatsItemLabel>Likes</StatsItemLabel>
                    <StatsItemQuantity>{stats.likes}</StatsItemQuantity>
    </StatsItem>
  </Stats>
    </ProfileAccount>
    )
}