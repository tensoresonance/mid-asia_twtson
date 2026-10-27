(function () {
  var SITE_PASSWORD = "iluvu";
  var KEY = "midasia_ok";

  function unlocked() {
    return sessionStorage.getItem(KEY) === "1";
  }

  function lockScreen() {
    var wrap = document.createElement("div");
    wrap.id = "site-lock";
    wrap.innerHTML =
      '<div class="lock-box">' +
      "<h1>中亞雙人旅行</h1>" +
      "<p>此站僅供同行兩人使用，請輸入密碼</p>" +
      '<input type="password" id="lock-pw" placeholder="密碼" autocomplete="current-password" />' +
      '<button type="button" id="lock-btn">進入</button>' +
      '<p id="lock-err" style="color:#c95a4a;display:none;margin-top:0.5rem">密碼不正確</p>' +
      "</div>";
    document.body.appendChild(wrap);

    var style = document.createElement("style");
    style.textContent =
      "#site-lock{position:fixed;inset:0;z-index:99999;background:#1a1a1a;display:flex;align-items:center;justify-content:center;}" +
      ".lock-box{background:#fff;padding:2rem;border-radius:12px;width:min(360px,92vw);text-align:center;}" +
      ".lock-box h1{margin:0 0 0.5rem;font-size:1.25rem}" +
      ".lock-box p{color:#666;font-size:0.9rem}" +
      "#lock-pw{width:100%;padding:0.6rem;margin:0.75rem 0;border:1px solid #ddd;border-radius:8px;font-size:1rem;box-sizing:border-box}" +
      "#lock-btn{width:100%;padding:0.7rem;border:0;border-radius:8px;background:#e07060;color:#fff;font-weight:600;cursor:pointer}";
    document.head.appendChild(style);

    function tryUnlock() {
      var v = document.getElementById("lock-pw").value;
      if (v === SITE_PASSWORD) {
        sessionStorage.setItem(KEY, "1");
        wrap.remove();
      } else {
        document.getElementById("lock-err").style.display = "block";
      }
    }

    document.getElementById("lock-btn").onclick = tryUnlock;
    document.getElementById("lock-pw").addEventListener("keydown", function (e) {
      if (e.key === "Enter") tryUnlock();
    });
  }

  if (!unlocked()) {
    if (document.body) lockScreen();
    else document.addEventListener("DOMContentLoaded", lockScreen);
  }
})();
