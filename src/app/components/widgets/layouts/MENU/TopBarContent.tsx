import { useState, SyntheticEvent,useContext } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  IconButton,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Drawer,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  styled,
  useTheme
} from '@mui/material';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import { SidebarContext } from 'src/app/components/widgets/contexts/SidebarContext';
import NextLink from 'next/link';

import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import NotificationsOffTwoToneIcon from '@mui/icons-material/NotificationsOffTwoTone';

import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';
import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';


const RootWrapper = styled(Box)(
  ({ theme }) => `
        @media (min-width: ${theme.breakpoints.values.md}px) {
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
`
);

const ListItemIconWrapper = styled(ListItemIcon)(
  ({ theme }) => `
        min-width: 36px;
        color: ${theme.colors.primary.light};
`
);

const AccordionSummaryWrapper = styled(AccordionSummary)(
  ({ theme }) => `
        &.Mui-expanded {
          min-height: 48px;
        }

        .MuiAccordionSummary-content.Mui-expanded {
          margin: 12px 0;
        }

        .MuiSvgIcon-root {
          transition: ${theme.transitions.create(['color'])};
        }

        &.MuiButtonBase-root {

          margin-bottom: ${theme.spacing(0.5)};

          &:last-child {
            margin-bottom: 0;
          }

          &.Mui-expanded,
          &:hover {
            background: ${theme.colors.alpha.black[10]};

            .MuiSvgIcon-root {
              color: ${theme.colors.primary.main};
            }
          }
        }
`
);

function TopBarContent() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [expanded, setExpanded] = useState<string | false>('section1');

  const handleChange =
    (section: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? section : false);
    };

  return (
    <>
      <RootWrapper>
          <Tooltip placement="bottom" title="Conversation information">
            <IconButton color="primary" onClick={handleDrawerToggle}>
              <InfoTwoToneIcon />
            </IconButton>
          </Tooltip>
      </RootWrapper>
      <Drawer
        sx={{
          display: { xs: 'none', md: 'flex' }
        }}
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        elevation={9}
      >
        <Box
          sx={{
            minWidth: 360
          }}
          p={2}
        >
          <Divider
            sx={{
              my: 3
            }}
          />
          <Accordion
            expanded={expanded === 'section1'}
            onChange={handleChange('section1')}
            
          >
            <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
{/*              <Button startIcon={<HomeRoundedIcon />} disabled>
              
             </Button> */}
              <Typography variant="h5" >Home</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetails
              sx={{
                p: 0
              }}
            >
              <List component="nav" style={{margin:5}}>
                <NextLink href="/" passHref>
                <ListItem button>
                  <ListItemIconWrapper>
                    <ArrowBackIosRoundedIcon /> 
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="Overview"
                    primaryTypographyProps={{ variant: 'h5' }}
                  /> 
                </ListItem>
                </NextLink>
                <NextLink href="/dashboards/home">   
                <ListItem button>
                  <ListItemIconWrapper>
                    <HomeRoundedIcon /> 
                  </ListItemIconWrapper>
                    
                  <ListItemText
                    primary="Dashboard"
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
                </NextLink>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'section2'}
            onChange={handleChange('section2')}     
          >
            <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
            {/*  <Button startIcon={<HomeRoundedIcon />} disabled>
              
             </Button> */}
              <Typography variant="h5" >Accounts</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetails
              sx={{
                p: 0
              }}
            >
              <List component="nav" style={{margin:5}}>
                <NextLink href="/management/profile" passHref>
                <ListItem button>
                  <ListItemIconWrapper>
                    <ArrowBackIosRoundedIcon /> 
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="User Profil"
                    primaryTypographyProps={{ variant: 'h5' }}
                  /> 
                </ListItem>
                </NextLink>
                <ListItem button>
                  <ListItemIconWrapper>
                    <HomeRoundedIcon /> 
                  </ListItemIconWrapper>
                  <NextLink href="/management/profile/settings">     
                  <ListItemText
                    primary="Account Settings"
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                   
                  </NextLink>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'section3'}
            onChange={handleChange('section3')}
          >
            <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">Administration</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetails
              sx={{
                p: 0
              }}
            >
              <List component="nav">
                <ListItem button>
                  <ListItemIconWrapper>
                    <NotificationsOffTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="Utilisateurs"
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <CancelTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="Roles"
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <BlockTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="Block user"
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <WarningTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="Gerer les Menu"
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary="Report the conversation and provide feedback"
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Drawer>
    </>
  );
}

export default TopBarContent;
