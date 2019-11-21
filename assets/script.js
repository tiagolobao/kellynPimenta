(function(){

  //let fullBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  // document.getElementsByClassName('split-bio')[0].addEventListener('click',function(){
  //   lists = document.getElementsByClassName('split-lists')[0];
  //   lists.classList.toggle('hideOpacity');
  //   setTimeout(function(){
  //     lists.style.display = 'none';
  //   },1000);
  // });

  document.querySelector('#gallery').addEventListener('click',function(){
    location.href = 'https://www.instagram.com/kellynpimentamakeup/';
  });

  window.showText = function() {
    document.querySelector('.split-lists').style['transition-duration'] = '0s';
    document.querySelector('.split-lists').style.display = 'none';
    document.querySelector('#leiaMais').style.display = 'none';
    document.querySelectorAll('.hide-text')[0].style.display = 'block';
    document.querySelectorAll('.hide-text')[1].style.display = 'block';
    document.querySelectorAll('.hide-text')[2].style.display = 'block';
  }

  window.hideText = function() {
    document.querySelectorAll('.hide-text')[1].style.display = 'none';
    document.querySelectorAll('.hide-text')[2].style.display = 'none';
    document.querySelectorAll('.hide-text')[0].style.display = 'none';
    document.querySelector('#leiaMais').style.display = 'unset';
    document.querySelector('.split-lists').style.display = 'unset';
  }

})();
