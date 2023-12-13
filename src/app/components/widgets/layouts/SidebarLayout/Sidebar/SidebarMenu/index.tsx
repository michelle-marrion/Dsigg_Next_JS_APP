import { useState, SyntheticEvent } from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  styled,
} from '@mui/material';

/**Import Icon */
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import CameraFrontTwoToneIcon from '@mui/icons-material/CameraFrontTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NextLink from 'next/link';

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
const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);
function SidebarMenu() {
  const [expanded, setExpanded] = useState<string | false>('section1');

  const handleChange =
    (section: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? section : false);
    };

    //const router = useRouter();
    //const currentRoute = router.pathname;

  return (
    <>
      <MenuWrapper>
          <Accordion
            expanded={expanded === 'section1'}
            onChange={handleChange('section1')}
            /* style={{backgroundColor:'#1b365f',
                    color:'white'        
          }}
             */
          >
            <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" >Home</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetails
              sx={{
                p: 0
              }}
            >
              <List component="nav" style={{margin:5}}>
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
                    <AccountCircleTwoToneIcon /> 
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="User Profil"
                    primaryTypographyProps={{ variant: 'h5' }}
                  /> 
                </ListItem>
                </NextLink>
                <ListItem button>
                  <ListItemIconWrapper>
                    <DisplaySettingsRoundedIcon/>
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
                    <AccountCircleTwoToneIcon />
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
                    <WidgetsRoundedIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="Gerer les Menu"
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary="All Menu"
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'section4'}
            onChange={handleChange('section4')}     
          >
            <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" >Extra Pages</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetails
              sx={{
                p: 0
              }}
            >
              <List component="nav" style={{margin:5}}>
                <NextLink href="/status/500" passHref>
                <ListItem button
                >
                  <ListItemIconWrapper>
                    <CameraFrontTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="Error 505"
                    primaryTypographyProps={{ variant: 'h5' }}
                  /> 
                </ListItem>
                </NextLink>
                <ListItem button>
                  <ListItemIconWrapper>
                     <CheckBoxTwoToneIcon />
                  </ListItemIconWrapper>
                  <NextLink href="/status/404">     
                  <ListItemText
                    primary="Error 404"
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                  </NextLink>
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <ChromeReaderModeTwoToneIcon />
                  </ListItemIconWrapper>
                  <NextLink href="/status/coming-soon">     
                  <ListItemText
                    primary="Coming Soon"
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                  </NextLink>
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <WorkspacePremiumTwoToneIcon />
                  </ListItemIconWrapper>
                  <NextLink href="/status/maintenance">     
                  <ListItemText
                    primary="Maintenance"
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                  </NextLink>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'section5'}
            onChange={handleChange('section5')}     
          >
            <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" >Forms Components</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetails
              sx={{
                p: 0
              }}
            >
              <List component="nav" style={{margin:5}}>
                <NextLink href="/components/buttons" passHref        
                >
                <ListItem button>
                  <ListItemIconWrapper>
                    <BallotTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="Buttons"
                    primaryTypographyProps={{ variant: 'h5' }}
                  /> 
                </ListItem>
                </NextLink>
                <ListItem button>
                  <ListItemIconWrapper>
                    <TrafficTwoToneIcon/>
                  </ListItemIconWrapper>
                  <NextLink href="/components/forms">     
                  <ListItemText
                    primary="Forms"
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                  </NextLink>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
