(function () {
  var body = document.body;
  body.style.visibility = "hidden";

  function show() {
    body.style.visibility = "visible";
  }

  function requireLogin() {
    if (!window.netlifyIdentity) {
      show();
      return;
    }

    window.netlifyIdentity.on("init", function (user) {
      if (user) {
        show();
      } else {
        window.netlifyIdentity.open(); // 跳出登入
        show(); // 仍顯示頁面骨架，或改成只顯示登入提示
      }
    });

    window.netlifyIdentity.on("login", function () {
      window.location.reload();
    });

    window.netlifyIdentity.on("logout", function () {
      window.location.reload();
    });
  }

  requireLogin();
})();
