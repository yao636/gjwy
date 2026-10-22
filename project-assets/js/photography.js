/* =========================================================
   高级网页设计I · 图像解决方案
   学号：24001010722  姓名：陈弘毅  班级：24007
   摄影作品在线展示网站 · 交互脚本
   ========================================================= */

(function () {
  "use strict";

  const chen_nav_items = Array.from(document.querySelectorAll("[data-chen-nav]"));
  const chen_nav_names = {
    home: "首页",
    discover: "发现",
    favorites: "收藏",
    mine: "我的"
  };
  const chen_toast = document.querySelector("[data-chen-toast]");
  const chen_gallery = document.querySelector("[data-chen-gallery]");
  const chen_filter_buttons = Array.from(document.querySelectorAll("[data-chen-filter]"));
  const chen_photo_cards = Array.from(document.querySelectorAll("[data-chen-category]"));
  const chen_like_buttons = Array.from(document.querySelectorAll("[data-chen-like]"));
  const chen_share_buttons = Array.from(document.querySelectorAll("[data-chen-share]"));
  const chen_toast_triggers = Array.from(document.querySelectorAll("[data-chen-toast-message]"));
  const chen_scroll_buttons = Array.from(document.querySelectorAll("[data-chen-scroll]"));
  let chen_toast_timer = null;

  function chen_showToast(chen_message) {
    if (!chen_toast) {
      return;
    }
    chen_toast.textContent = chen_message;
    chen_toast.classList.add("chen_toast_show");
    if (chen_toast_timer) {
      window.clearTimeout(chen_toast_timer);
    }
    chen_toast_timer = window.setTimeout(function () {
      chen_toast.classList.remove("chen_toast_show");
    }, 2200);
  }

  function chen_selectNav(chen_item) {
    chen_nav_items.forEach(function (chen_el) {
      const chen_isActive = chen_el === chen_item;
      chen_el.classList.toggle("chen_nav_item_active", chen_isActive);
      if (chen_isActive) {
        chen_el.setAttribute("aria-current", "page");
      } else {
        chen_el.removeAttribute("aria-current");
      }
    });
  }

  chen_nav_items.forEach(function (chen_item) {
    chen_item.addEventListener("click", function () {
      const chen_key = chen_item.getAttribute("data-chen-nav");

      if (chen_key === "publish") {
        chen_showToast("发布作品：选择一张照片上传（演示）");
        return;
      }

      chen_selectNav(chen_item);

      if (chen_key === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        chen_showToast("回到首页");
        return;
      }

      if (chen_key === "discover") {
        if (chen_gallery) {
          chen_gallery.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        chen_showToast("发现更多作品");
        return;
      }

      chen_showToast("已切换到「" + chen_nav_names[chen_key] + "」");
    });
  });

  chen_filter_buttons.forEach(function (chen_button) {
    chen_button.addEventListener("click", function () {
      const chen_value = chen_button.getAttribute("data-chen-filter");

      chen_filter_buttons.forEach(function (chen_el) {
        const chen_isActive = chen_el === chen_button;
        chen_el.classList.toggle("chen_filter_btn_active", chen_isActive);
        chen_el.setAttribute("aria-pressed", String(chen_isActive));
      });

      chen_photo_cards.forEach(function (chen_card) {
        const chen_category = chen_card.getAttribute("data-chen-category");
        const chen_match = chen_value === "all" || chen_category === chen_value;
        chen_card.classList.toggle("chen_photo_card_hidden", !chen_match);
      });

      chen_showToast(chen_value === "all" ? "显示全部作品" : "筛选：" + chen_value);
    });
  });

  chen_like_buttons.forEach(function (chen_button) {
    chen_button.addEventListener("click", function () {
      const chen_liked = chen_button.classList.toggle("chen_liked");
      chen_button.setAttribute("aria-pressed", String(chen_liked));

      const chen_base = Number(chen_button.getAttribute("data-chen-count")) || 0;
      const chen_count = chen_base + (chen_liked ? 1 : 0);
      const chen_count_el = chen_button.querySelector(".chen_photo_like_count");

      if (chen_count_el) {
        chen_count_el.textContent = String(chen_count);
      }

      chen_showToast(chen_liked ? "已加入收藏" : "已取消收藏");
    });
  });

  chen_share_buttons.forEach(function (chen_button) {
    chen_button.addEventListener("click", function () {
      chen_showToast("分享链接已生成（演示）");
    });
  });

  chen_toast_triggers.forEach(function (chen_button) {
    chen_button.addEventListener("click", function () {
      chen_showToast(chen_button.getAttribute("data-chen-toast-message"));
    });
  });

  chen_scroll_buttons.forEach(function (chen_button) {
    chen_button.addEventListener("click", function () {
      const chen_target = chen_button.getAttribute("data-chen-scroll");
      if (chen_target === "gallery" && chen_gallery) {
        chen_gallery.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
