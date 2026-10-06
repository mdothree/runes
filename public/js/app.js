import { runes, getRuneById, getRandomRune, castRunes } from './services/database.js';
import { firebaseConfig } from './config/firebase.js';

// API Configuration
const API_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:3006'
  : 'https://runes-api.vercel.app';

let currentSpread = 'single';
let currentRunes = [];
let isPremium = false;

const positions = {
    1: ['Present'],
    3: ['Past', 'Present', 'Future'],
    5: ['Past', 'Present', 'Future', 'Root', 'Crown']
};

const elements = {
    questionInput: document.getElementById('question-input'),
    charCount: document.getElementById('char-count'),
    spreadOptions: document.querySelectorAll('.spread-option'),
    castBtn: document.getElementById('cast-btn'),
    resetBtn: document.getElementById('reset-btn'),
    newReadingBtn: document.getElementById('new-reading-btn'),
    runesDisplay: document.getElementById('runes-display'),
    runesResult: document.getElementById('runes-result'),
    readingSection: document.getElementById('reading-section'),
    runeMeanings: document.getElementById('rune-meanings'),
    runesGrid: document.getElementById('runes-grid'),
    premiumUpsell: document.getElementById('premium-upsell'),
    shareBtn: document.getElementById('share-btn'),
    upgradeBtn: document.getElementById('upgrade-btn'),
    premiumModal: document.getElementById('premium-modal'),
    modalOverlay: document.getElementById('modal-overlay'),
    modalClose: document.getElementById('modal-close'),
    modalSkip: document.getElementById('modal-skip')
};

function init() {
    setupEventListeners();
    renderRunesGrid();
}

function setupEventListeners() {
    elements.questionInput?.addEventListener('input', updateCharCount);
    
    elements.spreadOptions?.forEach(option => {
        option.addEventListener('click', () => {
            if (option.querySelector('.spread-badge.premium')) {
                showPremiumModal();
                return;
            }
            
            elements.spreadOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            currentSpread = option.dataset.spread;
        });
    });
    
    elements.castBtn?.addEventListener('click', cast);
    elements.resetBtn?.addEventListener('click', reset);
    // "Cast Again" in the reading re-casts (it used to only clear the results)
    elements.newReadingBtn?.addEventListener('click', cast);
    elements.shareBtn?.addEventListener('click', shareReading);
    // #upgrade-btn already has onclick="handlePremiumPurchase()" in index.html;
    // a second listener that opened the modal on top of the email prompt was
    // removed (double-bound handler).

    // Pricing "Start Reading" had no handler — take the user to the cast button
    document.getElementById('start-reading-btn')?.addEventListener('click', () => {
        elements.castBtn?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    
    elements.modalOverlay?.addEventListener('click', hidePremiumModal);
    elements.modalClose?.addEventListener('click', hidePremiumModal);
    elements.modalSkip?.addEventListener('click', hidePremiumModal);
}

function showPremiumMessage() {
    showPremiumModal();
}

function showPremiumModal() {
    if (elements.premiumModal) {
        elements.premiumModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function hidePremiumModal() {
    if (elements.premiumModal) {
        elements.premiumModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function updateCharCount() {
    const length = elements.questionInput.value.length;
    elements.charCount.textContent = length;
}

function cast() {
    const count = currentSpread === 'single' ? 1 : 
                  currentSpread === 'three' ? 3 : 5;
    
    currentRunes = castRunes(count);
    showRunes();
}

function showRunes() {
    const count = currentRunes.length;
    const positionNames = positions[count] || ['Position'];
    
    elements.runesResult.innerHTML = `
        <div class="runes-cast">
            ${currentRunes.map((rune, index) => `
                <div class="rune-card">
                    <div class="rune-symbol">${rune.symbol}</div>
                    <div class="rune-name">${rune.name}</div>
                    <div class="rune-phonetic">${rune.phoneticSound}</div>
                    <div class="rune-meaning">${rune.meaning}</div>
                    ${count > 1 ? `<div class="rune-position">${positionNames[index]}</div>` : ''}
                </div>
            `).join('')}
        </div>
    `;
    
    elements.runesDisplay.style.display = 'block';
    
    showReading();
    
    // (The hero "Cast Again" duplicated the still-visible "Cast Runes" button;
    // re-casting is offered under the reading instead.)
    
    elements.runesDisplay.scrollIntoView({ behavior: 'smooth' });
}

function showReading() {
    const question = elements.questionInput?.value || 'Your general question';
    
    elements.runeMeanings.innerHTML = currentRunes.map((rune, index) => `
        <div class="rune-reading">
            <div class="rune-reading-header">
                <div class="rune-symbol">${rune.symbol}</div>
                <div>
                    <h4>${rune.name}</h4>
                    ${currentRunes.length > 1 ? `<span class="rune-position">${positions[currentRunes.length][index]}</span>` : ''}
                </div>
            </div>
            <div class="meaning-block">
                <h4>Core Meaning</h4>
                <p>${rune.upright.meaning}</p>
            </div>
            <div class="meaning-block">
                <h4>Guidance</h4>
                <p>${rune.upright.guidance}</p>
            </div>
            <div class="meaning-block">
                <h4>When Reversed</h4>
                <p>${rune.reversed.meaning}</p>
            </div>
        </div>
    `).join('');
    
    elements.readingSection.style.display = 'block';
    
    if (currentSpread === 'single') {
        elements.premiumUpsell.style.display = 'block';
    } else {
        elements.premiumUpsell.style.display = 'none';
    }
}

function reset() {
    currentRunes = [];
    
    elements.runesDisplay.style.display = 'none';
    elements.readingSection.style.display = 'none';
    elements.resetBtn.style.display = 'none';
    elements.castBtn.style.display = 'inline-block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderRunesGrid() {
    if (!elements.runesGrid) return;
    
    elements.runesGrid.innerHTML = runes.map(r => `
        <div class="rune-grid-card" data-id="${r.id}">
            <div class="symbol">${r.symbol}</div>
            <div class="name">${r.name}</div>
        </div>
    `).join('');
    
    elements.runesGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.rune-grid-card');
        if (card) {
            const id = parseInt(card.dataset.id);
            showQuickRune(id);
        }
    });
}

function showQuickRune(id) {
    const rune = getRuneById(id);
    if (!rune) return;
    
    currentRunes = [rune];
    
    elements.runesResult.innerHTML = `
        <div class="runes-cast">
            <div class="rune-card">
                <div class="rune-symbol">${rune.symbol}</div>
                <div class="rune-name">${rune.name}</div>
                <div class="rune-phonetic">${rune.phoneticSound}</div>
                <div class="rune-meaning">${rune.meaning}</div>
            </div>
        </div>
    `;
    
    elements.runeMeanings.innerHTML = `
        <div class="rune-reading">
            <div class="rune-reading-header">
                <div class="rune-symbol">${rune.symbol}</div>
                <div>
                    <h4>${rune.name}</h4>
                </div>
            </div>
            <div class="meaning-block">
                <h4>Core Meaning</h4>
                <p>${rune.upright.meaning}</p>
            </div>
            <div class="meaning-block">
                <h4>Guidance</h4>
                <p>${rune.upright.guidance}</p>
            </div>
            <div class="meaning-block">
                <h4>When Reversed</h4>
                <p>${rune.reversed.meaning}</p>
            </div>
        </div>
    `;
    
    elements.runesDisplay.style.display = 'block';
    elements.readingSection.style.display = 'block';
    elements.premiumUpsell.style.display = 'none';
    
    elements.runesDisplay.scrollIntoView({ behavior: 'smooth' });
}

function shareReading() {
    const runeNames = currentRunes.map(r => r.name).join(', ');
    
    const text = `My Runes Reading: ${runeNames}

Get your free reading at runes.mdo3d.com`;
    
    if (navigator.share) {
        navigator.share({
            title: `Runes: ${runeNames}`,
            text: text
        });
    } else {
        navigator.clipboard.writeText(text).then(() => {
            alert('Reading copied to clipboard!');
        });
    }
}

function showPremiumUpsell() {
    showPremiumModal();
}

// API Integration Functions
async function getPremiumReading(runesData, question, spreadType) {
    try {
        const response = await fetch(`${API_URL}/api/reading/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                runes: runesData,
                question,
                spreadType,
                premium: true,
                sessionId: window.PremiumEntitlement?.activeSessionId()
            })
        });

        const data = await response.json();
        if (data.success) {
            return data.reading;
        }
        throw new Error(data.error || 'Failed to get reading');
    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
}

// AI text is untrusted: escape before inserting as HTML.
function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function showPremiumReading(reading) {
    if (!reading) return;

    elements.runeMeanings.innerHTML = `
        <div class="premium-reading">
            <div class="premium-badge">AI-Powered Reading</div>

            <div class="meaning-block">
                <h4>Opening Invocation</h4>
                <p>${esc(reading.opening)}</p>
            </div>

            <div class="meaning-block">
                <h4>Rune Interpretation</h4>
                <p>${esc(reading.interpretation)}</p>
            </div>

            ${reading.insights && reading.insights.length > 0 ? `
            <div class="meaning-block">
                <h4>Deep Insights</h4>
                <ul class="insights-list">
                    ${reading.insights.map(i => `<li>${esc(i)}</li>`).join('')}
                </ul>
            </div>
            ` : ''}

            ${reading.actionSteps && reading.actionSteps.length > 0 ? `
            <div class="meaning-block">
                <h4>Practical Guidance</h4>
                <ul class="action-steps">
                    ${reading.actionSteps.map(s => `<li>${esc(s)}</li>`).join('')}
                </ul>
            </div>
            ` : ''}

            ${reading.blessing ? `
            <div class="meaning-block blessing">
                <h4>Blessing</h4>
                <p><em>"${esc(reading.blessing)}"</em></p>
            </div>
            ` : ''}
        </div>
    `;
}

async function handlePremiumPurchase() {
    // A verified, unused purchase (recorded by success.html) delivers directly — no second charge.
    if (window.PremiumEntitlement?.has()) {
        // Returning from checkout reloads the page with nothing cast yet.
        if (!currentRunes.length) {
            hidePremiumModal();
            alert('Your premium reading is ready. Cast your runes first, then tap "Get Premium Reading".');
            elements.castBtn?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }
        const question = elements.questionInput?.value || 'Your general question';
        const reading = await getPremiumReading(currentRunes, question, currentSpread);
        if (reading) { window.PremiumEntitlement.consume(); showPremiumReading(reading); return; }
        alert('Your purchase is confirmed, but the reading service is temporarily unavailable. Please try again shortly — you will not be charged again.');
        return;
    }
    const email = prompt('Enter your email to receive your premium reading:');
    if (!email) return;

    try {
        const response = await fetch(`${API_URL}/api/payment/create-checkout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                readingType: currentSpread === 'single' ? 'single-premium' : currentSpread,
                email
            })
        });

        const data = await response.json();
        if (data.success && data.checkoutUrl) {
            window.location.href = data.checkoutUrl;
        } else {
            alert('Unable to process payment. Please try again.');
        }
    } catch (error) {
        console.error('Payment error:', error);
        alert('Payment error. Please try again.');
    }
}

window.handlePremiumPurchase = handlePremiumPurchase;

document.addEventListener('DOMContentLoaded', init);
