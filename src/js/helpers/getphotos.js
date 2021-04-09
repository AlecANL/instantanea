export async function getPhotos() {
  const api = `https://api.unsplash.com/photos/?client_id=7Atx-Rb-KFSRlKg_fzBMaaUSsFImflo9mUXn2J5bET4`;

  const photos = await fetch(`${api}`);
  const response = await photos.json();
  return response.map(user => {
    return {
      image_description: {
        alt: user.alt_description,
        id: user.id,
        likes: user.likes,
        image_thumb: user.urls.thumb,
        image_full: user.urls.full,
        image_raw: user.urls.raw,
      },
      user_description: {
        bio: user.user.bio,
        id: user.user.id,
        ing_username: user.user.instagram_username,
        likes: user.user.links.likes,
        photos: user.user.links.photos,
        profile: user.user.profile_image.large,
      },
    };
  });
}
