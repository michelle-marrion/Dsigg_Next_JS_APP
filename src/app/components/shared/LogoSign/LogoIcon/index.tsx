// Logo Icon for the Horizontal Menu
import 
{
 Tooltip,
 TooltipProps,
 tooltipClasses,
 styled,
 Avatar
} from '@mui/material';


import NextLink from 'next/link';

    const TooltipWrapper = styled(({ className, ...props }: TooltipProps) => (
      <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.colors.alpha.trueWhite[100],
        color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
        fontSize: theme.typography.pxToRem(12),
        fontWeight: 'bold',
        borderRadius: theme.general.borderRadiusSm,
        boxShadow:
          '0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)'
      },
      [`& .${tooltipClasses.arrow}`]: {
        color: theme.colors.alpha.trueWhite[100]
      }
    }));
    
    function Logo_Icon() {
      return (
      <>
        <TooltipWrapper
            title="Template App NextJS"
            arrow
        >
            <NextLink href="/">
                  <Avatar 
                        alt='AGL logo'
                        src='/logos/logo_AGL_rgb_Blue.png'
                        style={{width:'70px', height:'50'}}
                  />
            </NextLink>
      </TooltipWrapper>
           
      </>
      );
    }
    
    export default Logo_Icon;
    