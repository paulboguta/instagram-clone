export const validateSetup = (
  username: string,
  bio: string,
  profilePic: string
) => {
  if (username.length < 4 || username.length > 16) {
    alert("Wrong username! It has to be from 4 to 16 characters");
    return false;
  }
  if (bio.length > 120) {
    alert("Bio is too long! Maximum is 120 characters.");
    return false;
  }

  if (profilePic === "") {
    alert("You have to choose profile picture!");
    return false;
  }

  return true;
};
