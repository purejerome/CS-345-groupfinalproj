document.getElementById('review-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get paragraph content and image URL from form
  const paragraphContent = document.getElementById('review-content').value;
  const imageUrl = document.getElementById('image-url').value;

  // Create paragraph element
  const paragraph = document.createElement('p');

  // Add content to paragraph
  paragraph.textContent = paragraphContent;

  // Check if image URL is provided
  if (imageUrl.trim() !== '') {
    // Create image element
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Image';
    image.style.maxWidth = '100%';

    // Append image to paragraph
    paragraph.appendChild(image);
  }

  // Append paragraph to content div
  document.getElementById('content').appendChild(paragraph);

  // Reset form
  document.getElementById('review-form').reset();
});