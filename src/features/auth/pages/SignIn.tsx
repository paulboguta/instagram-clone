import { yupResolver } from "@hookform/resolvers/yup";
import { getCurrentUser } from "features/user/store/currentUserSlice";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/store";
import { ErrorMessage } from "styles/globalStyles";
import { SigninSchema } from "../utils/auth.validation";
import { FormLink } from "../components/Form/FormLink/FormLink";
import { FormInput } from "../components/Form/FormInput/FormInput";
import { Form } from "../components/Form/Form";
import * as Styled from "./AuthStyles.styles";
import { IAuthInputs } from "../auth.types";

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(SigninSchema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isAuthError, setIsAuthError] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IAuthInputs> = async ({ email, password }) => {
    try {
      dispatch(getCurrentUser({ email, password }));
      navigate("/");
    } catch (e) {
      setIsAuthError(true);
    }
  };

  return (
    <Form text="Sign In" onSubmit={onSubmit} handleSubmit={handleSubmit}>
      <Styled.Wrapper>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormInput
              type="text"
              helperText="Email:"
              helperErrorText={errors ? errors?.password?.message : null}
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormInput
              type="password"
              helperText="Password:"
              helperErrorText={errors ? errors?.password?.message : null}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </Styled.Wrapper>
      {isAuthError ? <ErrorMessage>{`User doesn't exist`}</ErrorMessage> : null}
      <FormLink
        text="Don't have account?"
        linkText="Sign Up"
        link="/signup"
      />{" "}
    </Form>
  );
};
