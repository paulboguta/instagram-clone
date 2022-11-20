import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ErrorMessage } from "styles/globalStyles";
import { useNavigate } from "react-router-dom";
import { login } from "features/auth/auth.service";
import { useState } from "react";
import { useAppDispatch } from "hooks/hooks";
import { useFormik } from "formik";
import { SigninSchema } from "features/validation/validation";
import { setCurrentUser } from "store/actions/currentUserActions";

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userExists, setUserExists] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SigninSchema,
    onSubmit: async (values) => {
      const { email, password } = values;

      try {
        const response = await login(email, password);
        dispatch(setCurrentUser(response.user.uid));
        navigate("/dashboard");
      } catch (e) {
        setUserExists(false);
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        style={{ width: 400 }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            helperText={
              formik.errors.email &&
              formik.touched.email && (
                <ErrorMessage>{formik.errors.email}</ErrorMessage>
              )
            }
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.password}
            helperText={
              formik.errors.password &&
              formik.touched.password && (
                <ErrorMessage>{formik.errors.password}</ErrorMessage>
              )
            }
          />
          {!userExists && <ErrorMessage>{`User doesn't exist.`}</ErrorMessage>}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/signup" variant="body2">
                {`Don't have an account? Sign Up`}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
