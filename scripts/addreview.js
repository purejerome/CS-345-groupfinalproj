window.addEventListener('load', () => {
  document.getElementById('review-box').classList.toggle('hidden');
  if (localStorage.getItem("reviews") != null && localStorage.getItem("reviews") != "") {
    let array = JSON.parse(localStorage.getItem("reviews"));
    for (let x of array) {
      const temp = document.querySelector('#temp2').content.cloneNode(true);
      const container = temp.querySelector('.profile-container');
      const title = temp.querySelector('.heading');
      const img = temp.querySelector('.img-container img');
      const fig = temp.querySelector('.img-container');
      const deleteButton = document.createElement('button');

      const paragraphContent = x.description;
      const imageUrl = x.image;
      const titleContent = x.title;

      if (titleContent != "") {
        title.textContent = titleContent;
      }

      img.src = imageUrl;

      deleteButton.textContent = "Delete";
      deleteButton.addEventListener('click', (event) => {
        parentParent = event.target.parentNode.parentNode;
        parentParent.removeChild(event.target.parentNode);

        let arrayD = JSON.parse(localStorage.getItem("reviews"));
        console.log('different' + JSON.stringify(x));
        arrayRet = arrayD.filter((item) => JSON.stringify(item) != JSON.stringify(x));
        localStorage.setItem("reviews", JSON.stringify(arrayRet));
      });

      fig.addEventListener('click', () => {
        sessionStorage.setItem('reviewLoad', JSON.stringify(x));
        window.location = 'reviews.html';
      });

      container.appendChild(deleteButton);

      document.getElementById('review-box').appendChild(container);
    }
  }
  document.getElementById('hide').classList.toggle('hidden');
  document.getElementById('review-box').classList.toggle('hidden');
});

document.getElementById('review-form').addEventListener('submit', async function (event) {
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
  const fig = temp.querySelector('.img-container');
  const deleteButton = document.createElement('button');
  let desc = "N/A";

  // Add content to paragraph
  if (titleContent != "") {
    title.textContent = titleContent;
  }
  if (paragraphContent != "") {
    desc = paragraphContent;
  }

  // Check if image URL is provided
  if ((imageUrl != null) && (/\.(jpe?g|png|gif)$/i.test(imageUrl.name))) {
    img.src = await setIMG(imageUrl);
    img.alt = 'Image';
  }
  else {
    img.src = 'images/missing.png';
    console.log(img.src);
    img.alt = 'Image';
  }

  function setIMG(imgU) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        resolve(reader.result);
        console.log(reader.result);
      });
      reader.addEventListener('error', () => {
        resolve(reader.error);
      });
      reader.readAsDataURL(imgU);
    });
  }


  //Create an array of objects to store the reviews in.

  let array = [];
  let obj = {
    title: titleContent,
    image: img.src,
    description: paragraphContent,
  }
  console.log('out' + JSON.stringify(obj));

  if (localStorage.getItem("reviews") != null && localStorage.getItem("reviews") != "") {
    array = JSON.parse(localStorage.getItem("reviews"));
  }
  array.push(obj);
  localStorage.setItem("reviews", JSON.stringify(array));

  // make a delete button
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener('click', (event) => {
    parentParent = event.target.parentNode.parentNode;
    parentParent.removeChild(event.target.parentNode);

    let arrayD = JSON.parse(localStorage.getItem("reviews"));
    console.log('og' + JSON.stringify(obj));
    console.log(arrayD);
    arrayRet = arrayD.filter((item) => JSON.stringify(item) != JSON.stringify(obj));
    console.log(arrayRet);
    localStorage.setItem("reviews", JSON.stringify(arrayRet));
  });

  container.appendChild(deleteButton);

  fig.addEventListener('click', () => {
    sessionStorage.setItem('reviewLoad', JSON.stringify(obj));
    window.location = 'reviews.html';
  });


  // Append paragraph to content div
  document.getElementById('review-box').appendChild(container);

  // Reset form
  document.getElementById('review-form').reset();
});

document.querySelector('#reset-button-box button').addEventListener('click', () => {
  localStorage.setItem("reviews", "");
  document.getElementById('review-box').innerHTML = "";
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
