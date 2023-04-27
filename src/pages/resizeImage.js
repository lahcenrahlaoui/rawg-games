export const resizeImage = (image, size) => {
    const img = image.match("/media/screenshots/")
        ? image.replace(
              "media/screenshots",
              `media/resize/${size}/-/screenshots`
          )
        : image.replace("/media/games/", `/media/resize/${size}/-/games/`);
    return img;
};
