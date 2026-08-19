(function () {
    "use strict";

    function initClock() {
        const timeEl = document.getElementById("cyber-live-time");
        const pingEl = document.getElementById("cyber-ping-stat");
        const timeZonePart = new Intl.DateTimeFormat(undefined, { timeZoneName: "short" })
            .formatToParts(new Date())
            .find((part) => part.type === "timeZoneName");
        const timeZone = timeZonePart ? timeZonePart.value : "LOCAL";

        function update() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, "0");
            const day = String(now.getDate()).padStart(2, "0");
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            const ms = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, "0");

            if (timeEl) {
                timeEl.textContent = `${year}.${month}.${day} // ${hours}:${minutes}:${seconds}.${ms} ${timeZone}`;
            }

            if (pingEl && Math.random() < 0.05) {
                const simulatedPing = Math.floor(18 + Math.random() * 15);
                pingEl.textContent = `PING: ${simulatedPing}ms [STABLE]`;
            }
        }

        setInterval(update, 50);
        update();
    }

    function escapeHtml(value) {
        const element = document.createElement("div");
        element.textContent = String(value);
        return element.innerHTML;
    }

    function showCyberNotification(title, message, format) {
        let container = document.querySelector(".cyber-toast-container");
        if (!container) {
            container = document.createElement("div");
            container.className = "cyber-toast-container";
            document.body.appendChild(container);
        }

        const toast = document.createElement("div");
        toast.className = "cyber-toast";
        toast.setAttribute("role", "alert");
        toast.setAttribute("aria-live", "assertive");

        const safeTitle = escapeHtml(title);
        const safeMessage = escapeHtml(message);
        const safeFormat = format ? escapeHtml(format) : "";

        toast.innerHTML = `
            <div class="cyber-toast-header">
                <span>⚡ CYBER_ARCHIVE_TRANSFER.EXE</span>
                <button type="button" class="cyber-toast-close" aria-label="Close Notification">✕</button>
            </div>
            <div class="cyber-toast-body">
                <div style="color: var(--y2k-cyan); font-weight: 700; margin-bottom: 4px;">► [${safeTitle}]</div>
                <div>${safeMessage}</div>
                ${safeFormat ? `<div style="color: var(--y2k-lime); font-size: 0.8rem; margin-top: 4px;">FORMAT: [${safeFormat}] // QUANTUM DECRYPTION 100% COMPLETE</div>` : ""}
            </div>
            <div class="cyber-toast-progress"></div>
        `;

        const closeBtn = toast.querySelector(".cyber-toast-close");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                toast.remove();
            });
        }

        container.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.opacity = "0";
                toast.style.transform = "translateX(100%)";
                toast.style.transition = "all 0.3s ease";
                setTimeout(() => toast.remove(), 300);
            }
        }, 3800);
    }

    function initReleaseAcquisitions() {
        const acquireButtons = document.querySelectorAll("[data-acquire-id]");

        acquireButtons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();

                const releaseId = btn.getAttribute("data-acquire-id") || "CF-000";
                const releaseTitle = btn.getAttribute("data-acquire-title") || "MASTER TAPE";
                const releaseFormat = btn.getAttribute("data-acquire-format") || "FLAC / WAV";
                const originalText = btn.textContent;

                btn.textContent = "✓ MASTER SECURED";
                btn.classList.add("btn-cyber-magenta");

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove("btn-cyber-magenta");
                }, 2000);

                showCyberNotification(
                    `ACQUIRED: ${releaseId} // ${releaseTitle}`,
                    `Encrypted master audio stream unlocked. Master tape added to your local neural cache.`,
                    releaseFormat
                );
            });
        });
    }

    function initTourPasses() {
        const passButtons = document.querySelectorAll("[data-pass-city]");

        passButtons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const city = btn.getAttribute("data-pass-city") || "UNDERGROUND DOME";
                const originalText = btn.textContent;

                btn.textContent = "✓ RESERVED";
                btn.classList.add("btn-cyber-magenta");

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove("btn-cyber-magenta");
                }, 2000);

                showCyberNotification(
                    `TOUR MATRIX PASS // ${city.toUpperCase()}`,
                    `VIP access credentials allocated. Coordinates and argon laser entry key dispatched to terminal buffer.`,
                    "SECTOR CLEARANCE GRANTED"
                );
            });
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        initClock();
        initReleaseAcquisitions();
        initTourPasses();
    });
})();
