(function () {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const friendsListContainer = document.getElementById('friends-list-container');
  const friendsList = document.getElementById('friends-list');
  const blockWidth = friendsList.children[0].offsetWidth + parseInt(window.getComputedStyle(friendsList.children[0]).marginLeft);
  let currentIndex = 0;
  const blocksVisible = 8;
  const totalBlocks = friendsList.children.length;

  function updateScroll() {
    friendsListContainer.scroll({
      left: currentIndex * blockWidth,
      behavior: 'smooth'
    });
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateScroll();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalBlocks - blocksVisible) {
      currentIndex++;
      updateScroll();
    }
  });
}());
