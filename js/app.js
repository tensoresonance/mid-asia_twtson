(function () {
  const TRIP_START = "2026-10-29";
  const TRIP_END = "2026-11-14";

  const DAYS = {
    "2026-10-29": {
      title: "出發日 · 飛往阿拉木圖",
      body: "香港 → 成都 → 阿拉木圖。傍晚入住 Samal apartment（16:00 後）。",
    },
    "2026-10-30": {
      title: "阿拉木圖 Day 2",
      body: "建議：中央清真寺、潘菲洛夫公園、綠色巴扎。可依體力安排科克托別。",
    },
    "2026-10-31": {
      title: "阿拉木圖 · 峽谷與湖一日遊",
      body:
        "GetYourGuide 一日遊：峽谷 + 湖。自備乾糧，行程不包 lunch。<br>" +
        '<a class="act-link" href="https://gyg.me/Q6Q4Uom0" target="_blank" rel="noopener">打開行程詳情（GetYourGuide）</a>',
    },
    "2026-11-01": {
      title: "飛往烏蘭巴托",
      body: "上午退房 → MR412 飛 Ulaanbaatar。入住市中心公寓。",
    },
    "2026-11-02": {
      title: "烏蘭巴托",
      body: "蘇赫巴托爾廣場、國家博物館、市區散步。",
    },
    "2026-11-03": {
      title: "烏蘭巴托 · 沙漠 3 日遊 Day 1",
      body:
        "沙漠騎馬與騎駱駝 3 日遊（11/3–11/5）開始。<br>" +
        '<a class="act-link" href="https://gyg.me/ILHcMszq" target="_blank" rel="noopener">打開行程詳情（GetYourGuide）</a>',
    },
    "2026-11-04": {
      title: "烏蘭巴托 · 沙漠 3 日遊 Day 2",
      body:
        "沙漠行程第二天（騎馬／駱駝依團安排）。<br>" +
        '<a class="act-link" href="https://gyg.me/ILHcMszq" target="_blank" rel="noopener">打開行程詳情（GetYourGuide）</a>',
    },
    "2026-11-05": {
      title: "烏蘭巴托 · 沙漠 3 日遊 Day 3",
      body:
        "沙漠 3 日遊最後一天，返回烏蘭巴托。<br>" +
        '<a class="act-link" href="https://gyg.me/ILHcMszq" target="_blank" rel="noopener">打開行程詳情（GetYourGuide）</a>',
    },
    "2026-11-06": {
      title: "飛往比什凱克",
      body: "UBN → 北京 → BSZ。下午入住 Frunze 公寓。",
    },
    "2026-11-07": {
      title: "比什凱克 · 伊塞克湖與獵鷹 Day 1",
      body:
        "2 日團：Issyk 湖 + 獵鷹（11/7–11/8）第一天。<br>" +
        '<a class="act-link" href="https://gyg.me/t0VudHTz" target="_blank" rel="noopener">打開行程詳情（GetYourGuide）</a>',
    },
    "2026-11-08": {
      title: "比什凱克 · 伊塞克湖與獵鷹 Day 2",
      body:
        "2 日團第二天，返回比什凱克。<br>" +
        '<a class="act-link" href="https://gyg.me/t0VudHTz" target="_blank" rel="noopener">打開行程詳情（GetYourGuide）</a>',
    },
    "2026-11-09": {
      title: "飛塔什干 · Overnight",
      body: "比什凱克 → 塔什干。住 Hampton by Hilton。注意隔日重新托運。",
    },
    "2026-11-10": {
      title: "飛撒馬爾罕",
      body: "上午短程飛 SKD。入住 Zarafshon Parkside。",
    },
    "2026-11-11": {
      title: "撒馬爾罕",
      body: "列吉斯坦、比比哈努姆。",
    },
    "2026-11-12": {
      title: "撒馬爾罕",
      body: "古爾·埃米爾、錫亞布巴扎。",
    },
    "2026-11-13": {
      title: "飛西安 · Overnight",
      body: "撒馬爾罕 → 西安 T5。深夜接機住漢庭。隔日回港。",
    },
    "2026-11-14": {
      title: "回港日",
      body: "CX947 西安 → 香港（公務艙）。",
    },
  };

  function ymd(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + day;
  }

  function daysBetween(a, b) {
    const ms = Date.parse(b + "T00:00:00") - Date.parse(a + "T00:00:00");
    return Math.round(ms / 86400000);
  }

  const today = ymd(new Date());
  const countdownEl = document.getElementById("countdown");
  const todayEl = document.getElementById("today-content");

  if (countdownEl) {
    if (today < TRIP_START) {
      const n = daysBetween(today, TRIP_START);
      countdownEl.textContent = "還有 " + n + " 天出發";
    } else if (today > TRIP_END) {
      countdownEl.textContent = "行程已結束 · 可當旅行回憶翻閱";
    } else {
      countdownEl.textContent = "行程進行中 · 今天是 " + today;
    }
  }

  if (todayEl) {
    const info = DAYS[today];
    if (today < TRIP_START) {
      todayEl.innerHTML =
        "<p><strong>出發前</strong></p><p>出發日 " +
        TRIP_START +
        "。可先查看航班、酒店與緊急聯絡頁。</p><p>第一天預告：" +
        (DAYS[TRIP_START]
          ? DAYS[TRIP_START].title + " — " + DAYS[TRIP_START].body
          : "") +
        "</p>";
    } else if (info) {
      todayEl.innerHTML =
        "<p class='meta'>" +
        today +
        "</p><h3 style='margin:0.2rem 0'>" +
        info.title +
        "</h3><p>" +
        info.body +
        "</p>";
    } else {
      todayEl.innerHTML =
        "<p>今天不在行程表內，或尚未新增當日內容。</p>";
    }
  }
})();