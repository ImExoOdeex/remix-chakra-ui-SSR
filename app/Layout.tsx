import { Box } from "@chakra-ui/react";
import React from "react";

export default function Layout({ children }: any) {

    return (
        <Box display={'grid'} minHeight='100vh' justifyContent={'center'} alignItems='center'>
            {children}
        </Box>
    )
}