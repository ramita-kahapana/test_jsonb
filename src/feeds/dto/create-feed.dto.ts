export class CreateFeedDto {
  title: string;
  description: string;
  location: string;
  lng: number;
  lat: number;
  userId: number;
  name: string;
  isdeleted: boolean;
  profilePicture: string;
  videoUrl: string;
  images: string;
  mediatype: number;
  likeDislike: {
    likes: number;
    dislikes: number;
    userAction: number;
    translations: { th: { label: string }; en: { label: string } };
  };
  tags: string[];
  imagePaths: string;
  feedsComment: string;
  commentCount: string;
}
