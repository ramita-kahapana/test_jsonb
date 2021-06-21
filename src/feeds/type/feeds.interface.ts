export interface FeedsInterface {
  name: string;
  description: string;
  url: string;
  mediatype: number;
  title: string;
  location: string;
  lng: number;
  lat: number;
  userId: number;
  isdeleted: boolean;
  profilePicture: string;
  videoUrl: string;
  images: string;
  imagePaths: string;
  feedsComment: string;
  commentCount: string;
  likeDislike: {
    likes: number;
    dislikes: number;
    userAction: number;
    translations: { th: { label: string }; en: { label: string } };
  };
  tags:string[];
  multiMedia: object[];
}
