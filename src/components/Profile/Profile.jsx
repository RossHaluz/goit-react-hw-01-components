import {ProfileAccount, ProfileImg, ProfileDescription, Stats, StatsItem} from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileAccount>
  <ProfileDescription>
    <ProfileImg
      src={avatar}
      alt={username}
    />
    <p class="name">{username}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location}</p>
  </ProfileDescription>

  <Stats>
    <StatsItem>
      <span class="label">Followers</span>
                    <span class="quantity">{stats.followers}</span>
    </StatsItem>
    <StatsItem>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </StatsItem>
    <StatsItem>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </StatsItem>
  </Stats>
    </ProfileAccount>
    )
}