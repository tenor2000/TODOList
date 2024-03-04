const FrontPage = {
    init() {
      this.layout();
    },
    layout() {
      const content = document.querySelector('.content')
      const banner = document.createElement('h1');
      banner.textContent = 'Welcome to the ToDo List!';
      banner.classList.add('banner');
      content.appendChild(banner);

    },
};
  
export default FrontPage;

