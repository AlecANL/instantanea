export function PostHeading(id, avatar, username) {
  return `
        <div class="postHeading">
            <div class="postHeading-cover">
                <img
                src="${avatar}"
                width="32"
                height="32"
                alt="${username} avatar"
                data-id="${id}"
                />
                <span>${username}</span>
            </div>
            <button class="button-icon">
                <i class="icon-more"></i>
            </button>
        </div>
    `;
}
