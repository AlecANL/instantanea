export function Post({ image_description: { alt, id, image_full, likes } }) {
  return `
            <article class="post-article">
              <div class="post-heading">
                <div class="heading-box">
                  <img
                    class="user"
                    src="https://randomuser.me/api/portraits/women/19.jpg"
                    alt="${alt}"
                  />
                  <span>user </span>
                </div>
                <img src="./src/assets/icons/icon-more.svg" alt="" />
              </div>
              <div class="post-image">
                <img
                  src="${image_full}"
                  alt="${alt}"
                />
              </div>
              <div class="post-description">
                <div class="logos-box">
                  <div class="l-side">
                    <img src="./src/assets/icons/icon-heart.svg" alt="" />
                    <img src="./src/assets/icons/icon-coment.svg" alt="" />
                    <img src="./src/assets/icons/icon-share.svg" alt="" />
                  </div>
                  <div class="r-side">
                    <img
                      class="icon-save"
                      src="./src/assets/icons/icon-save.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="description">
                  <p>${likes} likes</p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Exercitationem non est harum accusantium quas! Fugit dolorum
                    cumque earum numquam voluptatum quae cupiditate, accusamus
                    autem dolor vero soluta eligendi eius alias.
                  </p>
                </div>
                <div class="comment">
                  <img
                    class="user"
                    src="https://randomuser.me/api/portraits/women/19.jpg"
                    alt=""
                  />
                  <input
                    placeholder="Add a comment"
                    type="text"
                    aria-label="add commnet"
                  />
                  <span>Publicar</span>
                </div>
              </div>
            </article>
    `;
}
