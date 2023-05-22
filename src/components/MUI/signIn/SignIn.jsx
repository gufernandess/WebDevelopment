import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";

const SignIn = () => {
    return(
        <Container maxWidth="xs"> {/* O container fornece um layout que pré-define estilos e margens da aplicação */}
            <Box // O box é um container que pode ser estilizado e serve para abrigar outros componentes (textos, imagens...)
                sx={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    mt: 25, // mt = margin-top
                }}
            >
                <Typography // Usada para exibir textos personalizados
                    component="h1"
                    variant="h5"
                >
                    Sign In
                </Typography>

                <TextField // Usada para exibir campos de texto
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                    label="Email Address"
                    id="email"
                    name="email"
                    type="email"
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="password"
                    id="password"
                    name="password"
                    type="password"
                />

                <Button // Usada para exibir botões
                    fullWidth
                    variant="contained"
                    sx={{ my: 2 }}
                >
                    Sign In
                </Button>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <Link // Usada para exibir links
                    underline="none"
                    href="#"
                    >
                        Forgot password?
                    </Link>

                    <Link
                    underline="none"
                    href="#"
                    >
                        Don't have an account? Sign Up!
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}

export default SignIn;