import React from 'react'
import { Box, Flex } from '@oneloop/box'
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion'

export const Drawer = ({
  isOpen,
  children,
  screenSide,
  animationWidth,
  overlay,
  ...props
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <DrawerMotion screenSide={screenSide} animationWidth={animationWidth} overlay={overlay}>
          {children}
        </DrawerMotion>
      )}
    </AnimatePresence>
  )
}

export const DrawerCollapsible = ({
  isOpen,
  children,
  screenSide,
  animationWidth,
  animationMinWidth,
  overlay,
  ...props
}) => {
  return (
    <AnimatePresence>
      <DrawerMotion screenSide={screenSide} animationWidth={animationWidth} animationMinWidth={animationMinWidth} overlay={overlay} isOpen={isOpen}>
        {children}
      </DrawerMotion>
    </AnimatePresence>
  )
}

const DrawerMotion= ({
  isOpen,
  children,
  screenSide,
  animationWidth = 1000,
  animationMinWidth,
  overlay,
  ...props
}) => {

  const variantsOverlay = {
    open: { opacity: 1 },
    closed: { opacity: 0, transition: { delay: 0.3 } },
  }

  const variantsDrawer = {
    open: { x: 0 },
    closed: { x: 1000 },
  }

  const variantsDrawerMenu = {
    open: { width: animationWidth },
    closed: { width: animationMinWidth },
  }

  const drawerOverlayInitial = {
    backgroundColor: 'rgba(4, 4, 4, 0.79)',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 100,
  }

  const drawerContentInitial = {
    backgroundColor: 'white',
    position: 'absolute',
    height: '100%',
    maxWidth: '100%',
    minWidth: '0px',
    boxShadow: 'none',
    overflowY: 'auto',
    padding: '10px',
  }

  const drawerMenuContentInitial = {
    backgroundColor: 'white',
    boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.15)',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    maxWidth: '100%',
    width: animationWidth,
    overflowY: 'auto',
    padding: '10px',
    overflow: 'visible',
    zIndex: 100,
  }

  drawerContentInitial[screenSide] = 0

  if (screenSide === 'left') {
    drawerContentInitial.x = animationWidth * -1
    variantsDrawer.closed.x = animationWidth * -1
  } else {
    drawerContentInitial.x = animationWidth
    variantsDrawer.closed.x = animationWidth
  }

  if (overlay) {
    return (
      <motion.div
        key="drawerOverlay"
        variants={variantsOverlay}
        initial={drawerOverlayInitial}
        animate="open"
        exit="closed"
      >
        <motion.div
          key="drawerContent"
          variants={variantsDrawer}
          initial={drawerContentInitial}
          exit="closed"
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </motion.div>
    )
  } else {
    return (
      <motion.div
        key="drawerContent"
        variants={variantsDrawerMenu}
        initial={drawerMenuContentInitial}
        animate={ isOpen ? "open" : "closed" }
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    )
  }
}

const DrawerHeader = (props) => (
  <Flex
    {...props}
    __css={{
      mb: '15px',
      alignItems: 'center',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    }}
  />
)

const DrawerBody = (props) => <Box {...props} />

const DrawerFooter = (props) => (
  <Flex
    {...props}
    sx={{
      mt: '15px',
    }}
  />
)

Drawer.Header = DrawerHeader
Drawer.Body = DrawerBody
Drawer.Footer = DrawerFooter
