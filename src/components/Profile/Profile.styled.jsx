import styled from '@emotion/styled';

export const ProfileAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${prop => `1px solid ${prop.theme.colors.gray}`};
  padding: 30px;
  border-radius: 10px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid gray;
  border-radius: 50%;
  background-color: cadetblue;
`;

export const ProfileUserName = styled.p`
  font-weight: 700;
`;

export const ProfileTag = styled.p`
  color: ${prop => prop.theme.colors.gray};
  margin: 0;
`;

export const ProfileLocation = styled.p`
  color: ${prop => prop.theme.colors.gray};
  margin: 0;
  margin-top: 10px;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`;

export const StatsItemQuantity = styled.span`
  font-weight: 700;
`;
export const StatsItemLabel = styled.span`
  color: ${prop => prop.theme.colors.gray};
`;
