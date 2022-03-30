import { EditIcon, ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, MenuButton, Menu, MenuItem, MenuList } from '@chakra-ui/react';

/**
 * ハンバーガーメニュー
 */
const HambergerMenu = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
      <MenuList>
        <MenuItem icon={<EditIcon />}>キャラ対ノート</MenuItem>
        <MenuItem icon={<ExternalLinkIcon />}>ログアウト</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HambergerMenu;
