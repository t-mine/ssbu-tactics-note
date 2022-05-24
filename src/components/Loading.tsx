import { Box } from '@chakra-ui/react';

/**
 * サインインリンク
 */
const Loading: React.VFC = () => {
  const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, .5)',
    margin: '0',
    padding: '0',
  };

  return (
    <Box style={style} position="fixed">
      <Box mx="auto">Loading...</Box>
    </Box>
  );
};

export default Loading;
