function imageGallery() {
  const highlight = document.querySelector('.gallery-highlight');
  const previews = document.querySelectorAll('.room-preview img');

  previews.forEach(preview => {
    preview.addEventListener('click', function() {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace('small', 'big');
      highlight.src = bigSrc;
      previews.forEach(preview => preview.classList.remove('room-active'));
      preview.classList.add('room-active');
    })
  })
}
imageGallery();

//Traversy
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;
//first img opacity
imgs[0].style.opacity = opacity;

  imgs.forEach(img => img.addEventListener('click', imgClick));

  function imgClick(e) {
    //reset opacity
    imgs.forEach(img => img.style.opacity = 1);
    //change current image to src of clicked image
    current.src = e.target.src;
    //add fade class
    current.classList.add('fade-in');
    //remove fade-in class after 0.5s
    setTimeout(() => current.classList.remove('fade-in'), 500);
    //change the opacity to opacity var
    e.target.style.opacity = opacity;
  };
