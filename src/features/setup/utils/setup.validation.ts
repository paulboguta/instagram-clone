import * as Yup from "yup";

export const SetupSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Too short")
    .max(16, "Too long")
    .required("Please enter username"),
  bio: Yup.string().max(120, "Too Long!"),
  profilePic: Yup.string().required(),
});
