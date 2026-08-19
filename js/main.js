/**
 * CYBER FREQUENCY 2000 // JAVASCRIPT ENGINE
 * Real-time Cyber HUD Tickers, Master Tape Release Acquisitions,
 * Tour Matrix Pass Reservations & VIP Guestbook System
 */

(function () {
    "use strict";

    // ==========================================
    // 1. LIVE CYBER CLOCK & PING TICKER
    // ==========================================
    function initClock() {
        const timeEl = document.getElementById("cyber-live-time");
        const pingEl = document.getElementById("cyber-ping-stat");

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
                timeEl.textContent = `${year}.${month}.${day} // ${hours}:${minutes}:${seconds}.${ms} EST`;
            }

            if (pingEl && Math.random() < 0.05) {
                const simulatedPing = Math.floor(18 + Math.random() * 15);
                pingEl.textContent = `PING: ${simulatedPing}ms [STABLE]`;
            }
        }

        setInterval(update, 50);
        update();
    }

    // ==========================================
    // 2. CYBER HUD NOTIFICATION TOAST SYSTEM
    // ==========================================
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

        toast.innerHTML = `
            <div class="cyber-toast-header">
                <span>⚡ CYBER_ARCHIVE_TRANSFER.EXE</span>
                <button type="button" class="cyber-toast-close" aria-label="Close Notification">✕</button>
            </div>
            <div class="cyber-toast-body">
                <div style="color: var(--y2k-cyan); font-weight: 700; margin-bottom: 4px;">► [${title}]</div>
                <div>${message}</div>
                ${format ? `<div style="color: var(--y2k-lime); font-size: 0.8rem; margin-top: 4px;">FORMAT: [${format}] // QUANTUM DECRYPTION 100% COMPLETE</div>` : ""}
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

        // Auto remove after 3.8s
        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.opacity = "0";
                toast.style.transform = "translateX(100%)";
                toast.style.transition = "all 0.3s ease";
                setTimeout(() => toast.remove(), 300);
            }
        }, 3800);
    }

    // ==========================================
    // 3. AUDIO VAULT RELEASE ACQUISITIONS
    // ==========================================
    function initReleaseAcquisitions() {
        const acquireButtons = document.querySelectorAll("[data-acquire-id]");

        acquireButtons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();

                const releaseId = btn.getAttribute("data-acquire-id") || "CF-000";
                const releaseTitle = btn.getAttribute("data-acquire-title") || "MASTER TAPE";
                const releaseFormat = btn.getAttribute("data-acquire-format") || "FLAC / WAV";
                const originalText = btn.textContent;

                // Visual button feedback
                btn.textContent = "✓ MASTER SECURED";
                btn.classList.add("btn-cyber-magenta");

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove("btn-cyber-magenta");
                }, 2000);

                // Show cyber toast
                showCyberNotification(
                    `ACQUIRED: ${releaseId} // ${releaseTitle}`,
                    `Encrypted master audio stream unlocked. Master tape added to your local neural cache.`,
                    releaseFormat
                );
            });
        });
    }

    // ==========================================
    // 4. TOUR MATRIX PASS RESERVATIONS
    // ==========================================
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

    // ==========================================
    // 5. VIP GUESTBOOK CLEARANCE FORM
    // ==========================================
    function initGuestbookForm() {
        const form = document.getElementById("vip-guestbook-form");
        const statusMsg = document.getElementById("form-status-feedback");

        if (!form) return;

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const aliasInput = document.getElementById("cyber-alias");
            const emailInput = document.getElementById("cyber-email");
            const levelSelect = document.getElementById("clearance-level");
            const messageInput = document.getElementById("cyber-msg");

            const alias = aliasInput ? aliasInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const level = levelSelect ? levelSelect.value : "LEVEL-1";
            const message = messageInput ? messageInput.value.trim() : "";

            if (!alias || !email || !message) {
                if (statusMsg) {
                    statusMsg.className = "form-status-msg error";
                    statusMsg.innerHTML = "► ERROR: ALL CYBER CLEARANCE FIELDS REQUIRED!";
                }
                return;
            }

            // Simulate Successful Encrypted Transmission
            if (statusMsg) {
                statusMsg.className = "form-status-msg success";
                statusMsg.innerHTML = `► TRANSMISSION CONFIRMED // WELCOME AGENT [${alias.toUpperCase()}] // ${level} // ACCESS KEY SENT TO ${email}`;
            }

            showCyberNotification(
                `VIP CLEARANCE GRANTED // AGENT ${alias.toUpperCase()}`,
                `Secure handshake confirmed. Neural connection established with Cyber Frequency Sound Labs.`,
                level
            );

            form.reset();
        });
    }

    // ==========================================
    // INITIALIZATION ON DOM READY
    // ==========================================
    document.addEventListener("DOMContentLoaded", () => {
        initClock();
        initReleaseAcquisitions();
        initTourPasses();
        initGuestbookForm();
    });
})();
