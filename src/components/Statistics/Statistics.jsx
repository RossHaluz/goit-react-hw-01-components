import { StatList, StatisticsUser, StatListItem, StatLabel, StatPercentage } from "./Statistics.styled"
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsUser>
            {title && <h2 className="title">{title}</h2>}

  <StatList>
                {stats.map(stat => (
                    <StatListItem key={stat.id}>
      <StatLabel>{stat.label}</StatLabel>
      <StatPercentage>{stat.percentage}%</StatPercentage>
    </StatListItem>
                ))}

  </StatList>
</StatisticsUser>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}