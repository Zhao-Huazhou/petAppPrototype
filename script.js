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
const foodFeatureButton = document.querySelector(".food-feature-card");
const activityFeatureButton = document.querySelector(".activity-feature-card");
const sunFeatureButton = document.querySelector(".sun-feature-card");
const moltFeatureButton = document.querySelector(".molt-feature-card");
const foodBackButton = document.querySelector(".food-back");
const activityBackButton = document.querySelector(".activity-back");
const sunBackButton = document.querySelector(".sun-back");
const moltBackButton = document.querySelector(".molt-back");
const foodCalendarButtons = document.querySelectorAll(".food-calendar-button");
const foodDayButtons = document.querySelectorAll(".food-day-button");
const foodDateDialog = document.querySelector(".food-date-dialog");
const foodDateScrim = document.querySelector(".food-date-scrim");
const foodDateCloseButton = document.querySelector(".food-date-close");
const foodDateModalButtons = document.querySelectorAll(".food-date-modal [data-food-day]");
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
  appScreen?.classList.toggle(
    "food-mode",
    viewName === "food-detail" || viewName === "activity-detail" || viewName === "sun-detail" || viewName === "molt-detail",
  );
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

const environmentSection = document.querySelector(".environment-section");
const envPrototypeToggle = document.querySelector(".env-prototype-toggle");
const envPrototypeToggleLabel = document.querySelector(".env-prototype-toggle-label");

envPrototypeToggle?.addEventListener("click", () => {
  const hasData = environmentSection?.classList.toggle("env-has-data") ?? false;
  envPrototypeToggle.setAttribute("aria-pressed", String(hasData));
  if (envPrototypeToggleLabel) {
    envPrototypeToggleLabel.textContent = hasData ? "有数据" : "无数据";
  }
});

reptileDeviceButton?.addEventListener("click", () => {
  setActiveView("reptile-camera");
  setDrawerOpen(false);
});

monitorBackButton?.addEventListener("click", () => {
  setActiveView("pet");
});

foodFeatureButton?.addEventListener("click", () => {
  setActiveView("food-detail");
  setDrawerOpen(false);
});

activityFeatureButton?.addEventListener("click", () => {
  setActiveView("activity-detail");
  setDrawerOpen(false);
});

sunFeatureButton?.addEventListener("click", () => {
  setActiveView("sun-detail");
  setDrawerOpen(false);
});

moltFeatureButton?.addEventListener("click", () => {
  setActiveView("molt-detail");
  setDrawerOpen(false);
});

foodBackButton?.addEventListener("click", () => {
  setActiveView("reptile-camera");
});

activityBackButton?.addEventListener("click", () => {
  setActiveView("reptile-camera");
});

sunBackButton?.addEventListener("click", () => {
  setActiveView("reptile-camera");
});

moltBackButton?.addEventListener("click", () => {
  setActiveView("reptile-camera");
});

function setActiveFoodDay(index) {
  foodDayButtons.forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex % 7 === index);
  });
  foodDateModalButtons.forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
  });
}

function setFoodDateDialogOpen(isOpen) {
  foodDateDialog?.classList.toggle("is-open", isOpen);
  foodDateDialog?.setAttribute("aria-hidden", String(!isOpen));
}

foodDayButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    setActiveFoodDay(index % 7);
  });
});

foodCalendarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setFoodDateDialogOpen(true);
  });
});

foodDateScrim?.addEventListener("click", () => {
  setFoodDateDialogOpen(false);
});

foodDateCloseButton?.addEventListener("click", () => {
  setFoodDateDialogOpen(false);
});

foodDateModalButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    setActiveFoodDay(Number(button.dataset.foodDay ?? index));
    setFoodDateDialogOpen(false);
  });
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
    if (foodDateDialog?.classList.contains("is-open")) {
      setFoodDateDialogOpen(false);
    } else if (appScreen?.classList.contains("message-mode") || appScreen?.classList.contains("profile-mode")) {
      setActiveView(returnViewName);
    } else if (appScreen?.classList.contains("food-mode")) {
      setActiveView("reptile-camera");
    } else if (appScreen?.classList.contains("scan-mode") || appScreen?.classList.contains("monitor-mode")) {
      setActiveView("pet");
    } else {
      setDrawerOpen(false);
    }
  }
});
