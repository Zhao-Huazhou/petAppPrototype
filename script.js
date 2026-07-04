const historyButton = document.querySelector(".history");
const drawerLayer = document.querySelector(".drawer-layer");
const drawerScrim = document.querySelector(".drawer-scrim");
const newChatButton = document.querySelector(".new-chat");
const viewTabs = document.querySelectorAll("[data-view-target]");
const pageViews = document.querySelectorAll("[data-view]");
const appScreen = document.querySelector(".app-screen");
const addDeviceButton = document.querySelector(".add-device");
const scanBackButton = document.querySelector(".scan-back");
const reptileDeviceButton = document.querySelector(".reptile-device-card");
const monitorBackButton = document.querySelector(".monitor-back");
const messageButton = document.querySelector(".message");
const messageBackButton = document.querySelector(".message-back");
const profileButton = document.querySelector(".profile");
const profileBackButton = document.querySelector(".profile-back");
let activeViewName = "ai";
let returnViewName = "ai";

function setActiveView(viewName) {
  pageViews.forEach((view) => {
    view.classList.toggle("active", view.dataset.view === viewName);
  });

  appScreen?.classList.toggle("scan-mode", viewName === "add-device");
  appScreen?.classList.toggle("monitor-mode", viewName === "reptile-camera");
  appScreen?.classList.toggle("message-mode", viewName === "message");
  appScreen?.classList.toggle("profile-mode", viewName === "profile");
  activeViewName = viewName;

  viewTabs.forEach((tab) => {
    const isActive = tab.dataset.viewTarget === viewName;
    tab.classList.toggle("active", isActive);
    if (isActive) {
      tab.setAttribute("aria-current", "page");
    } else {
      tab.removeAttribute("aria-current");
    }
  });
}

function setDrawerOpen(isOpen) {
  drawerLayer.classList.toggle("is-open", isOpen);
  drawerLayer.setAttribute("aria-hidden", String(!isOpen));
  historyButton.setAttribute("aria-expanded", String(isOpen));
}

viewTabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveView(tab.dataset.viewTarget);
    setDrawerOpen(false);
  });
});

historyButton.addEventListener("click", () => {
  setDrawerOpen(true);
});

drawerScrim.addEventListener("click", () => {
  setDrawerOpen(false);
});

newChatButton.addEventListener("click", () => {
  setDrawerOpen(false);
});

addDeviceButton?.addEventListener("click", () => {
  setActiveView("add-device");
  setDrawerOpen(false);
});

scanBackButton?.addEventListener("click", () => {
  setActiveView("pet");
});

reptileDeviceButton?.addEventListener("click", () => {
  setActiveView("reptile-camera");
  setDrawerOpen(false);
});

monitorBackButton?.addEventListener("click", () => {
  setActiveView("pet");
});

messageButton?.addEventListener("click", () => {
  returnViewName = activeViewName === "message" ? returnViewName : activeViewName;
  setActiveView("message");
  setDrawerOpen(false);
});

messageBackButton?.addEventListener("click", () => {
  setActiveView(returnViewName);
});

profileButton?.addEventListener("click", () => {
  returnViewName = activeViewName === "profile" ? returnViewName : activeViewName;
  setActiveView("profile");
  setDrawerOpen(false);
});

profileBackButton?.addEventListener("click", () => {
  setActiveView(returnViewName);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (appScreen?.classList.contains("message-mode") || appScreen?.classList.contains("profile-mode")) {
      setActiveView(returnViewName);
    } else if (appScreen?.classList.contains("scan-mode") || appScreen?.classList.contains("monitor-mode")) {
      setActiveView("pet");
    } else {
      setDrawerOpen(false);
    }
  }
});
