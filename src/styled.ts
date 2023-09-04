import styled from "@emotion/styled";

export const StyledLink = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  boxSizing: 'border-box',
  backgroundColor: 'none',
  color: 'grey',
  // [theme.breakpoints.down('sm')]: {},
}));

// const StyledLink = styled('a', )

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .some-class: {
    background-color: red;
  }
`;
