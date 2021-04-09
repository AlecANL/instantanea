export function Story({
  image_description,
  user_description: { profile, ing_username },
}) {
  return `
          <figure>
            <div class="image is-story">
              <img
                src="${profile}"
                alt=""
              />
            </div>
            <figcaption>${ing_username}</figcaption>
          </figure>
        `;
}
