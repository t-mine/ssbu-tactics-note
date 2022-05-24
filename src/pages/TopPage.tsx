import { Box, Stack } from '@chakra-ui/react';
import Loading from '../components/Loading';

/**
 * トップ画面
 */
const TopPage: React.VFC = () => {
  return (
    <Stack p="5" fontSize="sm">
      <Box>top page</Box>
      <Loading />
    </Stack>
  );
};

export default TopPage;
