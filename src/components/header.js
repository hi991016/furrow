import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'

// styled components
import { HeaderNav, Logo, Menu } from '../styles/headerStyles'
import { Container, Flex } from '../styles/globalStyles'

// context
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'

// custom hook
import useElementPosition from '../hooks/useElementPosition'

const Header = ({onCursor ,setToggleMenu, toggleMenu, hamburgerPosition, setHamburgerPosition}) => {
    const dispatch = useGlobalDispatchContext()
    const { currentTheme } = useGlobalStateContext()
    const hamburger = useRef(null)
    const position = useElementPosition(hamburger)
    
    const menuHover = () => {
        onCursor("locked")
        setHamburgerPosition({x: position.x, y: position.y + 72 })
    }

    const toggleTheme = () => {
        if(currentTheme === 'dark') {
            dispatch({type: 'TOGGLE_THEME', theme: 'light'})
        } else {
            dispatch({type: 'TOGGLE_THEME', theme: 'dark'})
        }
    }

    useEffect(() => {
        window.localStorage.setItem('theme', currentTheme)
    }, [currentTheme])

    return (
        <HeaderNav
            animate={{y: 0, opacity: 1}}
            initial={{y: -72, opacity: 0}}
            transition={{duration: 1, ease: [0.6, 0.05, -0.01, 0.9]}}
        >
            <Container>
                <Flex spaceBetween noHeight>
                    <Logo
                        onMouseEnter={() => onCursor('hovered')}
                        onMouseLeave={onCursor}
                    >
                        <Link to='/'>FURR</Link>
                        <span onClick={toggleTheme} onMouseEnter={() => onCursor('pointer')}></span>
                        <Link to='/'>W</Link>
                    </Logo>

                    <Menu 
                    ref={hamburger}
                    onMouseEnter={menuHover}
                    onMouseLeave={onCursor}
                    onClick={() => setToggleMenu(!toggleMenu)}>
                        <button>
                            <span></span>
                            <span></span>
                        </button>
                    </Menu>
                </Flex>
            </Container>
        </HeaderNav>
    )
}

export default Header

