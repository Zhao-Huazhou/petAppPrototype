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
const aquariumDeviceButton = document.querySelector(".aquarium-device-card");
const aquariumView = document.querySelector('[data-view="aquarium-camera"]');
const aquariumBackButton = document.querySelector(".aquarium-back");
const aquariumMoreButton = document.querySelector(".aquarium-more");
const aquariumPageTitle = document.querySelector(".aquarium-page-title");
const aquariumPages = document.querySelectorAll("[data-aquarium-page]");
const aquariumTabs = document.querySelectorAll("[data-aquarium-tab]");
const aquariumAnalysisTargets = document.querySelectorAll("[data-analysis-target]");
const aquariumUploadButtons = document.querySelectorAll("[data-analysis-upload]");
const aquariumImageInput = document.querySelector(".aquarium-image-input");
const aquariumVideoInput = document.querySelector(".aquarium-video-input");
const aquariumAnalysisPreview = document.querySelector(".aquarium-analysis-preview");
const aquariumPreviewKind = document.querySelector(".aquarium-preview-kind");
const aquariumPreviewImage = document.querySelector(".aquarium-preview-media img");
const aquariumPreviewVideo = document.querySelector(".aquarium-preview-media video");
const aquariumReportShortcut = document.querySelector(".aquarium-report-shortcut");
const aquariumMyReportsButton = document.querySelector(".aquarium-my-reports");
const aquariumFilterButton = document.querySelector(".aquarium-filter-button");
const aquariumFilterMenu = document.querySelector(".aquarium-report-filter-menu");
const aquariumFilterOptions = document.querySelectorAll("[data-report-filter]");
const aquariumReportEntries = document.querySelectorAll(".aquarium-report-entry");
const aquariumReportEmpty = document.querySelector(".aquarium-report-empty");
const aquariumReportModal = document.querySelector(".aquarium-report-modal");
const aquariumReportModalTitle = document.querySelector("#aquarium-report-modal-title");
const aquariumReportModalSummary = document.querySelector(".aquarium-report-modal-summary");
const aquariumReportModalStatus = document.querySelector(".aquarium-report-modal-status");
const aquariumFeedbackButtons = document.querySelectorAll("[data-aquarium-feedback]");
const aquariumToast = document.querySelector(".aquarium-toast");
const reptileDeviceButton = document.querySelector(".reptile-device-card");
const monitorBackButton = document.querySelector(".monitor-back");
const playbackEntryButton = document.querySelector(".playback-entry-button");
const playbackTopBackButton = document.querySelector(".playback-top-back");
const playbackLiveModeButton = document.querySelector(".playback-live-mode-button");
const playbackTabs = document.querySelectorAll(".playback-tab");
const playbackPanels = document.querySelectorAll(".playback-tab-panel");
const localFileCards = document.querySelectorAll(".local-file-card");
const foodFeatureButton = document.querySelector(".food-feature-card");
const activityFeatureButton = document.querySelector(".activity-feature-card");
const sunFeatureButton = document.querySelector(".sun-feature-card");
const moltFeatureButton = document.querySelector(".molt-feature-card");
const healthReportCard = document.querySelector(".health-report-card");
const diseaseRiskCard = document.querySelector(".disease-risk-card");
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
let activeAquariumPage = "home";
let pendingAquariumAnalysis = "disease";
let aquariumPreviewUrl = "";
let aquariumToastTimer = 0;
const aquariumScrollPositions = {
  home: 0,
  diagnosis: 0,
  reports: 0,
  profile: 0,
};

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
  appScreen?.classList.toggle("aquarium-mode", viewName === "aquarium-camera");
  appScreen?.classList.toggle("monitor-mode", viewName === "reptile-camera" || viewName === "camera-playback");
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

const aquariumPageTitles = {
  home: "AI智养鱼",
  diagnosis: "AI诊断",
  reports: "报告中心",
  profile: "我的",
};

const aquariumAnalysisNames = {
  disease: "疾病检测",
  species: "鱼种识别",
  density: "密度与混养分析",
  behavior: "行为分析",
};

function showAquariumToast(message) {
  if (!aquariumToast) {
    return;
  }

  window.clearTimeout(aquariumToastTimer);
  aquariumToast.textContent = message;
  aquariumToast.classList.add("is-visible");
  aquariumToastTimer = window.setTimeout(() => {
    aquariumToast.classList.remove("is-visible");
  }, 1800);
}

function setAquariumModalOpen(modal, isOpen) {
  modal?.classList.toggle("is-open", isOpen);
  modal?.setAttribute("aria-hidden", String(!isOpen));
}

function closeAquariumAnalysisPreview() {
  setAquariumModalOpen(aquariumAnalysisPreview, false);
  aquariumPreviewVideo?.pause();
  if (aquariumPreviewUrl) {
    URL.revokeObjectURL(aquariumPreviewUrl);
    aquariumPreviewUrl = "";
  }
  if (aquariumPreviewImage) {
    aquariumPreviewImage.removeAttribute("src");
    aquariumPreviewImage.hidden = true;
  }
  if (aquariumPreviewVideo) {
    aquariumPreviewVideo.removeAttribute("src");
    aquariumPreviewVideo.load();
    aquariumPreviewVideo.hidden = true;
  }
}

function closeAquariumReportModal() {
  setAquariumModalOpen(aquariumReportModal, false);
}

function closeAquariumOverlays() {
  closeAquariumAnalysisPreview();
  closeAquariumReportModal();
  aquariumFilterMenu?.toggleAttribute("hidden", true);
  aquariumFilterButton?.setAttribute("aria-expanded", "false");
}

function setAquariumPage(pageName, focusFeature) {
  if (!aquariumPageTitles[pageName]) {
    return;
  }

  if (appScreen) {
    appScreen.scrollTop = 0;
  }

  const currentPage = aquariumView?.querySelector(`[data-aquarium-page="${activeAquariumPage}"]`);
  if (currentPage) {
    aquariumScrollPositions[activeAquariumPage] = currentPage.scrollTop;
  }

  aquariumPages.forEach((page) => {
    const isActive = page.dataset.aquariumPage === pageName;
    page.classList.toggle("active", isActive);
    page.setAttribute("aria-hidden", String(!isActive));
  });

  aquariumTabs.forEach((tab) => {
    const isActive = tab.dataset.aquariumTab === pageName;
    tab.classList.toggle("active", isActive);
    if (isActive) {
      tab.setAttribute("aria-current", "page");
    } else {
      tab.removeAttribute("aria-current");
    }
  });

  activeAquariumPage = pageName;
  if (aquariumPageTitle) {
    aquariumPageTitle.textContent = aquariumPageTitles[pageName];
  }
  aquariumBackButton?.setAttribute("aria-label", pageName === "home" ? "返回设备页面" : "返回 AI 智养鱼首页");

  window.requestAnimationFrame(() => {
    if (appScreen) {
      appScreen.scrollTop = 0;
    }

    const nextPage = aquariumView?.querySelector(`[data-aquarium-page="${pageName}"]`);
    if (!nextPage) {
      return;
    }

    nextPage.scrollTop = aquariumScrollPositions[pageName] ?? 0;
    if (!focusFeature || pageName !== "diagnosis") {
      return;
    }

    const targetCard = nextPage.querySelector(`[data-diagnosis-feature="${focusFeature}"]`);
    if (!targetCard) {
      return;
    }

    targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
    targetCard.classList.add("is-focused");
    window.setTimeout(() => targetCard.classList.remove("is-focused"), 1600);
  });
}

function openAquariumUpload(analysisType) {
  pendingAquariumAnalysis = analysisType;
  const input = analysisType === "behavior" ? aquariumVideoInput : aquariumImageInput;
  if (!input) {
    return;
  }

  input.value = "";
  input.click();
}

function handleAquariumFileSelection(input, mediaType) {
  const file = input?.files?.[0];
  if (!file || !aquariumPreviewKind) {
    return;
  }

  closeAquariumAnalysisPreview();
  aquariumPreviewUrl = URL.createObjectURL(file);
  aquariumPreviewKind.textContent = `${aquariumAnalysisNames[pendingAquariumAnalysis]} · ${file.name}`;

  if (mediaType === "video" && aquariumPreviewVideo) {
    aquariumPreviewVideo.src = aquariumPreviewUrl;
    aquariumPreviewVideo.hidden = false;
  } else if (aquariumPreviewImage) {
    aquariumPreviewImage.src = aquariumPreviewUrl;
    aquariumPreviewImage.hidden = false;
  }

  setAquariumModalOpen(aquariumAnalysisPreview, true);
}

function applyAquariumReportFilter(filterName) {
  let visibleCount = 0;
  aquariumReportEntries.forEach((entry) => {
    if (entry.classList.contains("aquarium-current-report")) {
      return;
    }
    const shouldShow = filterName === "all" || entry.dataset.reportType === filterName;
    entry.toggleAttribute("hidden", !shouldShow);
    visibleCount += shouldShow ? 1 : 0;
  });

  aquariumFilterOptions.forEach((option) => {
    option.classList.toggle("active", option.dataset.reportFilter === filterName);
  });
  aquariumReportEmpty?.toggleAttribute("hidden", visibleCount !== 0);
  aquariumFilterMenu?.toggleAttribute("hidden", true);
  aquariumFilterButton?.setAttribute("aria-expanded", "false");
}

function openAquariumReport(entry) {
  if (!entry || !aquariumReportModalTitle || !aquariumReportModalSummary || !aquariumReportModalStatus) {
    return;
  }

  aquariumReportModalTitle.textContent = entry.dataset.reportTitle ?? "";
  aquariumReportModalSummary.textContent = entry.dataset.reportSummary ?? "";
  aquariumReportModalStatus.textContent = entry.dataset.reportStatus ?? "";
  setAquariumModalOpen(aquariumReportModal, true);
}

aquariumDeviceButton?.addEventListener("click", () => {
  closeAquariumOverlays();
  setAquariumPage("home");
  setActiveView("aquarium-camera");
  setDrawerOpen(false);
});

aquariumBackButton?.addEventListener("click", () => {
  closeAquariumOverlays();
  if (activeAquariumPage === "home") {
    setActiveView("pet");
  } else {
    setAquariumPage("home");
  }
});

aquariumMoreButton?.addEventListener("click", () => {
  showAquariumToast("水族箱摄像头 · 在线");
});

aquariumTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setAquariumPage(tab.dataset.aquariumTab);
  });
});

aquariumAnalysisTargets.forEach((target) => {
  target.addEventListener("click", () => {
    setAquariumPage("diagnosis", target.dataset.analysisTarget);
  });
});

aquariumUploadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openAquariumUpload(button.dataset.analysisUpload);
  });
});

aquariumImageInput?.addEventListener("change", () => {
  handleAquariumFileSelection(aquariumImageInput, "image");
});

aquariumVideoInput?.addEventListener("change", () => {
  handleAquariumFileSelection(aquariumVideoInput, "video");
});

aquariumAnalysisPreview?.querySelectorAll(".aquarium-modal-close, .aquarium-modal-scrim, .aquarium-preview-done").forEach((button) => {
  button.addEventListener("click", closeAquariumAnalysisPreview);
});

aquariumReportShortcut?.addEventListener("click", () => {
  setAquariumPage("reports");
});

aquariumMyReportsButton?.addEventListener("click", () => {
  setAquariumPage("reports");
});

aquariumFilterButton?.addEventListener("click", () => {
  const isOpen = aquariumFilterButton.getAttribute("aria-expanded") === "true";
  aquariumFilterButton.setAttribute("aria-expanded", String(!isOpen));
  aquariumFilterMenu?.toggleAttribute("hidden", isOpen);
});

aquariumFilterOptions.forEach((option) => {
  option.addEventListener("click", () => {
    applyAquariumReportFilter(option.dataset.reportFilter);
  });
});

aquariumReportEntries.forEach((entry) => {
  entry.addEventListener("click", () => openAquariumReport(entry));
  entry.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openAquariumReport(entry);
    }
  });
});

aquariumReportModal?.querySelectorAll(".aquarium-modal-close, .aquarium-modal-scrim, .aquarium-report-done").forEach((button) => {
  button.addEventListener("click", closeAquariumReportModal);
});

aquariumFeedbackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showAquariumToast(button.dataset.aquariumFeedback);
  });
});

reptileDeviceButton?.addEventListener("click", () => {
  setActiveView("reptile-camera");
  setDrawerOpen(false);
});

monitorBackButton?.addEventListener("click", () => {
  setActiveView("pet");
});

playbackEntryButton?.addEventListener("click", () => {
  setActiveView("camera-playback");
  setDrawerOpen(false);
});

playbackTopBackButton?.addEventListener("click", () => {
  setActiveView("reptile-camera");
});

playbackLiveModeButton?.addEventListener("click", () => {
  setActiveView("reptile-camera");
});

playbackTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetPanel = tab.dataset.playbackTab;
    playbackTabs.forEach((button) => {
      const isActive = button === tab;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
    playbackPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.playbackPanel === targetPanel);
    });
  });
});

localFileCards.forEach((card) => {
  card.addEventListener("click", () => {
    localFileCards.forEach((item) => {
      item.classList.toggle("active", item === card);
    });
  });
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

diseaseRiskCard?.addEventListener("click", () => {
  setActiveView("health-detail");
  setDrawerOpen(false);
});

diseaseRiskCard?.addEventListener("keydown", (event) => {
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
    if (aquariumAnalysisPreview?.classList.contains("is-open")) {
      closeAquariumAnalysisPreview();
    } else if (aquariumReportModal?.classList.contains("is-open")) {
      closeAquariumReportModal();
    } else if (aquariumFilterButton?.getAttribute("aria-expanded") === "true") {
      aquariumFilterMenu?.toggleAttribute("hidden", true);
      aquariumFilterButton.setAttribute("aria-expanded", "false");
    } else if (activeViewName === "aquarium-camera") {
      if (activeAquariumPage === "home") {
        setActiveView("pet");
      } else {
        setAquariumPage("home");
      }
    } else if (foodDateDialog?.classList.contains("is-open")) {
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
    } else if (activeViewName === "camera-playback") {
      setActiveView("reptile-camera");
    } else if (appScreen?.classList.contains("scan-mode") || appScreen?.classList.contains("monitor-mode")) {
      setActiveView("pet");
    } else {
      setDrawerOpen(false);
    }
  }
});
