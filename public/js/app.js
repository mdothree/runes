import { runes, getRuneById, getRandomRune, castRunes } from './js/services/database.js';

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
    runesDisplay: document.getElementById('runes-display'),
    runesResult: document.getElementById('runes-result'),
    readingSection: document.getElementById('reading-section'),
    runeMeanings: document.getElementById('rune-meanings'),
    runesGrid: document.getElementById('runes-grid'),
    premiumUpsell: document.getElementById('premium-upsell'),
    shareBtn: document.getElementById('share-btn'),
    upgradeBtn: document.getElementById('upgrade-btn')
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
                showPremiumMessage();
                return;
            }
            
            elements.spreadOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            currentSpread = option.dataset.spread;
        });
    });
    
    elements.castBtn?.addEventListener('click', cast);
    elements.resetBtn?.addEventListener('click', reset);
    elements.shareBtn?.addEventListener('click', shareReading);
    elements.upgradeBtn?.addEventListener('click', showPremiumUpsell);
}

function updateCharCount() {
    const length = elements.questionInput.value.length;
    elements.charCount.textContent = length;
}

function showPremiumMessage() {
    alert('Multi-rune spreads are premium features. Unlock them with a premium subscription!');
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
    
    elements.resetBtn.style.display = 'inline-block';
    
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
    elements.resetBtn.style.display = 'inline-block';
    
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
    alert('Premium AI interpretation coming soon! This feature will provide personalized, AI-generated guidance based on your specific question.');
}

document.addEventListener('DOMContentLoaded', init);
