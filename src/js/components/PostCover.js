export function PostCover(image, id, description) {
  return `
        <div class="postCover">
            <img
                src="${image}"
                alt="${description}"
                height="360"
                width="360"
                data-id='${id}'
            />
        </div>
    `;
}
