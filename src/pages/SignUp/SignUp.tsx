import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { LockOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "styles/globalStyles";
import { useFormik } from "formik";
import { login, signup } from "features/auth/auth.service";
import { useAppDispatch } from "hooks/hooks";
import { SignupSchema } from "features/validation/auth.validation";
import { setCurrentUser } from "store/actions/currentUserActions";

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      const { email, password } = values;

      try {
        const response = await signup(email, password);
        if (response.user) {
          const loginResponse = await login(email, password);
          dispatch(setCurrentUser(loginResponse.user.uid));
          navigate("/setup");
        }
      } catch (e) {
        console.log(e);
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
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={formik.handleChange}
                value={formik.values.password}
                helperText={
                  formik.errors.password &&
                  formik.touched.password && (
                    <ErrorMessage>{formik.errors.password}</ErrorMessage>
                  )
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="passwordConfirm"
                label="Password Confirm"
                type="password"
                id="passwordConfirm"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirm}
                helperText={
                  formik.errors.passwordConfirm &&
                  formik.touched.passwordConfirm && (
                    <ErrorMessage>{formik.errors.passwordConfirm}</ErrorMessage>
                  )
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
