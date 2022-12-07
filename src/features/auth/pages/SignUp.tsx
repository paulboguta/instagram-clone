import {
  Typography,
  Container,
  Box,
  Link,
  TextField,
  Avatar,
  Button,
  Grid,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "styles/globalStyles";
import { useAppDispatch } from "hooks/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "features/auth/utils/auth.validation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { signup } from "features/auth/services/auth.service";
import { getCurrentUser } from "features/user/store/currentUserSlice";

interface ISignUpInputs {
  email: string;
  password: string;
}

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit: SubmitHandler<ISignUpInputs> = async ({
    email,
    password,
  }) => {
    try {
      const response = await signup(email, password);
      if (response.user) {
        dispatch(getCurrentUser({ email, password }));
        navigate("/setup");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
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
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoComplete="email"
                    helperText={
                      <ErrorMessage>{errors.email?.message}</ErrorMessage>
                    }
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name={name}
                    value={value}
                    onChange={onChange}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    helperText={
                      <ErrorMessage>{errors.password?.message}</ErrorMessage>
                    }
                  />
                )}
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
