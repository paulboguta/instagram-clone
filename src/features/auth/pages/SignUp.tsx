import { yupResolver } from "@hookform/resolvers/yup";
import { getCurrentUser } from "features/user/store/currentUserSlice";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/store";
import { SigninSchema } from "../utils/auth.validation";
import { FormLink } from "../components/Form/FormLink/FormLink";
import { FormInput } from "../components/Form/FormInput/FormInput";
import { Form } from "../components/Form/Form";
import * as Styled from "./AuthStyles.styles";
import { IAuthInputs } from "../auth.types";
import { signup } from "../services/auth.service";

export const SignUp = () => {
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

  const onSubmit: SubmitHandler<IAuthInputs> = async ({ email, password }) => {
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
    <Form text="Sign Up" onSubmit={onSubmit} handleSubmit={handleSubmit}>
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
      <FormLink
        text="Already have account?"
        linkText="Sign In"
        link="/signin"
      />{" "}
    </Form>
  );
};
