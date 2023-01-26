import { Box, styled } from '@mui/material';

const Wrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  border: '1px dashed lightGray',
  gap: 20,
  padding: 10,
  height: 200
});

const FirstChild = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  height: theme.spacing(5)
}));

const SecondChild = styled(Box)`
  width: 40px;
  height: 40px;
  background-color: #f00;
`;

const ThirdChild = styled(Box)`
  height: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const FourthChild = styled('a')`
  height: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.palette.action.active};
`;

const StyledComponent = ({ condition = false }) => (
  <Wrapper>
    <FirstChild />
    <SecondChild border={1} />
    <ThirdChild />
    <FourthChild href="/" />
  </Wrapper>
);

export default StyledComponent;
