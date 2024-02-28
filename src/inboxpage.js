const InboxPage = {
    init() {
      this.layout();
    },
    layout() {
      const content = document.querySelector('.content')
      const banner = document.createElement('h1');
      banner.textContent = 'Welcome to your inbox!';
      banner.classList.add('banner');
      content.appendChild(banner);

    },
};
  
export default InboxPage;