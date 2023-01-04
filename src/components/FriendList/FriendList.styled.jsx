import styled from '@emotion/styled';

export const Friends = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 35px;
`;

export const FriendsItem = styled.li`
  display: flex;
  gap: 10px;
  border: ${prop => `1px solid ${prop.theme.colors.gray}`};
  padding: 10px 20px;
  align-items: center;
  border-radius: 10px;
  box-shadow: ${prop => `10px 5px 5px ${prop.theme.colors.gray}`};
`;
export const FriendsItemStatus = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${prop => {
    switch (prop.children) {
      case true:
        return prop.theme.colors.green;
      case false:
        return prop.theme.colors.red;
      default:
        return prop.theme.colors.red;
    }
  }};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  border: ${prop => `1px solid ${prop.theme.colors.gray}`};
  border-radius: 10px;
  padding: 10px;
  overflow: inherit;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
