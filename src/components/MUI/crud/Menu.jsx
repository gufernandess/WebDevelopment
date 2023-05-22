import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';

const Menu = () => {
    return(
        <AppBar> {/*O AppBar é usado para definir uma barra de navegação no topo da página */}
            <Container>
                <Toolbar> {/*O Toolbar é usado para agrupar elementos de navegação (links, botões...). */}
                    <AdbIcon //O AdbIcon é usado para adicionar um ícone de robô.
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
                        MUI CRUD
                    </Typography>
                    <Box
                        sx={{
                            ml: 3,
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "100%",
                        }}
                    >
                        <Button sx={{color: "white"}}>
                            Teachers
                        </Button>
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

export default Menu;