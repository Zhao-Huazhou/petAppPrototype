const historyButton = document.querySelector(".history");
const drawerLayer = document.querySelector(".drawer-layer");
const drawerScrim = document.querySelector(".drawer-scrim");
const newChatButton = document.querySelector(".new-chat");
const viewTabs = document.querySelectorAll("[data-view-target]");
const pageViews = document.querySelectorAll("[data-view]");
const appScreen = document.querySelector(".app-screen");
const addDeviceButton = document.querySelector(".add-device");
const scanBackButton = document.querySelector(".scan-back");
const scanPreviewButton = document.querySelector(".scan-preview");
const wifiBackButton = document.querySelector(".wifi-back");
const wifiPasswordInput = document.querySelector(".wifi-password");
const wifiTogglePasswordButton = document.querySelector(".wifi-toggle-password");
const wifiClearButton = document.querySelector(".wifi-clear");
const wifiSsidInput = document.querySelector(".wifi-ssid");
const wifiNextButton = document.querySelector(".wifi-next");
const linkPetView = document.querySelector('[data-view="link-pet-profile"]');
const linkPetBackButton = document.querySelector(".link-pet-back");
const linkPetPrototypeToggle = document.querySelector(".link-pet-prototype-toggle");
const linkPetPrototypeToggleLabel = document.querySelector(".link-pet-prototype-toggle-label");
const linkPetCards = document.querySelectorAll(".link-pet-card:not(.link-pet-add-card)");
const linkPetAddCard = document.querySelector(".link-pet-add-card");
const linkPetEmptyCreateButton = document.querySelector(".link-pet-empty-create");
const linkPetCompleteButton = document.querySelector(".link-pet-complete");
const createPetBackButton = document.querySelector(".create-pet-back");
const createPetSaveButton = document.querySelector(".create-pet-save");
const createPetGenderButtons = document.querySelectorAll(".create-pet-gender");
const createPetNameInput = document.querySelector(".create-pet-name");
const createPetSpeciesSelect = document.querySelector(".create-pet-species");
const createPetSpeciesCustomField = document.querySelector(".create-pet-species-custom");
const createPetSpeciesNameInput = document.querySelector(".create-pet-species-name");
const createPetBirthdateInput = document.querySelector(".create-pet-birthdate");
const createPetAgeDisplay = document.querySelector(".create-pet-age-display");
const createPetAvatarPreview = document.querySelector(".create-pet-avatar-preview");
const createPetAvatarUploadButton = document.querySelector(".create-pet-avatar-upload");
const createPetAvatarInput = document.querySelector(".create-pet-avatar-input");
const reptileDeviceButton = document.querySelector(".reptile-device-card");
const monitorBackButton = document.querySelector(".monitor-back");
const foodFeatureButton = document.querySelector(".food-feature-card");
const activityFeatureButton = document.querySelector(".activity-feature-card");
const sunFeatureButton = document.querySelector(".sun-feature-card");
const moltFeatureButton = document.querySelector(".molt-feature-card");
const healthReportCard = document.querySelector(".health-report-card");
const envMetricButtons = document.querySelectorAll(".env-detail-entry");
const foodBackButton = document.querySelector(".food-back");
const activityBackButton = document.querySelector(".activity-back");
const sunBackButton = document.querySelector(".sun-back");
const moltBackButton = document.querySelector(".molt-back");
const healthBackButton = document.querySelector(".health-back");
const envBackButton = document.querySelector(".env-back");
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

  appScreen?.classList.toggle(
    "scan-mode",
    viewName === "add-device" ||
      viewName === "wifi-setup" ||
      viewName === "link-pet-profile" ||
      viewName === "create-pet-profile",
  );
  appScreen?.classList.toggle("create-pet-mode", viewName === "create-pet-profile");
  appScreen?.classList.toggle("monitor-mode", viewName === "reptile-camera");
  appScreen?.classList.toggle(
    "food-mode",
    viewName === "food-detail" ||
      viewName === "activity-detail" ||
      viewName === "sun-detail" ||
      viewName === "molt-detail" ||
      viewName === "health-detail" ||
      viewName === "environment-detail",
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

scanPreviewButton?.addEventListener("click", () => {
  setActiveView("wifi-setup");
});

wifiBackButton?.addEventListener("click", () => {
  setActiveView("add-device");
});

wifiTogglePasswordButton?.addEventListener("click", () => {
  const isHidden = wifiPasswordInput?.type === "password";
  if (wifiPasswordInput) {
    wifiPasswordInput.type = isHidden ? "text" : "password";
  }
  wifiTogglePasswordButton?.setAttribute("aria-pressed", String(isHidden));
  wifiTogglePasswordButton?.setAttribute("aria-label", isHidden ? "隐藏密码" : "显示密码");
});

wifiClearButton?.addEventListener("click", () => {
  if (wifiSsidInput) {
    wifiSsidInput.value = "";
    wifiSsidInput.focus();
  }
});

wifiNextButton?.addEventListener("click", () => {
  setActiveView("link-pet-profile");
});

function syncLinkPetCompleteState() {
  const hasSelection = Boolean(linkPetView?.querySelector(".link-pet-card.selected:not(.link-pet-add-card)"));
  if (linkPetCompleteButton) {
    linkPetCompleteButton.disabled = !hasSelection;
  }
}

function setSelectedLinkPetCard(card) {
  linkPetCards.forEach((item) => {
    const isSelected = item === card;
    item.classList.toggle("selected", isSelected);
    item.setAttribute("aria-pressed", String(isSelected));
  });
  syncLinkPetCompleteState();
}

linkPetBackButton?.addEventListener("click", () => {
  setActiveView("wifi-setup");
});

linkPetPrototypeToggle?.addEventListener("click", () => {
  const hasProfiles = linkPetView?.classList.toggle("has-reptile-profiles") ?? false;
  linkPetPrototypeToggle.setAttribute("aria-pressed", String(hasProfiles));
  if (linkPetPrototypeToggleLabel) {
    linkPetPrototypeToggleLabel.textContent = hasProfiles ? "有档案" : "无档案";
  }
  syncLinkPetCompleteState();
});

linkPetCards.forEach((card) => {
  card.addEventListener("click", () => {
    setSelectedLinkPetCard(card);
  });
});

linkPetAddCard?.addEventListener("click", () => {
  setActiveView("create-pet-profile");
});

linkPetEmptyCreateButton?.addEventListener("click", () => {
  setActiveView("create-pet-profile");
});

linkPetCompleteButton?.addEventListener("click", () => {
  if (linkPetCompleteButton.disabled) {
    return;
  }
  setActiveView("pet");
});

createPetBackButton?.addEventListener("click", () => {
  setActiveView("link-pet-profile");
});

createPetGenderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    createPetGenderButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });
  });
});

function formatPetAge(birthDateValue) {
  if (!birthDateValue) {
    return "请选择出生日期";
  }

  const birth = new Date(`${birthDateValue}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (Number.isNaN(birth.getTime()) || birth > today) {
    return "日期无效";
  }

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();

  if (today.getDate() < birth.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years <= 0 && months <= 0) {
    return "不足 1 个月";
  }

  if (years <= 0) {
    return `${months}个月`;
  }

  if (months <= 0) {
    return `${years}岁`;
  }

  return `${years}岁${months}个月`;
}

function syncCreatePetAgeDisplay() {
  if (createPetAgeDisplay) {
    createPetAgeDisplay.textContent = `年龄：${formatPetAge(createPetBirthdateInput?.value ?? "")}`;
  }
}

createPetBirthdateInput?.addEventListener("change", syncCreatePetAgeDisplay);

function syncCreatePetSpeciesCustomField() {
  const showCustom = createPetSpeciesSelect?.value === "其他品种";
  createPetSpeciesCustomField?.toggleAttribute("hidden", !showCustom);
  if (!showCustom && createPetSpeciesNameInput) {
    createPetSpeciesNameInput.value = "";
  }
}

createPetSpeciesSelect?.addEventListener("change", syncCreatePetSpeciesCustomField);

createPetAvatarUploadButton?.addEventListener("click", () => {
  createPetAvatarInput?.click();
});

createPetAvatarInput?.addEventListener("change", () => {
  const file = createPetAvatarInput.files?.[0];
  if (!file || !createPetAvatarPreview) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    if (typeof reader.result !== "string") {
      return;
    }

    createPetAvatarPreview.style.backgroundImage = `url("${reader.result}")`;
    createPetAvatarPreview.classList.remove("is-empty");
  };
  reader.readAsDataURL(file);
});

if (createPetBirthdateInput) {
  createPetBirthdateInput.max = new Date().toISOString().slice(0, 10);
}

syncCreatePetAgeDisplay();

createPetSaveButton?.addEventListener("click", () => {
  linkPetView?.classList.add("has-reptile-profiles");
  linkPetPrototypeToggle?.setAttribute("aria-pressed", "true");
  if (linkPetPrototypeToggleLabel) {
    linkPetPrototypeToggleLabel.textContent = "有档案";
  }
  const firstCard = linkPetCards[0];
  if (firstCard) {
    setSelectedLinkPetCard(firstCard);
  }
  setActiveView("link-pet-profile");
});

syncLinkPetCompleteState();

const monitorScroll = document.querySelector('[data-view="reptile-camera"] .monitor-scroll');
const monitorStatusNotices = document.querySelector(".monitor-status-notices");
const monitorStatusNoticeCloseButtons = document.querySelectorAll(".monitor-status-notice-close");
const envPrototypeToggle = document.querySelector(".monitor-topbar .env-prototype-toggle");
const envPrototypeToggleLabel = document.querySelector(".monitor-topbar .env-prototype-toggle-label");
const envAlertToggle = document.querySelector(".env-alert-toggle");
const envAlertToggleLabel = document.querySelector(".env-alert-toggle .env-prototype-toggle-label");

function syncMonitorStatusNoticeVisibility() {
  const hasData = monitorScroll?.classList.contains("env-has-data");
  const hasAlert = monitorScroll?.classList.contains("env-has-alert");
  const isDismissed = monitorStatusNotices?.classList.contains("is-hidden");
  const shouldShow = Boolean(hasData && hasAlert && !isDismissed);
  monitorStatusNotices?.toggleAttribute("hidden", !shouldShow);
}

function setEnvAlertState(hasAlert) {
  monitorScroll?.classList.toggle("env-has-alert", hasAlert);
  envAlertToggle?.setAttribute("aria-pressed", String(hasAlert));
  if (envAlertToggleLabel) {
    envAlertToggleLabel.textContent = hasAlert ? "有环境异常" : "无环境异常";
  }
  if (hasAlert) {
    monitorStatusNotices?.classList.remove("is-hidden");
    monitorStatusNotices?.querySelector(".monitor-status-notice")?.classList.remove("is-dismissed");
  }
  syncMonitorStatusNoticeVisibility();
}

envPrototypeToggle?.addEventListener("click", () => {
  const hasData = monitorScroll?.classList.toggle("env-has-data") ?? false;
  envPrototypeToggle.setAttribute("aria-pressed", String(hasData));
  if (envPrototypeToggleLabel) {
    envPrototypeToggleLabel.textContent = hasData ? "有环境数据" : "无环境数据";
  }
  if (!hasData) {
    monitorScroll?.classList.remove("env-has-alert");
    envAlertToggle?.setAttribute("aria-pressed", "false");
    if (envAlertToggleLabel) {
      envAlertToggleLabel.textContent = "无环境异常";
    }
  }
  syncMonitorStatusNoticeVisibility();
});

envAlertToggle?.addEventListener("click", () => {
  const hasAlert = !monitorScroll?.classList.contains("env-has-alert");
  setEnvAlertState(hasAlert);
});

function dismissMonitorStatusNotice(notice) {
  notice?.classList.add("is-dismissed");
  monitorStatusNotices?.classList.add("is-hidden");
  syncMonitorStatusNoticeVisibility();
}

monitorStatusNoticeCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    dismissMonitorStatusNotice(button.closest(".monitor-status-notice"));
  });
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

healthReportCard?.addEventListener("click", () => {
  setActiveView("health-detail");
  setDrawerOpen(false);
});

healthReportCard?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setActiveView("health-detail");
    setDrawerOpen(false);
  }
});

envMetricButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!monitorScroll?.classList.contains("env-has-data")) {
      return;
    }
    setActiveView("environment-detail");
    setDrawerOpen(false);
  });
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

healthBackButton?.addEventListener("click", () => {
  setActiveView("reptile-camera");
});

envBackButton?.addEventListener("click", () => {
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
    } else if (activeViewName === "create-pet-profile") {
      setActiveView("link-pet-profile");
    } else if (activeViewName === "link-pet-profile") {
      setActiveView("wifi-setup");
    } else if (activeViewName === "wifi-setup") {
      setActiveView("add-device");
    } else if (appScreen?.classList.contains("scan-mode") || appScreen?.classList.contains("monitor-mode")) {
      setActiveView("pet");
    } else {
      setDrawerOpen(false);
    }
  }
});
