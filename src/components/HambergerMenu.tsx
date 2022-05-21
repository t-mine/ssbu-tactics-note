import { EditIcon, ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, MenuButton, Menu, MenuItem, MenuList } from '@chakra-ui/react';
import AuthService from '../service/auth/auth-service';

/**
 * ハンバーガーメニュー
 */
const HambergerMenu: React.VFC = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
      <MenuList>
        <MenuItem icon={<EditIcon />}>キャラ対ノート</MenuItem>
        <MenuItem icon={<ExternalLinkIcon />} onClick={AuthService.signOut}>
          ログアウト
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HambergerMenu;
