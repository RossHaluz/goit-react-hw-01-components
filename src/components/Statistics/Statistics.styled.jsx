import styled from '@emotion/styled'

export const StatisticsUser = styled.section`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`


export const StatList = styled.ul`
list-style: none;
display: flex;
padding: 0;
margin: 0;
`

export const StatListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: ${getRandomColor}
`
function getRandomColor() {
     let hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
    return hex
}

export const StatLabel = styled.span`
    font-weight: 500;
`

export const StatPercentage = styled.span`
font-weight: 700;
font-size: 21px;
`