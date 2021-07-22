const scrollToHomeFirstItem = () => {
  const stickyNavBarHeight = document.querySelector(".navbar").offsetHeight;
  const firstItem = document.querySelector(".home .container");

  window.scroll(0, firstItem.offsetTop - stickyNavBarHeight);
};

export default scrollToHomeFirstItem;
