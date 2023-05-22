import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';

const MenuDropDown = () => {

    const [anchorElTeacher, setAnchorElTeacher] = useState(null);

    const handleOpenAnchorElTeacher = (event) => {
        setAnchorElTeacher(event.currentTarget);
    }

    const handleCloseAnchorElTeacher = () => {
        setAnchorElTeacher(null);
    }

    function dropTeacherMenu() {
        return(
            <Box>
                <Button
                    sx={{color: "white", my: 2}}
                    onClick={handleOpenAnchorElTeacher}
                >
                    Teachers
                </Button>
                <Menu
                    anchorEl={anchorElTeacher}
                    open={Boolean(anchorElTeacher)}
                    onClose={handleCloseAnchorElTeacher}
                >
                    <MenuItem
                        onClick={() => {handleCloseAnchorElTeacher()}}
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem
                        onClick={() => {handleCloseAnchorElTeacher()}}
                    >
                        Listar
                    </MenuItem>
                </Menu>
            </Box>
        );
    }

    return(
        <AppBar>
            <Container>
                <Toolbar>
                    <AdbIcon
                        sx={{
                            display: "flex",
                            mr: 2,
                        }}
                    />
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration: "none",
                            color: "white",
                            fontFamily: "Monospace",
                            letterSpacing: 2,
                            fontWeight: 800,
                            width: "100%",
                        }}
                    >
                        DROP CRUD
                    </Typography>
                    <Box
                        sx={{
                            ml: 3,
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "100%",
                        }}
                    >
                        {dropTeacherMenu()}

                        <Button sx={{color: "white"}}>
                            Students
                        </Button>
                        <Button sx={{color: "white"}}>
                            About
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default MenuDropDown;