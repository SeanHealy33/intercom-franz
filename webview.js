const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    // get conversations in 'My Inbox'
    const inbox = document.getElementsByClassName("left-nav__icon-content o__conversations")[0].innerText;

    // set Franz badge
    // inbox =>  unread count
    Franz.setBadge(inbox);
  };

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
