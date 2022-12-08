import {
  Typography,
  Container,
  Box,
  Link,
  FormControlLabel,
  TextField,
  Avatar,
  Checkbox,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ErrorMessage } from "styles/globalStyles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "store/store";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SigninSchema } from "features/auth/utils/auth.validation";
import { getCurrentUser } from "features/user/store/currentUserSlice";

interface ISignInInputs {
  email: string;
  password: string;
}

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isAuthError, setIsAuthError] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(SigninSchema),
  });

  const onSubmit: SubmitHandler<ISignInInputs> = async ({
    email,
    password,
  }) => {
    try {
      dispatch(getCurrentUser({ email, password }));
      navigate("/");
    } catch (e) {
      setIsAuthError(true);
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
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <TextField
                margin="normal"
                required
                fullWidth
                name={name}
                value={value}
                onChange={onChange}
                id="email"
                label="Email Address"
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
          {isAuthError && <ErrorMessage>{`User doesn't exist.`}</ErrorMessage>}
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

          <Link href="/signup" variant="body2">
            {`Don't have an account? Sign Up`}
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
