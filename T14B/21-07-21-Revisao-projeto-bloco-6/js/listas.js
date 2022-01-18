const textBtn = document.getElementById('text-btn');
const imageBtn = document.getElementById('image-btn');

function createText() {
  const inputText = document.getElementById('input-text');
  if (inputText.value.length > 0) {
    const textList = document.getElementById('text-list')
    const textItem = document.createElement('li');
    textItem.innerText = inputText.value;
    textList.appendChild(textItem);
    inputText.value = ''
  }
}

textBtn.addEventListener('click', createText);

function createImage() {
  const inputImage = document.getElementById('input-image');
  if (inputImage.value.length > 0) {
    const imageInserters = document.getElementById('images-inserters')
    const image = document.createElement('img');
    image.classList = 'display-image'
    image.src = inputImage.value;
    imageInserters.appendChild(image);
    inputImage.value = ''
  }
}

imageBtn.addEventListener('click', createImage);

console.log(textBtn);