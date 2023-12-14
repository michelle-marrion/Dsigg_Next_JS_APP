import { useContext } from 'react';
import Scrollbar from '@/app/components/shared/Scrollbar';
import { SidebarContext } from 'src/app/components/widgets/contexts/SidebarContext';

import {
  Box,
  Drawer,
 // alpha,
  styled,
  Divider,
  useTheme,
  //lighten,
  //darken
} from '@mui/material';

import SidebarMenu from './SidebarMenu';
//import Logo_White from '@/app/components/shared/LogoSign/Logo_White';
import Logo_Blue from '@/app/components/shared/LogoSign'
const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: -68px;
`
);
function SidebarContent()
{
  const theme = useTheme();
  return(
    <>
            <SidebarWrapper
          sx={{
            background: '#fff'
          }}
        >
          <Scrollbar>
            <Box mt={3}>
              <Box
                mx={2}
                sx={{
                  width: 52
                }}
              >
                <Logo_Blue />
              </Box>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10]
              }}
            />
            <SidebarMenu />
          </Scrollbar>
        </SidebarWrapper>
    </>
  );
}
function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
      </Drawer>
        {/* reduction de la page */}
        <Drawer
          sx={{
            boxShadow: `${theme.sidebar.boxShadow}`
          }}
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={sidebarToggle}
          onClose={closeSidebar}
          variant="temporary"
          elevation={9}
        >
          <SidebarContent/>
      </Drawer>
    </>
  );
}

export default Sidebar;
