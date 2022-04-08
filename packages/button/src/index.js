import React from "react";
import { Box } from '@oneloop/box'
import { Svg } from '@oneloop/icons'
import '@oneloop/fonts'

export const Button = (props) => (
  <Box sx={{ position: 'relative', width: 18, height: 18 }}>
    <Box
      as="button"
      tx="buttons"
      variant="primary"
      {...props}
      __css={{
        appearance: 'none',
        display: 'inline-block',
        lineHeight: 'inherit',
        fontFamily: 'body',
        fontWeight: 'bold',
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: 'button',
      }}
    />
  </Box>
)

export const ButtonIcon = (props) => (
  <Box sx={{ position: 'relative', width: 18, height: 18 }}>
    <Box
      as="button"
      tx="buttons"
      variant="primary"
      {...props}
      __css={{
        appearance: 'none',
        display: 'inline-block',
        lineHeight: 'inherit',
        fontFamily: 'body',
        fontWeight: 'bold',
        fontSize: 6,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: 12,
        with: 48,
        height: 48,
        padding: 0,
      }}
    >
      {
        <Svg width={48} height={48} viewBox="0 0 14 14" fill="none">
          <path d="M 7,7 H 9 M 7,7 V 9 M 7,7 H 5 M 7,7 V 5" strokeWidth="1" strokeLinecap="round"/>
        </Svg>
      }
    </Box>
  </Box>
)

export const ButtonRoundIcon = (props) => (
  <Box sx={{ position: 'relative', width: 18, height: 18 }}>
    <Box
      as="button"
      tx="buttons"
      variant="primary"
      {...props}
      __css={{
        appearance: 'none',
        display: 'inline-block',
        lineHeight: 'inherit',
        fontFamily: 'body',
        fontWeight: 'bold',
        fontSize: 26,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: 50,
        with: 38,
        height: 38,
        padding: 0,
      }}
    >
      {
        <Svg width={38} height={38} viewBox="0 0 15 15" fill="none">
          <path d="M 7.5,7.5 H 10 M 7.5,7.5 V 10 M 7.5,7.5 H 5 M 7.5,7.5 V 5" strokeWidth="1" strokeLinecap="round"/>
        </Svg>
      }
    </Box>
  </Box>
)
// <span className="icon-agregar"></span>

export const ButtonRound = ({ text, variant, props }) => (
  <Box sx={{ position: 'relative', width: 18, height: 18 }}>
    <Box
      as="button"
      tx="buttons"
      variant={variant}
      {...props}
      __css={{
        appearance: 'none',
        display: 'inline-block',
        lineHeight: 'inherit',
        fontFamily: 'body',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: 24,
        height: 48,
        //paddingLeft: 30,
        whiteSpace: 'nowrap',
        paddingTop: 13,
        paddingBottom: 13,
        paddingRight: 26,
      }}
    >
      {
       /* <Svg width={10} height={10} viewBox="0 0 15 15" fill="none">
          <path d="  M 0,7.5 H 0 M 7.5,0 V 0 M 0,7.5 H 14 M 7.5,0 V 14" strokeWidth="3" strokeLinecap="round"/>
        </Svg>*/
        <span className="icon-link" style={{fontSize: '22px', paddingTop: '0'}}></span>
      }
      <span> {text}</span>
    </Box>
  </Box>
)

export const ButtonMain = ({ text, icon, variant, isCollapsible, props }) => (
  <Box sx={{ position: 'relative', width: 18, height: 18 }}>
    <Box
      as="button"
      tx="buttons"
      variant={variant}
      {...props}
      __css={{
        appearance: 'none',
        display: 'inline-block',
        lineHeight: 'inherit',
        fontFamily: 'body',
        fontWeight: 'normal',
        fontSize: 16,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: 'button',
        whiteSpace: 'nowrap',
      }}
    >
      <span className={icon} style={{fontSize: '20px' , color:color == '#DF1E02'? '#DF1E02' : '#DF1E02'}}

      />
      <span style={{}}> {text} </span>
      { isCollapsible && <span className="icon-dropdown" style={{fontSize: '16px', color: '#A6B2BA'}}/>}
    </Box>
  </Box>
)
// '.a:hover':{color: '#DF1E02'}