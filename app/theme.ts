/* eslint-disable @typescript-eslint/consistent-type-imports */
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
    disableTransitionOnChange: true
}

const styles = {
    global: (props: StyleFunctionProps | Dict<any>) => ({
        body: {
            minH: '100vh',
            bg: mode('#fff', '#000')(props)
        },
    })
}

const theme = extendTheme({
    config, styles,
    fonts: {
        body: `"Poppins", sans-serif`,
    },
})

export default theme