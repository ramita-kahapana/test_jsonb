export interface FeedsInterface {
  title: string;

  description: string;

  location: string;

  lng: number;

  lat: number;

  userId: number;

  name: string;

  isdeleted: string;

  profilePicture: string;

  videoUrl: string;

  images: string;

  mediatype: string;

  imagePaths: string;

  feedsComment: string;

  commentCount: string;

  likeDislike: { likes: number; dislikes: number; userAction: number };
}
