import { Box, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import axios from 'axios';

/**
 * トップ画面
 */
const TopPage: React.VFC = () => {
  // マウント時にスマブラの動画一覧を取得する
  useEffect(() => {
    axios
      .get('/api/posts')
      .then((response) => {
        // 動画一覧の取得結果をログ出力
        console.log(response.data);
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
  }, []);

  return (
    <Stack p="5" fontSize="sm">
      <Box>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/p29vPaPW4h8"
          title="YouTube video player"
          //frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          //allowfullscreen
        ></iframe>
      </Box>
    </Stack>
  );
};

export default TopPage;
