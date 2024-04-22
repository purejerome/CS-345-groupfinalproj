document.getElementById('review-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get paragraph content and image URL from form
  const paragraphContent = document.getElementById('review-content').value;
  const imageUrl = document.getElementById('image-url').files[0];
  const titleContent = document.getElementById('title-content').value;

  //Get template

  const temp = document.querySelector('#temp2').content.cloneNode(true);
  const container = temp.querySelector('.profile-container');
  const title = temp.querySelector('.heading');
  const img = temp.querySelector('.img-container img');
  const figcap = temp.querySelector('.description');

  // Add content to paragraph
  if (titleContent != "") {
    title.textContent = titleContent;
  }
  if (paragraphContent != "") {
    figcap.textContent = paragraphContent;
  }

  // Check if image URL is provided
  if ((imageUrl != null) && (/\.(jpe?g|png|gif)$/i.test(imageUrl.name))) {
    const reader = new FileReader();
    reader.readAsDataURL(imageUrl);
    reader.addEventListener('load', () => {
      img.src = reader.result;
      img.alt = 'Image';
    });
  }
  else {
    img.src = '../images/missing.png';
  }

  // Append paragraph to content div
  document.getElementById('review-box').appendChild(container);

  // Reset form
  document.getElementById('review-form').reset();
});

document.getElementById("edit-button").addEventListener('submit', function () {
  // Remove the edit button
  document.getElementById('edit-button').toggleAttribute();

  // Create a form with a text area
  const form = document.createElement('form');
  const textBox = document.createElement('textarea');
  const button = document.createElement('button');

  form.id = 'about-you'
  textBox.id = 'about-you-text'

  button.type = 'submit';
  button.textContent = 'Submit Edits';

  button.addEventListener('submit', function () {
    button.toggleAttribute();

    const paragraph = document.getElementById('about-you-paragraph');
    const text = document.getElementById('about-you-text');

    paragraph.value = text.value;

    document.getElementById('edit-button').toggleAttribute();
  });

  form.appendChild(textBox);
  form.appendChild(button);

  document.getElementById('about-you-paragraph').appendChild(form);
})