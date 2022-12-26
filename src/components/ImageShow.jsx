import "./ImageShow.css";

function ImageShow({ image }) {
  return (
    <div className="image-card">
      <div className="image-container">
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
      <div className="image-info">
        <p className="image-text">
          <b>Image ID:</b> {image.id}
        </p>
        <p className="image-text">
          <b>Thumbnail size link:</b> {image.urls.thumb}
        </p>
        <p className="image-text">
          <b>Small size link:</b> {image.urls.small}
        </p>
        <p className="image-text">
          <b>Medium size link:</b> {image.urls.regular}
        </p>
        <p className="image-text">
          <b>ull size link:</b>F {image.urls.full}
        </p>
        <p className="image-text">
          <b>Alt description:</b> {image.alt_description}
        </p>
      </div>
    </div>
  );
}

export default ImageShow;

//? Object structure
// {
//   "id": "vWqS1iTz0hg",
//   "created_at": "2021-06-22T19:57:17Z",
//   "updated_at": "2022-12-25T16:19:40Z",
//   "promoted_at": null,
//   "width": 4000,
//   "height": 6000,
//   "color": "#404040",
//   "blur_hash": "LE8E6$ayIUof00ayxuay-;j[Rjay",
//   "description": null,
//   "alt_description": "grayscale photo of acoustic guitar",
//   "urls": {
//       "raw": "https://images.unsplash.com/photo-1624391673156-a7b7f6c5fb12?ixid=MnwzOTI4NDV8MHwxfHNlYXJjaHwxfHxndWl0YXJzfGVufDB8fHx8MTY3MjA0NTgxMw&ixlib=rb-4.0.3",
//       "full": "https://images.unsplash.com/photo-1624391673156-a7b7f6c5fb12?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzOTI4NDV8MHwxfHNlYXJjaHwxfHxndWl0YXJzfGVufDB8fHx8MTY3MjA0NTgxMw&ixlib=rb-4.0.3&q=80",
//       "regular": "https://images.unsplash.com/photo-1624391673156-a7b7f6c5fb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTI4NDV8MHwxfHNlYXJjaHwxfHxndWl0YXJzfGVufDB8fHx8MTY3MjA0NTgxMw&ixlib=rb-4.0.3&q=80&w=1080",
//       "small": "https://images.unsplash.com/photo-1624391673156-a7b7f6c5fb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTI4NDV8MHwxfHNlYXJjaHwxfHxndWl0YXJzfGVufDB8fHx8MTY3MjA0NTgxMw&ixlib=rb-4.0.3&q=80&w=400",
//       "thumb": "https://images.unsplash.com/photo-1624391673156-a7b7f6c5fb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTI4NDV8MHwxfHNlYXJjaHwxfHxndWl0YXJzfGVufDB8fHx8MTY3MjA0NTgxMw&ixlib=rb-4.0.3&q=80&w=200",
//       "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1624391673156-a7b7f6c5fb12"
//   },
//   "links": {
//       "self": "https://api.unsplash.com/photos/vWqS1iTz0hg",
//       "html": "https://unsplash.com/photos/vWqS1iTz0hg",
//       "download": "https://unsplash.com/photos/vWqS1iTz0hg/download?ixid=MnwzOTI4NDV8MHwxfHNlYXJjaHwxfHxndWl0YXJzfGVufDB8fHx8MTY3MjA0NTgxMw",
//       "download_location": "https://api.unsplash.com/photos/vWqS1iTz0hg/download?ixid=MnwzOTI4NDV8MHwxfHNlYXJjaHwxfHxndWl0YXJzfGVufDB8fHx8MTY3MjA0NTgxMw"
//   },
//   "likes": 56,
//   "liked_by_user": false,
//   "current_user_collections": [],
//   "sponsorship": null,
//   "topic_submissions": {},
//   "user": {
//       "id": "iP5bA4FThpc",
//       "updated_at": "2022-11-30T12:32:39Z",
//       "username": "luwadlinbosman",
//       "name": "Luwadlin Bosman",
//       "first_name": "Luwadlin",
//       "last_name": "Bosman",
//       "twitter_username": "luwadlin_bosman",
//       "portfolio_url": null,
//       "bio": "Local photographer ",
//       "location": "Cape Town, South Africa",
//       "links": {
//           "self": "https://api.unsplash.com/users/luwadlinbosman",
//           "html": "https://unsplash.com/@luwadlinbosman",
//           "photos": "https://api.unsplash.com/users/luwadlinbosman/photos",
//           "likes": "https://api.unsplash.com/users/luwadlinbosman/likes",
//           "portfolio": "https://api.unsplash.com/users/luwadlinbosman/portfolio",
//           "following": "https://api.unsplash.com/users/luwadlinbosman/following",
//           "followers": "https://api.unsplash.com/users/luwadlinbosman/followers"
//       },
//       "profile_image": {
//           "small": "https://images.unsplash.com/profile-1629311340440-18a27c462165image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
//           "medium": "https://images.unsplash.com/profile-1629311340440-18a27c462165image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
//           "large": "https://images.unsplash.com/profile-1629311340440-18a27c462165image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
//       },
//       "instagram_username": "luwadlinb",
//       "total_collections": 0,
//       "total_likes": 156,
//       "total_photos": 95,
//       "accepted_tos": true,
//       "for_hire": false,
//       "social": {
//           "instagram_username": "luwadlinb",
//           "portfolio_url": null,
//           "twitter_username": "luwadlin_bosman",
//           "paypal_email": null
//       }
//   },
//   "tags": [
//       {
//           "type": "search",
//           "title": "guitar"
//       },
//       {
//           "type": "search",
//           "title": "musical instrument"
//       },
//       {
//           "type": "search",
//           "title": "guitars"
//       }
//   ]
// }
