const viewSection = document.querySelector('.view-section');
const contactsSection = document.querySelector('.contacts-section');

const state = {
  contacts: [],
  selectedContact: null,
};

/* [START] NO NEED TO EDIT */

function getContacts() {
  fetch('http://localhost:3000/contacts')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      state.contacts = data;

      renderContactsList();
    });
}

function renderContactsList() {
  const listEl = document.createElement('ul');
  listEl.className = 'contacts-list';

  for (let i = 0; i < state.contacts.length; i++) {
    const contact = state.contacts[i];
    const listItemEl = renderContactListItem(contact);

    listEl.append(listItemEl);
  }

  contactsSection.append(listEl);
}

function renderAddressSection(address) {
  const containerEl = document.createElement('section');

  const headingEl = document.createElement('h2');
  headingEl.innerText = 'Address';

  containerEl.append(headingEl);

  const streetText = document.createElement('p');
  streetText.innerText = address.street;

  containerEl.append(streetText);

  const cityText = document.createElement('p');
  cityText.innerText = address.city;

  containerEl.append(cityText);

  const postCodeText = document.createElement('p');
  postCodeText.innerText = address.postCode;

  containerEl.append(postCodeText);

  return containerEl;
}

function renderContactView() {
  const contact = state.selectedContact;

  if (!contact) return;

  viewSection.innerHTML = '';

  const containerEl = document.createElement('article');
  containerEl.className = 'center light-shadow address-card';

  const headingEl = document.createElement('h1');

  const fullName = `${contact.firstName} ${contact.lastName}`;
  headingEl.innerText = fullName;

  containerEl.append(headingEl);

  const addressSectionEl = renderAddressSection(contact.address);

  containerEl.append(addressSectionEl);

  viewSection.append(containerEl);
}

/* [END] NO NEED TO EDIT */

function renderContactListItem(contact) {
  const listItemEl = document.createElement('li');

  const headingEl = document.createElement('h3');

  const fullName = `${contact.firstName} ${contact.lastName}`;

  headingEl.innerText = fullName;

  listItemEl.append(headingEl);

  const viewBtn = document.createElement('button');
  viewBtn.className = 'button grey';
  viewBtn.innerText = 'View';

  viewBtn.addEventListener('click', function () {
    state.selectedContact = contact;

    renderContactView();
  });

  listItemEl.append(viewBtn);

  const editBtn = document.createElement('button');
  editBtn.className = 'button blue';
  editBtn.innerText = 'Edit';

  editBtn.addEventListener('click', function () {
    // [TODO] Write Code
  });

  listItemEl.append(editBtn);

  return listItemEl;
}

function listenNewContactButton() {
  const btn = document.querySelector('.new-contact-btn');

  btn.addEventListener('click', function () {
    // [TODO] Write Code
    viewSection.innerHTML = '';
    const contactForm = renderFormEl();

    viewSection.append(contactForm);
  });
}

const createEl = (tag, options = null) => {
  const element = document.createElement(tag);

  options &&
    Object.keys(options).forEach((propKey) => {
      element[propKey] = options[propKey];
    });

  return element;
};

const renderFormEl = () => {
  const formEl = createEl('form');
  formEl.className = 'form-stack light-shadow center contact-form';

  const fromH1El = createEl('h1');
  fromH1El.innerText = 'Create Contact';

  // first name label
  const firstNameLabel = createEl('label', {
    for: 'first-name-input',
  });
  // firstNameLabel.setAttribute('for', 'first-name-input');
  firstNameLabel.innerText = 'First Name:';
  // first name input
  const firstNameInput = createEl('input', {
    id: 'firstname',
    name: 'first-name-input',
  });
  // firstNameInput.setAttribute('id', 'firstname');
  // firstNameInput.setAttribute('name', 'first-name-input', 'type', 'text');
  // labe for last name
  const lastNameLabel = createEl('label');
  lastNameLabel.setAttribute('for', 'last-name-input');
  lastNameLabel.innerText = 'Last Name:';

  // input last name
  const lastNameInput = createEl('input');
  lastNameInput.setAttribute('id', 'lastname');
  lastNameInput.setAttribute('name', 'last-name-input', 'type', 'text');
  // street label
  const streetLabel = createEl('labe');
  streetLabel.setAttribute('for', 'street-input');
  streetLabel.innerText = 'Street:';

  // street input
  const streetInput = createEl('input');
  streetInput.setAttribute('id', 'street-input');
  streetInput.setAttribute('name', 'street', 'type', 'text');

  // city label
  const cityLabel = createEl('label');
  cityLabel.setAttribute('for', 'city-input');
  cityLabel.innerText = 'City:';

  // city input
  const cityInput = createEl('input');
  cityInput.setAttribute('id', 'city-input');
  cityInput.setAttribute('name', 'city', 'type', 'text');

  // postCode label
  const postCodeLabel = createEl('label');
  postCodeLabel.setAttribute('for', 'post-code-input');
  postCodeLabel.innerText = 'Post Code:';

  // postCode input
  const postCodeInput = createEl('input');
  postCodeInput.setAttribute('id', 'post-code-input');
  postCodeInput.setAttribute('name', 'postCode');
  postCodeInput.setAttribute('type', 'text');

  // Checkbox section
  const checkboxSectionEL = createEl('div');
  checkboxSectionEL.setAttribute('class', 'checkbox-section');

  const checkboxInput = createEl('input');
  checkboxInput.setAttribute('id', 'block-checkbox');
  checkboxInput.setAttribute('type', 'checkbox');
  checkboxInput.setAttribute('name', 'block-checkbox');

  // checkbox label

  const checkboxLabel = createEl('label');
  checkboxLabel.setAttribute('for', 'block-checkbox');
  checkboxLabel.innerText = 'Block';

  checkboxSectionEL.append(checkboxInput, checkboxLabel);

  // actions section
  const actionsSection = createEl('div');
  actionsSection.setAttribute('class', 'actions-section');

  actionsSectionBtn = createEl('button');
  actionsSectionBtn.setAttribute('class', 'button blue', 'type', 'submit');
  actionsSectionBtn.innerText = 'Create';

  actionsSection.append(actionsSectionBtn);
  formEl.append(
    fromH1El,
    firstNameLabel,
    firstNameInput,
    lastNameLabel,
    lastNameInput,
    streetLabel,
    streetInput,
    cityLabel,
    cityInput,
    postCodeLabel,
    postCodeInput,
    checkboxSectionEL,
    actionsSection
  );

  // formEl.addEventListener('submit', submitForm)
  // {
  // }

  const submitForm = (event) => {
    event.preventDefault();

    const { firstName, lastName, city, street } = e.value;

    const contact = {
      firstName: firstName.value,
      LastName: lastName.value,
      blockContact: true,
    };
  };
  return formEl;
};

const addContact = () => {
  const form = renderFormEl();

  console.log('I am inside the add contact', form.firstNameInput.value);
};
renderFormEl();
// [TODO] Write Code

function main() {
  listenNewContactButton();
  getContacts();
}

main();
