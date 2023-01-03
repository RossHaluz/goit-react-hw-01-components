import { ProfileAccount, ProfileImg, ProfileDescription, Stats, StatsItem, StatsItemQuantity, StatsItemLabel, ProfileTag, ProfileLocation, ProfileUserName } from './Profile.styled'
import PropTypes from 'prop-types';

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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
}