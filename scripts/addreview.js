document.getElementById('review-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get paragraph content and image URL from form
  const paragraphContent = document.getElementById('review-content').value;
  const imageUrl = document.getElementById('image-url').value;
  const titleContent = document.getElementById('title-content').value;

  // Create paragraph element
  const title = document.createElement('h4');
  const figure = document.createElement('figure');
  const figcap = document.createElement('figcaption');

  // Add content to paragraph
  title.textContent = titleContent
  figcap.textContent = paragraphContent;

  // Add the title to h4
  figure.appendChild(title)

  // Check if image URL is provided
  if (imageUrl.trim() !== '') {
    // Create image element
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Image';
    image.style.maxWidth = '100%';

    // Append image to paragraph
    figure.appendChild(image);
  }

  figure.appendChild(figcap)

  // Append paragraph to content div
  document.getElementById('content').appendChild(figure);

  // Reset form
  document.getElementById('review-form').reset();
});

document.getElementById("edit-button").addEventListener('submit', function() {
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

  button.addEventListener('submit', function() {
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