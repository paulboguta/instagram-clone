import { ChangeEvent, useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useSelector } from "react-redux";
import { useAppDispatch } from "hooks/hooks";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import { RootState } from "../../../store/store";
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
import { addPost } from "../../../store/actions/postActions";

interface IAddPostModalProps {
  onClick(): void;
  onClickConfirm(): void;
}

export const AddPostModal = ({
  onClick,
  onClickConfirm,
}: IAddPostModalProps) => {
  const [image, setImage] = useState<any[]>([]);
  const [imageURL, setImageURL] = useState<any[]>();
  const [description, setDescription] = useState("");
  const maxNumber = 1;
  const currentUser = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );
  const dispatch = useAppDispatch();

  // https://codesandbox.io/s/react-images-uploading-demo-typescript-fr2zm?file=/src/App.tsx:453-1660
  const onChangeImage = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setImage(imageList as any);
  };

  const onChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const onClickConfirmAddPost = () => {
    const url = image.map((url) => {
      return url.dataURL;
    });
    const img = JSON.stringify(url).slice(2, -2);
    onClickConfirm();
    dispatch(addPost(currentUser.uid, img, description));
  };

  return (
    <Wrapper>
      <ButtonClose onClick={onClick}>
        <IconContext.Provider value={{ size: "24px" }}>
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
              {...dragProps}
            >
              Select Image
            </ButtonDrop>
            {imageList.map((image, index) => (
              <div key={index}>
                <Image src={image.dataURL} alt="" width="100" />
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
