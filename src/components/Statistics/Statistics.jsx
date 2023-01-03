import { StatList, StatisticsUser, StatListItem } from "./Statistics.styled"


export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsUser>
            {title && <h2 className="title">{title}</h2>}

  <StatList>
                {stats.map(stat => (
                    <StatListItem key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </StatListItem>
                ))}

  </StatList>
</StatisticsUser>
    )
}