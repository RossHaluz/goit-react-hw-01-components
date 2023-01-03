import styled from "@emotion/styled"


export const Friends = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
    flex-direction: column;
    margin-top: 35px;
`

export const FriendsItem = styled.li`
display: flex;
gap: 10px;
border: 1px solid gray;
padding: 10px 20px;
align-items: center;
border-radius: 10px;
box-shadow: 10px 5px 5px gray;
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

export const Avatar = styled.img`
    border: 1px solid gray;
    border-radius: 10px;
    padding: 10px;
    overflow: inherit;
`

export const Name = styled.p`
font-size: 16px;
font-weight: 600;
`