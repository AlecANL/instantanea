import { PostHeading } from './PostHeading.js';
import { PostCover } from './PostCover.js';
import { PostDetail } from './PostDetails.js';
import { PostDescription } from './PostDescription.js';
import { PostComment } from './PostComment.js';

export function Post({
  image: { alt, image_id, image_full, likes },
  user: { profile, user_id, ing_username },
}) {
  return `
          <article class="postContent">
            ${PostHeading(user_id, profile, ing_username)}
            ${PostCover(image_full, image_id, alt)}
            ${PostDetail()}
            ${PostDescription(likes)}
            ${PostComment(user_id, profile, ing_username)}
          </article>
    `;
}
