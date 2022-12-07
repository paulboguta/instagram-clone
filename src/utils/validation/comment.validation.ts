export const validateComment = (comment: string) => {
  if (comment.length < 2 || comment.length > 20) {
    alert("Comment has to be at least 2 characters and maximum 20 characters");
    return false;
  }
  return true;
};
