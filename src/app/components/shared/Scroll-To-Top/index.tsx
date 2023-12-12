// ** React Imports
import { ReactNode } from 'react'
// ** MUI Imports
import Zoom from '@mui/material/Zoom'
import {ToggleButton} from '@mui/material'
import { styled } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
interface ScrollToTopProps {
  className?: string
  children: ReactNode
}

const ScrollToTopStyled = styled('div')(({ theme }) => ({
  zIndex: 11,
  position: 'fixed',
  right: theme.spacing(3),
  bottom: theme.spacing(2)
}))

const ScrollToTop = (props: ScrollToTopProps) => {
  // ** Props
  const { children, className } = props

  // ** init trigger
  const trigger = useScrollTrigger({
    threshold: 400,
    disableHysteresis: true
  })

  const handleClick = () => {
    //selectionner l'élément 'body' du document
    const anchor = document.querySelector('body')

    //veridie si l'élément 'body' existe
    if (anchor) {
      //utilise la méthode 'scrollIntoView pour faire défiler l'élément body à l'écran
      anchor.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Zoom in={trigger}>
      <ScrollToTopStyled className={className} onClick={handleClick} role='presentation'>
        {children}
      </ScrollToTopStyled>
    </Zoom>
  )
}


export type LayoutProps = {
  scrollToTop?: (props?: any) => ReactNode
}
const GoToTop = (props : LayoutProps) =>
{
  const {scrollToTop } = props
  return(
    <>
      {/* Scroll to top button */}
      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className='mui-fixed'>
           <ToggleButton disableRipple value="Go to top" color='secondary'>
            <ArrowUpwardIcon/>
          </ToggleButton>
        </ScrollToTop>
      )}
    </>
  );

}
export default GoToTop ;
