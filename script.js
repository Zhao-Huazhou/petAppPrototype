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
const aquariumDiagnosisCards = document.querySelectorAll("[data-diagnosis-feature]");
const aquariumUploadButtons = document.querySelectorAll("[data-analysis-upload]");
const aquariumImageInput = document.querySelector(".aquarium-image-input");
const aquariumVideoInput = document.querySelector(".aquarium-video-input");
const aquariumAnalysisPreview = document.querySelector(".aquarium-analysis-preview");
const aquariumPreviewKind = document.querySelector(".aquarium-preview-kind");
const aquariumPreviewImage = document.querySelector(".aquarium-preview-media img");
const aquariumPreviewVideo = document.querySelector(".aquarium-preview-media video");
const aquariumCaptureGuide = document.querySelector(".aquarium-capture-guide-text");
const aquariumCaptureMode = document.querySelector(".aquarium-capture-mode");
const aquariumCaptureType = document.querySelector(".aquarium-capture-type strong");
const aquariumCaptureLive = document.querySelector(".aquarium-capture-live");
const aquariumCaptureImage = document.querySelector(".aquarium-capture-image");
const aquariumCaptureVideo = document.querySelector(".aquarium-capture-video");
const aquariumCaptureSelected = document.querySelector(".aquarium-capture-selected");
const aquariumCaptureSelectedName = document.querySelector(".aquarium-capture-selected span");
const aquariumCaptureGallery = document.querySelector(".aquarium-capture-gallery");
const aquariumCaptureShutter = document.querySelector(".aquarium-capture-shutter");
const aquariumCaptureFlash = document.querySelector(".aquarium-capture-flash");
const aquariumCaptureFlip = document.querySelector(".aquarium-capture-flip");
const aquariumCaptureCancel = document.querySelector(".aquarium-capture-cancel");
const aquariumCaptureStart = document.querySelector(".aquarium-capture-start");
const aquariumCaptureCloudNote = document.querySelector(".aquarium-capture-cloud-note");
const aquariumCaptureWarning = document.querySelector(".aquarium-capture-warning");
const aquariumReportShortcut = document.querySelector(".aquarium-report-shortcut");
const aquariumMyReportsButton = document.querySelector(".aquarium-my-reports");
const aquariumFilterButton = document.querySelector(".aquarium-filter-button");
const aquariumFilterMenu = document.querySelector(".aquarium-report-filter-menu");
const aquariumFilterOptions = document.querySelectorAll("[data-report-filter]");
const aquariumReportEntries = document.querySelectorAll(".aquarium-report-entry");
const aquariumReportEmpty = document.querySelector(".aquarium-report-empty");
const aquariumFullReportButton = document.querySelector(".aquarium-full-report-button");
const aquariumDestinationButtons = document.querySelectorAll("[data-aquarium-destination]");
const aquariumReportRetest = document.querySelector(".aquarium-report-retest");
const aquariumReportConsult = document.querySelector(".aquarium-report-consult");
const aquariumReportDiseaseButtons = document.querySelectorAll(".aquarium-report-disease, .aquarium-report-disease-cta");
const aquariumKnowledgeSearch = document.querySelector(".aquarium-knowledge-search input");
const aquariumKnowledgeFilters = document.querySelectorAll("[data-knowledge-filter]");
const aquariumKnowledgeCards = document.querySelectorAll("[data-knowledge-category]");
const aquariumKnowledgeDetailButtons = document.querySelectorAll("[data-knowledge-detail]");
const aquariumKnowledgeEmpty = document.querySelector(".aquarium-knowledge-empty");
const aquariumAssistantForm = document.querySelector(".aquarium-assistant-composer");
const aquariumAssistantInput = document.querySelector("#aquarium-assistant-input");
const aquariumAssistantMessages = document.querySelector(".aquarium-assistant-messages");
const aquariumAssistantSuggestions = document.querySelectorAll(".aquarium-assistant-suggestions button");
const aquariumToast = document.querySelector(".aquarium-toast");
const reptileDeviceButton = document.querySelector(".reptile-device-card");
const monitorBackButton = document.querySelector(".monitor-back");
const playbackTopBackButton = document.querySelector(".playback-top-back");
const cameraSettingsBackButton = document.querySelector(".camera-settings-back");
const cameraAlbumBackButton = document.querySelector(".camera-album-back");
const cameraAlbumSelectButton = document.querySelector(".camera-album-select");
const cameraAlbumView = document.querySelector(".camera-album-view");
const cameraAlbumItems = document.querySelectorAll(".camera-album-item");
const cameraAlbumDeleteButton = document.querySelector(".camera-album-delete");
const cameraAlbumSelectionBar = document.querySelector(".camera-album-selection-bar");
const cameraAlbumEmpty = document.querySelector(".camera-album-empty");
const playbackTabs = document.querySelectorAll(".playback-tab");
const playbackPanels = document.querySelectorAll(".playback-tab-panel");
const localFileCards = document.querySelectorAll(".local-file-card");
const cameraSectionTabs = document.querySelectorAll(".camera-section-tab");
const cameraSectionPanels = document.querySelectorAll(".camera-section-panel");
const cameraSectionDock = document.querySelector(".camera-section-tabs");
const cameraActionButtons = document.querySelectorAll("[data-camera-action]");
const cameraSheetLayer = document.querySelector(".camera-sheet-layer");
const cameraSheets = document.querySelectorAll(".camera-bottom-sheet");
const cameraSheetCloseButtons = document.querySelectorAll(".camera-sheet-close, .camera-sheet-scrim");
const cameraMembershipEntries = document.querySelectorAll(".camera-membership-entry");
const cameraMembershipActivate = document.querySelector(".camera-membership-activate");
const cameraMembershipPlans = document.querySelectorAll(".camera-membership-plan");
const iotAutoModeButton = document.querySelector(".iot-auto-mode");
const iotDeviceButtons = document.querySelectorAll(".iot-device-card");
const iotTargetButtons = document.querySelectorAll("[data-iot-target]");
const iotTargetTitle = document.querySelector(".iot-target-title");
const iotTargetMin = document.querySelector(".iot-target-min");
const iotTargetMax = document.querySelector(".iot-target-max");
const iotTargetStepButtons = document.querySelectorAll("[data-iot-target-bound]");
const iotTargetSave = document.querySelector(".iot-target-save");
const cameraToast = document.querySelector(".camera-toast");

if (cameraSectionDock) {
  appScreen?.append(cameraSectionDock);
}
if (cameraSheetLayer) {
  appScreen?.append(cameraSheetLayer);
}
if (cameraToast) {
  appScreen?.append(cameraToast);
}

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
let activeViewName = "pet";
let returnViewName = "pet";
let activeAquariumPage = "home";
let pendingAquariumAnalysis = "disease";
let aquariumCaptureReturnPage = "diagnosis";
let aquariumPreviewUrl = "";
let aquariumSelectedFile = null;
let aquariumToastTimer = 0;
let cameraMemberState = false;
let activeCameraSection = "care";
let activeIotTarget = "temperature";
const iotTargetState = {
  temperature: { label: "温度", unit: "℃", min: 26, max: 30, floor: 15, ceiling: 40, step: 1 },
  humidity: { label: "湿度", unit: "%", min: 50, max: 70, floor: 20, ceiling: 90, step: 5 },
};
let cameraToastTimer = 0;
const aquariumPageReturnTargets = {};
const aquariumScrollPositions = {
  home: 0,
  diagnosis: 0,
  capture: 0,
  reports: 0,
  "report-detail": 0,
  "care-records": 0,
  knowledge: 0,
  "knowledge-detail": 0,
  assistant: 0,
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
  appScreen?.classList.toggle(
    "monitor-mode",
    viewName === "reptile-camera" ||
      viewName === "camera-playback" ||
      viewName === "camera-settings" ||
      viewName === "camera-album",
  );
  appScreen?.classList.toggle("reptile-camera-mode", viewName === "reptile-camera");
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
const envPrototypeToggle = document.querySelector(".environment-section-title .env-prototype-toggle");
const envPrototypeToggleLabel = document.querySelector(".environment-section-title .env-prototype-toggle-label");

function syncMonitorStatusNoticeVisibility() {
  const hasData = monitorScroll?.classList.contains("env-has-data");
  const hasAlert = monitorScroll?.classList.contains("env-has-alert");
  const isDismissed = monitorStatusNotices?.classList.contains("is-hidden");
  const shouldShow = Boolean(hasData && hasAlert && !isDismissed);
  monitorStatusNotices?.toggleAttribute("hidden", !shouldShow);
}

function setEnvironmentDataState(hasData) {
  monitorScroll?.classList.toggle("env-has-data", hasData);
  envPrototypeToggle?.setAttribute("aria-pressed", String(hasData));
  if (envPrototypeToggleLabel) {
    envPrototypeToggleLabel.textContent = hasData ? "有环境数据" : "无环境数据";
  }
  if (!hasData) {
    monitorScroll?.classList.remove("env-has-alert");
  }
  syncMonitorStatusNoticeVisibility();
}

envPrototypeToggle?.addEventListener("click", () => {
  const hasData = !(monitorScroll?.classList.contains("env-has-data") ?? false);
  setEnvironmentDataState(hasData);
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
  capture: "拍照分析",
  reports: "报告中心",
  "report-detail": "完整报告",
  "care-records": "养护记录",
  knowledge: "养鱼知识库",
  "knowledge-detail": "知识详情",
  assistant: "AI智养管家",
  profile: "我的",
};

const aquariumAnalysisNames = {
  disease: "疾病检测",
  species: "鱼种识别",
  density: "密度与混养分析",
  behavior: "行为分析",
};

const aquariumCaptureConfigs = {
  disease: {
    name: "疾病检测",
    guide: "对准疑似病鱼体表 · 光线充足 / 水面平静",
    cloudNote: "照片上传至云端 AI 推理，预计 5–10 秒生成当次分析报告。",
    warningLead: "本分析基于照片 AI 推理，以下因素可能影响准确性：",
    fileKind: "照片",
  },
  species: {
    name: "鱼种识别",
    guide: "对准鱼缸全景 · 确保鱼只清晰完整",
    cloudNote: "照片上传至云端 AI 推理，预计 5–10 秒识别鱼种与数量。",
    warningLead: "本分析基于照片 AI 推理，以下因素可能影响准确性：",
    fileKind: "照片",
  },
  density: {
    name: "密度与混养分析",
    guide: "完整拍摄鱼缸 · 尽量拍全所有鱼只",
    cloudNote: "照片上传至云端 AI 推理，将结合鱼缸水量计算密度与混养风险。",
    warningLead: "本分析基于照片 AI 推理，以下因素可能影响准确性：",
    fileKind: "照片",
  },
  behavior: {
    name: "行为分析",
    guide: "保持镜头稳定 · 连续录制鱼只游动 10 秒",
    cloudNote: "视频上传至云端 AI 推理，预计 5–10 秒识别异常行为及疾病风险。",
    warningLead: "本分析基于 10 秒视频 AI 推理，以下因素可能影响准确性：",
    fileKind: "视频",
  },
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

function clearAquariumCaptureSelection() {
  closeAquariumAnalysisPreview();
  aquariumCaptureVideo?.pause();

  if (aquariumPreviewUrl) {
    URL.revokeObjectURL(aquariumPreviewUrl);
    aquariumPreviewUrl = "";
  }

  aquariumSelectedFile = null;
  if (aquariumCaptureImage) {
    aquariumCaptureImage.removeAttribute("src");
    aquariumCaptureImage.hidden = true;
  }
  if (aquariumCaptureVideo) {
    aquariumCaptureVideo.removeAttribute("src");
    aquariumCaptureVideo.load();
    aquariumCaptureVideo.hidden = true;
  }
  if (aquariumCaptureLive) {
    aquariumCaptureLive.hidden = false;
  }
  if (aquariumCaptureSelected) {
    aquariumCaptureSelected.hidden = true;
  }
  if (aquariumCaptureSelectedName) {
    aquariumCaptureSelectedName.textContent = "";
  }
  aquariumCaptureStart?.classList.remove("has-media");
}

function configureAquariumCapture(analysisType) {
  const config = aquariumCaptureConfigs[analysisType] ?? aquariumCaptureConfigs.disease;
  pendingAquariumAnalysis = analysisType;

  if (aquariumCaptureGuide) {
    aquariumCaptureGuide.textContent = config.guide;
  }
  if (aquariumCaptureMode) {
    aquariumCaptureMode.textContent = config.name;
  }
  if (aquariumCaptureType) {
    aquariumCaptureType.textContent = config.name;
  }
  if (aquariumCaptureCloudNote) {
    aquariumCaptureCloudNote.textContent = config.cloudNote;
  }
  const warningLead = aquariumCaptureWarning?.querySelector("p");
  if (warningLead) {
    warningLead.textContent = config.warningLead;
  }

  const isVideo = analysisType === "behavior";
  aquariumCaptureShutter?.classList.toggle("is-video", isVideo);
  aquariumCaptureShutter?.setAttribute("aria-label", isVideo ? "录像按钮展示" : "拍照按钮展示");
  aquariumCaptureGallery?.setAttribute("aria-label", isVideo ? "从相册选择视频" : "从相册选择照片");
}

function openAquariumCapture(analysisType, returnPage) {
  clearAquariumCaptureSelection();
  aquariumCaptureReturnPage =
    returnPage ??
    (activeAquariumPage === "home" || activeAquariumPage === "diagnosis"
      ? activeAquariumPage
      : "diagnosis");
  configureAquariumCapture(analysisType);
  setAquariumPage("capture");
}

function closeAquariumOverlays() {
  closeAquariumAnalysisPreview();
  aquariumFilterMenu?.toggleAttribute("hidden", true);
  aquariumFilterButton?.setAttribute("aria-expanded", "false");
}

function getAquariumRootTab(pageName) {
  if (pageName === "capture") {
    return "diagnosis";
  }

  let currentPageName = pageName;
  let depth = 0;
  while (aquariumPageReturnTargets[currentPageName] && depth < 8) {
    currentPageName = aquariumPageReturnTargets[currentPageName];
    depth += 1;
  }

  return ["home", "diagnosis", "reports", "profile"].includes(currentPageName)
    ? currentPageName
    : "home";
}

function openAquariumSubpage(pageName, returnPage = activeAquariumPage) {
  aquariumPageReturnTargets[pageName] = returnPage;
  aquariumScrollPositions[pageName] = 0;
  setAquariumPage(pageName);
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
    const activeTabName = getAquariumRootTab(pageName);
    const isActive = tab.dataset.aquariumTab === activeTabName;
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
  let backLabel = "返回 AI 智养鱼首页";
  if (pageName === "home") {
    backLabel = "返回设备页面";
  } else if (pageName === "capture") {
    backLabel = `返回${aquariumPageTitles[aquariumCaptureReturnPage] ?? "上一页"}`;
  } else if (aquariumPageReturnTargets[pageName]) {
    backLabel = `返回${aquariumPageTitles[aquariumPageReturnTargets[pageName]] ?? "上一页"}`;
  }
  aquariumBackButton?.setAttribute("aria-label", backLabel);

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
  if (!file) {
    return;
  }

  if (aquariumPreviewUrl) {
    URL.revokeObjectURL(aquariumPreviewUrl);
  }

  aquariumCaptureVideo?.pause();
  aquariumSelectedFile = file;
  aquariumPreviewUrl = URL.createObjectURL(file);

  if (aquariumCaptureLive) {
    aquariumCaptureLive.hidden = true;
  }
  if (mediaType === "video" && aquariumCaptureVideo) {
    if (aquariumCaptureImage) {
      aquariumCaptureImage.hidden = true;
      aquariumCaptureImage.removeAttribute("src");
    }
    aquariumCaptureVideo.src = aquariumPreviewUrl;
    aquariumCaptureVideo.hidden = false;
  } else if (aquariumCaptureImage) {
    if (aquariumCaptureVideo) {
      aquariumCaptureVideo.pause();
      aquariumCaptureVideo.hidden = true;
      aquariumCaptureVideo.removeAttribute("src");
    }
    aquariumCaptureImage.src = aquariumPreviewUrl;
    aquariumCaptureImage.hidden = false;
  }

  if (aquariumCaptureSelected && aquariumCaptureSelectedName) {
    aquariumCaptureSelectedName.textContent = file.name;
    aquariumCaptureSelected.hidden = false;
  }
  aquariumCaptureStart?.classList.add("has-media");
}

function openAquariumSelectedPreview() {
  if (!aquariumSelectedFile || !aquariumPreviewUrl || !aquariumPreviewKind) {
    showAquariumToast(`请先拍摄或选择${aquariumCaptureConfigs[pendingAquariumAnalysis].fileKind}`);
    return;
  }

  closeAquariumAnalysisPreview();
  aquariumPreviewKind.textContent = `${aquariumAnalysisNames[pendingAquariumAnalysis]} · ${aquariumSelectedFile.name}`;
  if (pendingAquariumAnalysis === "behavior" && aquariumPreviewVideo) {
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

aquariumDeviceButton?.addEventListener("click", () => {
  closeAquariumOverlays();
  clearAquariumCaptureSelection();
  setAquariumPage("home");
  setActiveView("aquarium-camera");
  setDrawerOpen(false);
});

aquariumBackButton?.addEventListener("click", () => {
  closeAquariumOverlays();
  if (activeAquariumPage === "home") {
    clearAquariumCaptureSelection();
    setActiveView("pet");
  } else if (activeAquariumPage === "capture") {
    clearAquariumCaptureSelection();
    setAquariumPage(aquariumCaptureReturnPage);
  } else if (aquariumPageReturnTargets[activeAquariumPage]) {
    setAquariumPage(aquariumPageReturnTargets[activeAquariumPage]);
  } else {
    setAquariumPage("home");
  }
});

aquariumMoreButton?.addEventListener("click", () => {
  showAquariumToast("水族箱摄像头 · 在线");
});

aquariumTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (activeAquariumPage === "capture") {
      clearAquariumCaptureSelection();
    }
    setAquariumPage(tab.dataset.aquariumTab);
  });
});

aquariumAnalysisTargets.forEach((target) => {
  target.addEventListener("click", () => {
    openAquariumCapture(target.dataset.analysisTarget);
  });
});

aquariumDiagnosisCards.forEach((card) => {
  card.addEventListener("click", () => {
    openAquariumCapture(card.dataset.diagnosisFeature);
  });

  card.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && event.target === card) {
      event.preventDefault();
      openAquariumCapture(card.dataset.diagnosisFeature);
    }
  });
});

aquariumUploadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openAquariumCapture(button.dataset.analysisUpload);
  });
});

aquariumCaptureGallery?.addEventListener("click", () => {
  openAquariumUpload(pendingAquariumAnalysis);
});

aquariumCaptureFlash?.addEventListener("click", () => {
  aquariumCaptureFlash.classList.toggle("active");
  const isActive = aquariumCaptureFlash.classList.contains("active");
  aquariumCaptureFlash.setAttribute("aria-pressed", String(isActive));
  showAquariumToast(isActive ? "闪光灯已开启" : "闪光灯已关闭");
});

aquariumCaptureFlip?.addEventListener("click", () => {
  aquariumCaptureFlip.classList.add("is-rotating");
  showAquariumToast("已切换摄像头");
  window.setTimeout(() => aquariumCaptureFlip.classList.remove("is-rotating"), 420);
});

aquariumCaptureCancel?.addEventListener("click", () => {
  clearAquariumCaptureSelection();
  setAquariumPage(aquariumCaptureReturnPage);
});

aquariumCaptureStart?.addEventListener("click", openAquariumSelectedPreview);

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

aquariumFullReportButton?.addEventListener("click", () => {
  openAquariumSubpage("report-detail", "reports");
});

aquariumDestinationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openAquariumSubpage(button.dataset.aquariumDestination, activeAquariumPage);
  });
});

aquariumReportRetest?.addEventListener("click", () => {
  openAquariumCapture("behavior", "report-detail");
});

aquariumReportConsult?.addEventListener("click", () => {
  openAquariumSubpage("assistant", "report-detail");
});

aquariumReportDiseaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openAquariumCapture("disease", "report-detail");
  });
});

let activeKnowledgeFilter = "all";

function applyAquariumKnowledgeFilter() {
  const query = aquariumKnowledgeSearch?.value.trim().toLocaleLowerCase("zh-CN") ?? "";
  let visibleCount = 0;

  aquariumKnowledgeCards.forEach((card) => {
    const matchesCategory =
      activeKnowledgeFilter === "all" || card.dataset.knowledgeCategory === activeKnowledgeFilter;
    const matchesQuery = !query || card.textContent.toLocaleLowerCase("zh-CN").includes(query);
    const shouldShow = matchesCategory && matchesQuery;
    card.toggleAttribute("hidden", !shouldShow);
    visibleCount += shouldShow ? 1 : 0;
  });

  aquariumKnowledgeEmpty?.toggleAttribute("hidden", visibleCount !== 0);
}

aquariumKnowledgeFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    activeKnowledgeFilter = filter.dataset.knowledgeFilter;
    aquariumKnowledgeFilters.forEach((item) => {
      item.classList.toggle("active", item === filter);
    });
    applyAquariumKnowledgeFilter();
  });
});

aquariumKnowledgeSearch?.addEventListener("input", applyAquariumKnowledgeFilter);

aquariumKnowledgeDetailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openAquariumSubpage("knowledge-detail", "knowledge");
  });
});

function appendAquariumAssistantMessage(message, role) {
  if (!aquariumAssistantMessages) {
    return;
  }

  const bubble = document.createElement("div");
  bubble.className = `aquarium-chat-bubble ${role}`;
  const text = document.createElement("p");
  text.textContent = message;
  bubble.append(text);
  aquariumAssistantMessages.append(bubble);
  bubble.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function sendAquariumAssistantQuestion(message) {
  const question = message.trim();
  if (!question) {
    return;
  }

  appendAquariumAssistantMessage(question, "user");
  if (aquariumAssistantInput) {
    aquariumAssistantInput.value = "";
  }

  window.setTimeout(() => {
    appendAquariumAssistantMessage(
      "建议先检查水温、水质和鱼只体表，再结合行为或疾病检测结果判断。当前为交互原型，暂未接入在线问诊服务。",
      "assistant",
    );
  }, 320);
}

aquariumAssistantForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  sendAquariumAssistantQuestion(aquariumAssistantInput?.value ?? "");
});

aquariumAssistantSuggestions.forEach((button) => {
  button.addEventListener("click", () => {
    sendAquariumAssistantQuestion(button.textContent ?? "");
  });
});

function showCameraToast(message) {
  if (!cameraToast) {
    return;
  }
  window.clearTimeout(cameraToastTimer);
  cameraToast.textContent = message;
  cameraToast.classList.add("is-visible");
  cameraToastTimer = window.setTimeout(() => {
    cameraToast.classList.remove("is-visible");
  }, 1800);
}

function setActiveCameraSection(sectionName) {
  activeCameraSection = sectionName;
  cameraSectionTabs.forEach((tab) => {
    const isActive = tab.dataset.cameraSection === sectionName;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });
  cameraSectionPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.cameraPanel === sectionName);
  });
  monitorScroll?.scrollTo({ top: 0, behavior: "smooth" });
}

function setCameraMemberState(isMember, announce = false) {
  cameraMemberState = isMember;
  appScreen?.classList.toggle("camera-is-member", isMember);
  monitorScroll?.classList.remove("env-has-alert");
  setEnvironmentDataState(true);
  if (announce) {
    showCameraToast(isMember ? "智能陪伴已开启" : "已切换为未订阅演示");
  }
}

function setCameraSheetOpen(sheetName = "") {
  const isOpen = Boolean(sheetName);
  cameraSheetLayer?.classList.toggle("is-open", isOpen);
  cameraSheetLayer?.setAttribute("aria-hidden", String(!isOpen));
  cameraSheets.forEach((sheet) => {
    sheet.classList.toggle("active", sheet.dataset.cameraSheet === sheetName);
  });
}

cameraSectionTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveCameraSection(tab.dataset.cameraSection ?? "care");
  });
});

iotAutoModeButton?.addEventListener("click", () => {
  const isAuto = iotAutoModeButton.getAttribute("aria-pressed") !== "true";
  iotAutoModeButton.setAttribute("aria-pressed", String(isAuto));
  iotAutoModeButton.classList.toggle("active", isAuto);
  const label = iotAutoModeButton.querySelector("span");
  if (label) {
    label.textContent = isAuto ? "自动模式" : "手动模式";
  }
  showCameraToast(isAuto ? "设备控制已切换为自动模式" : "已切换为手动控制");
});

iotDeviceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isOn = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(isOn));
    button.classList.toggle("is-on", isOn);
    const state = button.querySelector(".iot-device-copy small");
    if (state) {
      state.textContent = isOn ? "已开启" : "已关闭";
    }
    showCameraToast(`${button.dataset.iotDevice ?? "设备"}${isOn ? "已开启" : "已关闭"}`);
  });
});

function renderIotTargetSheet() {
  const target = iotTargetState[activeIotTarget];
  if (!target) return;
  if (iotTargetTitle) iotTargetTitle.textContent = `设置${target.label}区间`;
  if (iotTargetMin) iotTargetMin.innerHTML = `${target.min}<small>${target.unit}</small>`;
  if (iotTargetMax) iotTargetMax.innerHTML = `${target.max}<small>${target.unit}</small>`;
}

iotTargetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeIotTarget = button.dataset.iotTarget ?? "temperature";
    renderIotTargetSheet();
    setCameraSheetOpen("iot-target");
  });
});

iotTargetStepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = iotTargetState[activeIotTarget];
    if (!target) return;
    const bound = button.dataset.iotTargetBound;
    const direction = Number(button.dataset.iotTargetDelta ?? 0);
    const change = direction * target.step;
    if (bound === "min") {
      target.min = Math.max(target.floor, Math.min(target.min + change, target.max - target.step));
    } else {
      target.max = Math.min(target.ceiling, Math.max(target.max + change, target.min + target.step));
    }
    renderIotTargetSheet();
  });
});

iotTargetSave?.addEventListener("click", () => {
  const target = iotTargetState[activeIotTarget];
  const card = document.querySelector(`[data-iot-target="${activeIotTarget}"]`);
  const summary = card?.querySelector("em");
  if (!target) return;
  if (summary) summary.textContent = `目标 ${target.min}–${target.max}${target.unit}`;
  setCameraSheetOpen();
  showCameraToast(`${target.label}目标区间已保存`);
});

cameraMembershipEntries.forEach((button) => {
  button.addEventListener("click", () => {
    if (activeViewName !== "reptile-camera" && activeViewName !== "camera-playback") {
      setActiveView("reptile-camera");
      setActiveCameraSection("companion");
    }
    setCameraSheetOpen("membership");
  });
});

cameraMembershipPlans.forEach((plan) => {
  plan.addEventListener("click", () => {
    cameraMembershipPlans.forEach((item) => {
      const isActive = item === plan;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
  });
});

cameraMembershipActivate?.addEventListener("click", () => {
  const openedFromPlayback = activeViewName === "camera-playback";
  setCameraMemberState(true);
  setCameraSheetOpen();
  if (!openedFromPlayback) {
    setActiveCameraSection("companion");
  }
  showCameraToast("摄像头会员已开启");
});

cameraSheetCloseButtons.forEach((button) => {
  button.addEventListener("click", () => setCameraSheetOpen());
});

function toggleCameraFunction(button, action) {
  const nextState = button.getAttribute("aria-pressed") !== "true";
  const stateCopy = button.querySelector(".camera-function-state");
  button.setAttribute("aria-pressed", String(nextState));
  button.classList.toggle("is-active", nextState);

  if (action === "privacy") {
    if (stateCopy) stateCopy.textContent = nextState ? "已开启" : "已关闭";
    showCameraToast(nextState ? "隐私模式已开启，画面已暂停" : "隐私模式已关闭");
  }
}

cameraActionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.cameraAction;
    if (button.classList.contains("is-toggle")) {
      toggleCameraFunction(button, action);
      return;
    }

    if (action === "playback") {
      setActiveView("camera-playback");
      setDrawerOpen(false);
    } else if (action === "album") {
      setActiveView("camera-album");
      setDrawerOpen(false);
    } else if (action === "settings") {
      setActiveCameraSection("care");
      setActiveView("camera-settings");
      setDrawerOpen(false);
    } else if (action === "record") {
      const isActive = button.classList.toggle("is-active");
      showCameraToast(isActive ? "手动录像已开始" : "录像已保存到相册");
    } else if (action === "quality") {
      const isHd = button.textContent.trim() === "高清";
      button.textContent = isHd ? "标清" : "高清";
      showCameraToast(`已切换为${isHd ? "标清" : "高清"}画质`);
    } else if (action === "night") {
      const modes = ["自动", "红外夜视", "星光夜视"];
      const stateCopy = button.querySelector(".camera-function-state");
      const currentIndex = modes.indexOf(stateCopy?.textContent.trim() ?? "自动");
      const nextMode = modes[(currentIndex + 1) % modes.length];
      if (stateCopy) {
        stateCopy.textContent = nextMode;
      }
      showCameraToast(`夜视模式已切换为${nextMode}`);
    } else if (action === "playback-speed") {
      const speeds = ["1.0×", "1.5×", "2.0×", "0.5×"];
      const currentIndex = speeds.indexOf(button.textContent.trim());
      button.textContent = speeds[(currentIndex + 1) % speeds.length];
    } else {
      const messages = {
        fullscreen: "已进入全屏演示",
        snapshot: "截图已保存到相册",
        share: "分享功能演示",
      };
      showCameraToast(messages[action] ?? "功能演示");
    }
  });
});

setCameraMemberState(false);
setActiveCameraSection("care");

reptileDeviceButton?.addEventListener("click", () => {
  setActiveCameraSection("care");
  setActiveView("reptile-camera");
  setDrawerOpen(false);
});

monitorBackButton?.addEventListener("click", () => {
  setActiveView("pet");
});

playbackTopBackButton?.addEventListener("click", () => {
  setActiveCameraSection("care");
  setActiveView("reptile-camera");
});

cameraSettingsBackButton?.addEventListener("click", () => {
  setActiveCameraSection("care");
  setActiveView("reptile-camera");
});

function resetCameraAlbumSelection() {
  cameraAlbumView?.classList.remove("is-selecting");
  cameraAlbumSelectButton?.setAttribute("aria-pressed", "false");
  if (cameraAlbumSelectButton) cameraAlbumSelectButton.textContent = "选择";
  cameraAlbumItems.forEach((item) => {
    item.classList.remove("is-selected");
    item.setAttribute("aria-pressed", "false");
  });
  cameraAlbumDeleteButton?.setAttribute("disabled", "");
  cameraAlbumSelectionBar?.setAttribute("aria-hidden", "true");
}

function updateCameraAlbumSelection() {
  const visibleItems = [...cameraAlbumItems].filter((item) => !item.hidden);
  const selectedItems = visibleItems.filter((item) => item.classList.contains("is-selected"));
  const allSelected = visibleItems.length > 0 && selectedItems.length === visibleItems.length;
  if (cameraAlbumSelectButton) cameraAlbumSelectButton.textContent = allSelected ? "取消全选" : "全选";
  cameraAlbumDeleteButton?.toggleAttribute("disabled", selectedItems.length === 0);
  cameraAlbumDeleteButton?.setAttribute("aria-label", selectedItems.length ? `删除所选 ${selectedItems.length} 张图片` : "删除所选图片");
}

cameraAlbumBackButton?.addEventListener("click", () => {
  if (cameraAlbumView?.classList.contains("is-selecting")) {
    resetCameraAlbumSelection();
    return;
  }
  setActiveCameraSection("care");
  setActiveView("reptile-camera");
});

cameraAlbumSelectButton?.addEventListener("click", () => {
  const isSelecting = cameraAlbumView?.classList.contains("is-selecting");
  if (!isSelecting) {
    cameraAlbumView?.classList.add("is-selecting");
    cameraAlbumSelectButton.setAttribute("aria-pressed", "true");
    cameraAlbumSelectionBar?.setAttribute("aria-hidden", "false");
    updateCameraAlbumSelection();
    return;
  }

  const visibleItems = [...cameraAlbumItems].filter((item) => !item.hidden);
  const shouldSelectAll = visibleItems.some((item) => !item.classList.contains("is-selected"));
  visibleItems.forEach((item) => {
    item.classList.toggle("is-selected", shouldSelectAll);
    item.setAttribute("aria-pressed", String(shouldSelectAll));
  });
  updateCameraAlbumSelection();
});

cameraAlbumItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (!cameraAlbumView?.classList.contains("is-selecting")) return;
    const isSelected = item.getAttribute("aria-pressed") !== "true";
    item.classList.toggle("is-selected", isSelected);
    item.setAttribute("aria-pressed", String(isSelected));
    updateCameraAlbumSelection();
  });
});

cameraAlbumDeleteButton?.addEventListener("click", () => {
  const selectedItems = [...cameraAlbumItems].filter((item) => !item.hidden && item.classList.contains("is-selected"));
  if (!selectedItems.length) return;
  selectedItems.forEach((item) => {
    item.hidden = true;
  });
  const hasVisibleItems = [...cameraAlbumItems].some((item) => !item.hidden);
  cameraAlbumEmpty?.toggleAttribute("hidden", hasVisibleItems);
  resetCameraAlbumSelection();
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
    const panelFileCards = card.closest(".playback-tab-panel")?.querySelectorAll(".local-file-card") ?? [];
    panelFileCards.forEach((item) => {
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
    } else if (aquariumFilterButton?.getAttribute("aria-expanded") === "true") {
      aquariumFilterMenu?.toggleAttribute("hidden", true);
      aquariumFilterButton.setAttribute("aria-expanded", "false");
    } else if (activeViewName === "aquarium-camera") {
      if (activeAquariumPage === "home") {
        clearAquariumCaptureSelection();
        setActiveView("pet");
      } else if (activeAquariumPage === "capture") {
        clearAquariumCaptureSelection();
        setAquariumPage(aquariumCaptureReturnPage);
      } else if (aquariumPageReturnTargets[activeAquariumPage]) {
        setAquariumPage(aquariumPageReturnTargets[activeAquariumPage]);
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
    } else if (activeViewName === "camera-playback" || activeViewName === "camera-settings") {
      setActiveCameraSection("care");
      setActiveView("reptile-camera");
    } else if (appScreen?.classList.contains("scan-mode") || appScreen?.classList.contains("monitor-mode")) {
      setActiveView("pet");
    } else {
      setDrawerOpen(false);
    }
  }
});
