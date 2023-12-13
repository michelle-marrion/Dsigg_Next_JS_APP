import {
  Box,
  Tooltip,
  TooltipProps,
  tooltipClasses,
  styled,
} from '@mui/material';
import Link from '@/app/components/shared/Link';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 150px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoSignWrapper = styled(Box)(
  () => `
        width: 150px;
        height: 100px;
`
);
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

function Logo_Blue() {
  return (
    <TooltipWrapper
    title="Template App NextJS"
    arrow
  >
    <LogoWrapper href="/">
        <LogoSignWrapper>
          <img 
            alt='AGL logo'
            src='/logos/logo_AGL_rgb_Blue.png'
            style={{width:'auto', height:'auto'}}
          />
        </LogoSignWrapper>
    </LogoWrapper>
  </TooltipWrapper>
  );
}

export default Logo_Blue;
