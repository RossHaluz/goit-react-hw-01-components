import styled from "@emotion/styled"


export const Friends = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
    flex-direction: column;
`

export const FriendsItem = styled.li`
display: flex;
gap: 10px;
border: 1px solid black;
padding: 10px 20px;
align-items: center;
`
export const FriendsItemStatus = styled.span`
width: 10px;
height: 10px;
background-color: ${prop => {
    switch (prop.children) {
        case true:
            return "green"
        case false:
            return "red"
        default:
           return "red"
    }
}};
border-radius: 50%;
`