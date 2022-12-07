import { ChangeEvent, useMemo, useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useSelector } from "react-redux";
import { useAppDispatch } from "hooks/hooks";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import { selectCurrentUser } from "features/user/store/slices/currentUserSlice";
import { ButtonClose } from "../../profile/FollowersModal/FollowersModal.styles";
import { ButtonConfirm } from "../../forms";
import {
  Description,
  Wrapper,
  AddPhotoWrapper,
  Image,
  ButtonDrop,
  ButtonUpdate,
  ButtonRemove,
  FlexButtonUpdateRemove,
} from "./AddPostModal.styles";
import { createPostService } from "features/posts/services/posts.service";
import { createPost } from "features/posts/store/postsSlice";

interface IAddPostModalProps {
  onClick(): void;
  onClickConfirm(): void;
}

export const AddPostModal = ({
  onClick,
  onClickConfirm,
}: IAddPostModalProps) => {
  const [image, setImage] = useState<any[]>([]);
  const [description, setDescription] = useState("");
  const maxNumber = 1;
  const {uid} = useSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  // https://codesandbox.io/s/react-images-uploading-demo-typescript-fr2zm?file=/src/App.tsx:453-1660
  const onChangeImage = (
    imageList: ImageListType
    // addUpdateIndex: number[] | undefined
  ) => {
    setImage(imageList as any);
  };

  const onChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const onClickConfirmAddPost = async () => {
    const url = image.map((link) => {
      return link.dataURL;
    });
    const img = JSON.stringify(url).slice(2, -2);
    onClickConfirm();
    const { postID, username, date } = await createPostService(uid, img, description);

    dispatch(createPost({uid, image: img, description, username, id: postID, date}));
  };

  const IconValue = useMemo(
    () => ({
      size: "24px",
    }),
    []
  );

  return (
    <Wrapper>
      <ButtonClose onClick={onClick}>
        <IconContext.Provider value={IconValue}>
          <AiOutlineClose />
        </IconContext.Provider>
      </ButtonClose>
      <ImageUploading
        multiple
        value={image}
        onChange={onChangeImage}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <AddPhotoWrapper>
            <ButtonDrop
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...dragProps}
            >
              Select Image
            </ButtonDrop>
            {imageList.map((imageItem, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index}>
                <Image src={imageItem.dataURL} alt="" width="100" />
                <FlexButtonUpdateRemove>
                  <ButtonUpdate onClick={() => onImageUpdate(index)}>
                    Update
                  </ButtonUpdate>
                  <ButtonRemove onClick={() => onImageRemove(index)}>
                    Remove
                  </ButtonRemove>
                </FlexButtonUpdateRemove>
              </div>
            ))}
          </AddPhotoWrapper>
        )}
      </ImageUploading>
      <Description>
        <textarea
          placeholder="Your post description..."
          onChange={onChangeDescription}
        />
      </Description>
      <ButtonConfirm onClick={onClickConfirmAddPost} />
    </Wrapper>
  );
};
