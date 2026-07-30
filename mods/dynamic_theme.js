(() => {
  const THEME_HUE_KEY = "cwctrackThemeHue";
  const THEME_HUE_VAR = "--cwctrack-theme-hue";
  const THEME_STYLE_ID = "cwctrack-dynamic-theme-style";
  const THEME_SETTING_CLASS = "cwctrack-theme-setting";
  const DEFAULT_HUE = 0;
  const MIN_HUE = 0;
  const MAX_HUE = 360;

  const clampHue = value => {
    if (!Number.isFinite(value)) return DEFAULT_HUE;
    return Math.min(MAX_HUE, Math.max(MIN_HUE, Math.round(value)));
  };

  const readStoredHue = () => {
    try {
      return clampHue(Number(localStorage.getItem(THEME_HUE_KEY)));
    } catch (_error) {
      return DEFAULT_HUE;
    }
  };

  const writeStoredHue = hue => {
    try {
      localStorage.setItem(THEME_HUE_KEY, String(hue));
    } catch (_error) {}
  };

  const applyHue = hue => {
    document.documentElement.style.setProperty(THEME_HUE_VAR, `${hue}deg`);
  };

  const ensureThemeStyle = () => {
    if (document.getElementById(THEME_STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = THEME_STYLE_ID;
    style.textContent = `
      :root { ${THEME_HUE_VAR}: 0deg; }
      #screen, #ui, #transition-layer { filter: hue-rotate(var(${THEME_HUE_VAR})); }
      .${THEME_SETTING_CLASS} > input[type="range"] { width: 220px; }
    `;
    document.head.append(style);
  };

  const createSetting = container => {
    if (!container || container.querySelector(`.${THEME_SETTING_CLASS}`)) return;

    const setting = document.createElement("div");
    setting.className = `setting ${THEME_SETTING_CLASS}`;

    const label = document.createElement("p");
    label.textContent = "Theme hue";

    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = String(MIN_HUE);
    slider.max = String(MAX_HUE);
    slider.step = "1";
    slider.value = String(readStoredHue());

    slider.addEventListener("input", () => {
      const hue = clampHue(Number(slider.value));
      applyHue(hue);
      writeStoredHue(hue);
    });

    setting.append(label, slider);
    container.append(setting);
  };

  const run = () => {
    ensureThemeStyle();
    applyHue(readStoredHue());

    let checkQueued = false;
    const checkForSettings = () => {
      checkQueued = false;
      createSetting(document.querySelector(".settings-menu-ui > .container"));
    };
    const queueSettingsCheck = () => {
      if (checkQueued) return;
      checkQueued = true;
      setTimeout(checkForSettings, 100);
    };

    const root = document.getElementById("ui") || document.body;
    const observer = new MutationObserver(queueSettingsCheck);
    observer.observe(root, { childList: true, subtree: true });
    queueSettingsCheck();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
})();
