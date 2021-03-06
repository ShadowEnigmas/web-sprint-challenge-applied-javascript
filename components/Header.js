// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header = document.createElement('div');
    header.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');

    const heading = document.createElement('h1');

    const temp = document.createElement('span');
    temp.classList.add('temp');

    header.appendChild(date);
    header.appendChild(heading);
    header.appendChild(temp);

    date.textContent = 'MARCH 28, 2020';
    heading.textContent = 'Lambda Times';
    temp.textContent = '98°';

    return header;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
