export function PostComment(id, image, description) {
  return `
        <div class="postComment">
            <img
                src='${image}'
                width="32"
                height="32"
                alt="${description}"
                data-id='${id}'
            />
            <form aria-label="add comment">
                <input
                placeholder="Agreagar un comentario"
                type="text"
                aria-label="add comment"
                />
            </form>
            <span>Publicar</span>
        </div>
    `;
}
