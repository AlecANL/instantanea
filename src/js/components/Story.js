export function Story({ image, user: { user_id, profile, ing_username } }) {
  return `
        <figure class="story">
          <div class="story-cover is-story">
            <img
              src="${profile}"
              width="64"
              height="64"
              alt="${ing_username} user story"
              data-id="${user_id}"
            />
          </div>
          <figcaption class="story-title">
            <span class="ellipsis">${ing_username}</span>
          </figcaption>
        </figure>
        `;
}
