/**
 * Elder Futhark Runes Database
 * Complete 24 runes plus additional variants
 */

export const runes = [
  {
    id: 1,
    name: "Fehu",
    symbol: "ᚠ",
    phonetic: "F",
    meaning: "Cattle, Wealth",
    keywords: ["wealth", "abundance", "success", "mobility"],
    phoneticSound: "F",
    divinity: "Freyr",
    element: "Fire",
    astrology: "Aries",
    upright: {
      brief: "Abundance and success are flowing to you.",
      meaning: "Fehu represents cattle—wealth that can be moved and multiplied. This rune signifies success, achievement, and the流动性 of resources. It speaks of financial gain, social status, and the power that comes with abundance.",
      guidance: "Your efforts are paying off. New opportunities for growth are emerging. Use your resources wisely and share your blessings."
    },
    reversed: {
      brief: "Wealth at risk or misused.",
      meaning: "Reversed Fehu suggests greed, misused resources, or instability of fortune. Your wealth or success may be threatened.",
      guidance: "Guard what you have gained. Avoid risky ventures. Check your motives—are you seeking wealth for right reasons?"
    }
  },
  {
    id: 2,
    name: "Uruz",
    symbol: "ᚢ",
    phonetic: "U",
    meaning: "Aurochs, Strength",
    keywords: ["strength", "power", "health", "endurance"],
    phoneticSound: "U",
    divinity: "Thor",
    element: "Fire",
    astrology: "Aries, Taurus",
    upright: {
      brief: "Great strength and vitality are yours.",
      meaning: "Uruz represents the wild aurochs—ancient symbol of raw, primal strength. This rune signifies force, endurance, and the power of will. It speaks of physical strength, health, and breakthrough of obstacles.",
      guidance: "Channel your inner strength. Health and vitality flow through you. Break through what blocks your path."
    },
    reversed: {
      brief: "Weakness or uncontrolled force.",
      meaning: "Reversed Uruz suggests weakness, illness, or uncontrolled aggression. Your strength may be misdirected or depleted.",
      guidance: "Recover your strength. Address health issues. Don't force what should flow naturally."
    }
  },
  {
    id: 3,
    name: "Thurisaz",
    symbol: "ᚦ",
    phonetic: "Th",
    meaning: "Giant, Thor",
    keywords: ["protection", "testing", "purification", "insight"],
    phoneticSound: "Th",
    divinity: "Thor",
    element: "Fire",
    astrology: "Aries",
    upright: {
      brief: "Thor guards your path. Testing leads to growth.",
      meaning: "Thurisaz represents the giant and Thor's hammer—protective force that tests and purifies. This rune signifies challenges that strengthen, defense against enemies, and the insight that comes through trials.",
      guidance: "Face the test with courage. Purification comes through challenge. Thor's protection surrounds you."
    },
    reversed: {
      brief: "Obstacles or harmful testing.",
      meaning: "Reversed Thurisaz suggests unnecessary obstacles, harmful influences, or testing beyond your capacity.",
      guidance: "Seek protection from negative forces. Don't invite conflict. Sometimes retreat is wisdom."
    }
  },
  {
    id: 4,
    name: "Ansuz",
    symbol: "ᚨ",
    phonetic: "A",
    meaning: "Odin, Mouth",
    keywords: ["wisdom", "communication", "inspiration", "truth"],
    phoneticSound: "A",
    divinity: "Odin",
    element: "Air",
    astrology: "Gemini, Aquarius",
    upright: {
      brief: "Divine wisdom speaks through you.",
      meaning: "Ansuz represents Odin—the god of wisdom, poetry, and divine breath. This rune signifies inspiration, truthful communication, and the wisdom that comes from higher sources. It speaks of creative expression and spiritual insight.",
      guidance: "Listen to the divine messages. Speak your truth. Inspiration flows when you open to wisdom."
    },
    reversed: {
      brief: "Miscommunication or false wisdom.",
      meaning: "Reversed Ansuz suggests lies, confusion, or misleading information. Communication may be distorted.",
      guidance: "Verify what you hear. Don't trust easily. Seek truth through inner wisdom, not external claims."
    }
  },
  {
    id: 5,
    name: "Raidho",
    symbol: "ᚱ",
    phonetic: "R",
    meaning: "Journey, Cart",
    keywords: ["journey", "motion", "rhythm", "progress"],
    phoneticSound: "R",
    divinity: "Freya",
    element: "Air",
    astrology: "Sagittarius",
    upright: {
      brief: "Your journey unfolds. Progress is certain.",
      meaning: "Raidho represents the cart wheel and the journey itself. This rune signifies travel, forward motion, and the rhythm of life. It speaks of pilgrimage, career progress, and the journey of personal growth.",
      guidance: "Embrace the journey. Progress comes through movement. Honor the rhythm of your path."
    },
    reversed: {
      brief: "Disruption or stagnation.",
      meaning: "Reversed Raidho suggests journey delayed, lack of progress, or getting stuck in one place.",
      guidance: "What blocks your path forward? Remove obstacles. Sometimes the journey must pause before continuing."
    }
  },
  {
    id: 6,
    name: "Kenaz",
    symbol: "ᚲ",
    phonetic: "K",
    meaning: "Torch, Beacon",
    keywords: ["knowledge", "light", "guidance", "creativity"],
    phoneticSound: "K",
    divinity: "Heimdall",
    element: "Fire",
    astrology: "Aries, Leo",
    upright: {
      brief: "The torch of knowledge lights your way.",
      meaning: "Kenaz represents the torch and the beacon fire. This rune signifies knowledge, clarity, and creative inspiration. It speaks of illumination, skill acquisition, and the passion that sparks creation.",
      guidance: "Follow the light of knowledge. Your creativity burns bright. Take action on what you now see clearly."
    },
    reversed: {
      brief: "False guidance or creative block.",
      meaning: "Reversed Kenaz suggests misinformation, confusion, or creative blocks. The light may be leading you astray.",
      guidance: "Reconsider your direction. Don't trust appearances. Find the true light within."
    }
  },
  {
    id: 7,
    name: "Gebo",
    symbol: "ᚷ",
    phonetic: "G",
    meaning: "Gift",
    keywords: ["gift", "exchange", "partnership", "generosity"],
    phoneticSound: "G",
    divinity: "Odin",
    element: "Air",
    astrology: "Libra",
    upright: {
      brief: "Gifts are exchanged. Balance is achieved.",
      meaning: "Gebo represents the gift—sacred exchange between giver and receiver. This rune signifies balance, fairness, and the bonds of relationship. It speaks of gifts given and received, partnerships, and the law of reciprocity.",
      guidance: "Give freely and receive gracefully. Balance exists in exchange. Partnership flourishes through mutual gift."
    },
    reversed: {
      brief: "One-sided exchange or debt.",
      meaning: "Reversed Gebo suggests imbalance, one-sided relationships, or the burden of debt. Something is not being reciprocated.",
      guidance: "Examine your exchanges. Are you giving or taking too much? Seek balance in all relationships."
    }
  },
  {
    id: 8,
    name: "Wunjo",
    symbol: "ᚹ",
    phonetic: "W",
    meaning: "Joy, Glory",
    keywords: ["joy", "success", "glory", "harmony"],
    phoneticSound: "W",
    divinity: "Freyr",
    element: "Air",
    astrology: "Leo",
    upright: {
      brief: "Joy and success shine upon you.",
      meaning: "Wunjo represents joy, glory, and the fulfillment of wishes. This rune signifies happiness, social recognition, and the completion of a cycle in success. It speaks of harmony, peace, and well-earned rest.",
      guidance: "Celebrate your achievements. Joy fills your heart. Share your success with others."
    },
    reversed: {
      brief: "Temporary joy or isolation.",
      meaning: "Reversed Wunjo suggests joy that doesn't last, overconfidence, or isolation from others.",
      guidance: "Guard against complacency. Joy shared is joy multiplied. Don't let success isolate you."
    }
  },
  {
    id: 9,
    name: "Hagalaz",
    symbol: "ᚺ",
    phonetic: "H",
    meaning: "Hail",
    keywords: ["disruption", "chaos", "transformation", "testing"],
    phoneticSound: "H",
    divinity: "Thor",
    element: "Water",
    astrology: "Aquarius",
    upright: {
      brief: "Disruption brings transformation.",
      meaning: "Hagalaz represents hail—the storm that destroys crops to fertilize soil. This rune signifies disruption, chaos, and the transformative power of nature's forces. It speaks of challenges that break old patterns to enable new growth.",
      guidance: "Let the old patterns break. Transformation comes through disruption. Trust the process of destruction and renewal."
    },
    reversed: {
      brief: "Prolonged chaos or stuck disruption.",
      meaning: "Reversed Hagalaz suggests chaos that doesn't resolve, or being stuck in a disruptive pattern without transformation.",
      guidance: "Don't let disruption paralyze you. Find order in chaos. Transformation requires active participation."
    }
  },
  {
    id: 10,
    name: "Nauthiz",
    symbol: "ᚾ",
    phonetic: "N",
    meaning: "Necessity",
    keywords: ["need", "restriction", "resistance", "fate"],
    phoneticSound: "N",
    divinity: "Nornir",
    element: "Fire",
    astrology: "Capricorn",
    upright: {
      brief: "Necessity drives creation. Resistance brings strength.",
      meaning: "Nauthiz represents need and the fire that necessity kindles. This rune signifies restriction, resistance, and the creative force of necessity. It speaks of how limitations can spark innovation and how struggle builds character.",
      guidance: "Work with necessity, not against it. Constraints can spark creativity. What you need, you will find."
    },
    reversed: {
      brief: "Avoiding necessity or self-imposed restriction.",
      meaning: "Reversed Nauthiz suggests avoiding necessary change, or suffering from self-imposed limitations.",
      guidance: "Face what you have avoided. Don't create unnecessary suffering. Accept what must be."
    }
  },
  {
    id: 11,
    name: "Isa",
    symbol: "ᛁ",
    phonetic: "I",
    meaning: "Ice",
    keywords: ["stillness", "concentration", "delay", "patience"],
    phoneticSound: "I",
    divinity: "Ymir",
    element: "Water",
    astrology: "Aquarius",
    upright: {
      brief: "Stillness and patience are required.",
      meaning: "Isa represents ice—complete stillness and frozen potential. This rune signifies pause, concentration, and the power of waiting. It speaks of the necessity of patience and the focused mind that achieves by not acting.",
      guidance: "Hold still. Patience preserves. Sometimes the wisest action is no action."
    },
    reversed: {
      brief: "Stagnation or impatient action.",
      meaning: "Reversed Isa suggests being stuck, or acting impatiently when stillness is needed.",
      guidance: "What holds you frozen? Don't force what needs time. The ice will break when ready."
    }
  },
  {
    id: 12,
    name: "Jera",
    symbol: "ᛃ",
    phonetic: "J/Y",
    meaning: "Harvest, Year",
    keywords: ["harvest", "reward", "cycle", "patience"],
    phoneticSound: "J",
    divinity: "Freyr, Freya",
    element: "Earth",
    astrology: "Taurus",
    upright: {
      brief: "The harvest time approaches. Patience yields reward.",
      meaning: "Jera represents the harvest—the reward for patience and labor through the seasons. This rune signifies cycles, cause and effect, and the fruition of effort. It speaks of reaping what you have sown.",
      guidance: "Your patience pays off. The harvest comes in its season. Continue your efforts—the reward nears."
    },
    reversed: {
      brief: "Premature harvest or failed crops.",
      meaning: "Reversed Jera suggests harvesting too early, or effort that doesn't yield expected results.",
      guidance: "Wait for the true harvest. Premature action spoils the crop. Trust the timing."
    }
  },
  {
    id: 13,
    name: "Eihwaz",
    symbol: "ᛇ",
    phonetic: "Ei",
    meaning: "Yew Tree",
    keywords: ["defense", "endurance", "transformation", "death"],
    phoneticSound: "Ei",
    divinity: "Eoh",
    element: "Earth",
    astrology: "Scorpio",
    upright: {
      brief: "The yew guards. Endurance leads to transformation.",
      meaning: "Eihwaz represents the yew tree—symbol of death, transformation, and eternal life. This rune signifies defense, endurance, and the portal between worlds. It speaks of the spirit's journey and the protection that comes from knowing death's nature.",
      guidance: "Endure through transformation. The yew protects those who understand endings. Your spirit is stronger than death."
    },
    reversed: {
      brief: "Defensive posture or blocked transformation.",
      meaning: "Reversed Eihwaz suggests excessive defensiveness, or transformation blocked by fear.",
      guidance: "Open to transformation. Defense can become prison. Death is doorway, not barrier."
    }
  },
  {
    id: 14,
    name: "Perthro",
    symbol: "ᛈ",
    phonetic: "P",
    meaning: "Dice Cup, Fate",
    keywords: ["fate", "mystery", "lottery", "destiny"],
    phoneticSound: "P",
    divinity: "Freya",
    element: "Water",
    astrology: "Pisces",
    upright: {
      brief: "Fate is cast. Mystery unfolds.",
      meaning: "Perthro represents the dice cup and the casting of lots—fate revealed through chance. This rune signifies mystery, destiny, and the hidden forces that shape life. It speaks of secrets, gambling, and the unknown path.",
      guidance: "Trust the throw of fate. Mystery is revealing itself. Accept that not all can be controlled."
    },
    reversed: {
      brief: "Hidden fate or misused chance.",
      meaning: "Reversed Perthro suggests secrets being hidden, or gambling that leads to loss.",
      guidance: "What remains hidden? Don't gamble recklessly. Some fates can be influenced."
    }
  },
  {
    id: 15,
    name: "Algiz",
    symbol: "ᛉ",
    phonetic: "Z",
    meaning: "Elk, Protection",
    keywords: ["protection", "defense", "higher self", "alertness"],
    phoneticSound: "Z",
    divinity: "Odin",
    element: "Air",
    astrology: "Leo",
    upright: {
      brief: "Divine protection surrounds you.",
      meaning: "Algiz represents the elk and protection from above. This rune signifies divine protection, connection to higher self, and the defense that comes from spiritual awareness. It speaks of growth toward higher consciousness.",
      guidance: "You are protected from above. Extend your awareness upward. The divine guards your path."
    },
    reversed: {
      brief: "False protection or overexposed.",
      meaning: "Reversed Algiz suggests false sense of security, or being too open to influences.",
      guidance: "Guard your vulnerabilities. Not all protection is real. Seek true divine connection."
    }
  },
  {
    id: 16,
    name: "Sowilo",
    symbol: "ᛊ",
    phonetic: "S",
    meaning: "Sun",
    keywords: ["victory", "success", "clarity", "wholeness"],
    phoneticSound: "S",
    divinity: "Sol",
    element: "Fire",
    astrology: "Leo",
    upright: {
      brief: "The sun illuminates. Victory is yours.",
      meaning: "Sowilo represents the sun—the light that conquers darkness. This rune signifies victory, success, and the clarity that comes from spiritual illumination. It speaks of wholeness, honor, and the triumph of consciousness over ignorance.",
      guidance: "Light fills your path. Victory approaches. Shine your truth and success follows."
    },
    reversed: {
      brief: "Blocked success or false victory.",
      meaning: "Reversed Sowilo suggests success blocked, or victory that brings no satisfaction.",
      guidance: "What blocks your light? True victory is not hollow. Seek inner sun, not outer triumph."
    }
  },
  {
    id: 17,
    name: "Tiwaz",
    symbol: "ᛏ",
    phonetic: "T",
    meaning: "Tyr, Victory",
    keywords: ["victory", "honor", "justice", "sacrifice"],
    phoneticSound: "T",
    divinity: "Tyr",
    element: "Fire",
    astrology: "Aries",
    upright: {
      brief: "Honor and victory through righteous action.",
      meaning: "Tiwaz represents Tyr—the god of war and justice. This rune signifies victory through honor, sacrifice for the greater good, and the law that governs right action. It speaks of moral courage and the warrior's code.",
      guidance: "Act with honor. Victory comes to the righteous. Your sacrifice serves a higher cause."
    },
    reversed: {
      brief: "Defeat or unjust action.",
      meaning: "Reversed Tiwaz suggests defeat, injustice, or sacrifice for wrong reasons.",
      guidance: "Examine your cause. Is your sacrifice just? Victory without honor is hollow."
    }
  },
  {
    id: 18,
    name: "Berkana",
    symbol: "ᛒ",
    phonetic: "B",
    meaning: "Birch Tree",
    keywords: ["growth", "renewal", "fertility", "health"],
    phoneticSound: "B",
    divinity: "Freya, Bertha",
    element: "Earth",
    astrology: "Taurus",
    upright: {
      brief: "Renewal and growth spring forth.",
      meaning: "Berkana represents the birch tree—first to leaf in spring. This rune signifies growth, renewal, fertility, and the quickening of life. It speaks of personal development, new beginnings, and the restoration of health.",
      guidance: "New growth emerges. Health and vitality return. Spring has come to your life."
    },
    reversed: {
      brief: "Stunted growth or delayed renewal.",
      meaning: "Reversed Berkana suggests growth stunted, or renewal delayed beyond its time.",
      guidance: "What blocks your growth? Remove obstacles to renewal. Spring will come—prepare the soil."
    }
  },
  {
    id: 19,
    name: "Ehwaz",
    symbol: "ᛖ",
    phonetic: "E",
    meaning: "Horse, Partnership",
    keywords: ["partnership", "trust", "movement", "guidance"],
    phoneticSound: "E",
    divinity: "Odin, Freya",
    element: "Air",
    astrology: "Gemini",
    upright: {
      brief: "Partnership accelerates your journey.",
      meaning: "Ehwaz represents the horse—partnership that carries you forward. This rune signifies alliance, trust, movement, and the harmony between beings. It speaks of relationships that elevate both parties, and progress through cooperation.",
      guidance: "Trust your partner. Together you go further. Partnership is the vehicle of progress."
    },
    reversed: {
      brief: "Broken partnership or one-sided trust.",
      meaning: "Reversed Ehwaz suggests broken trust, failed partnership, or dependence on unreliable allies.",
      guidance: "Examine your alliances. Trust must be mutual. Don't be carried by an unreliable horse."
    }
  },
  {
    id: 20,
    name: "Mannaz",
    symbol: "ᛗ",
    phonetic: "M",
    meaning: "Man, Humanity",
    keywords: ["self", "humanity", "cooperation", "purpose"],
    phoneticSound: "M",
    divinity: "Odin",
    element: "Air",
    astrology: "Aquarius",
    upright: {
      brief: "Your humanity awakens. Purpose clarifies.",
      meaning: "Mannaz represents humanity and the self in relation to others. This rune signifies self-awareness, cooperation, and the fulfillment of human purpose. It speaks of community, rationality, and the individual's role in the greater whole.",
      guidance: "Honor your humanity. Cooperation multiplies strength. Your purpose connects to the greater community."
    },
    reversed: {
      brief: "Selfishness or isolation from humanity.",
      meaning: "Reversed Mannaz suggests excessive individualism, isolation, or losing connection to human community.",
      guidance: "Reconnect with humanity. No one is an island. Your self gains meaning through connection."
    }
  },
  {
    id: 21,
    name: "Laguz",
    symbol: "ᛚ",
    phonetic: "L",
    meaning: "Water, Lake",
    keywords: ["flow", "intuition", "purification", "dreams"],
    phoneticSound: "L",
    divinity: "Njord",
    element: "Water",
    astrology: "Pisces, Cancer",
    upright: {
      brief: "Intuition flows. Let go and trust the current.",
      meaning: "Laguz represents water and the lake—flow, intuition, and the unconscious mind. This rune signifies dreams, psychic abilities, and the cleansing flow of life force. It speaks of surrendering to the current and trusting inner guidance.",
      guidance: "Go with the flow. Trust your intuition. Let water cleanse and guide you."
    },
    reversed: {
      brief: "Blocked flow or misleading intuition.",
      meaning: "Reversed Laguz suggests blocked emotions, flooded feelings, or intuition that misleads.",
      guidance: "What blocks your flow? Don't drown in emotion. Find the current beneath the chaos."
    }
  },
  {
    id: 22,
    name: "Ingwaz",
    symbol: "ᛝ",
    phonetic: "Ng",
    meaning: "Ing, Seed",
    keywords: ["fertility", "completion", "potential", "harvest"],
    phoneticSound: "Ng",
    divinity: "Freyr",
    element: "Earth",
    astrology: "Taurus",
    upright: {
      brief: "The seed is planted. Potential awaits harvest.",
      meaning: "Ingwaz represents the god Ing and the fertile seed. This rune signifies completion of a cycle, dormant potential, and the promise of future harvest. It speaks of male fertility, steadfastness, and the inner truth that time will reveal.",
      guidance: "Trust what sleeps within. The seed will grow in its time. Completion approaches."
    },
    reversed: {
      brief: "Delayed harvest or wasted potential.",
      meaning: "Reversed Ingwaz suggests potential unrealized, or harvest that doesn't come.",
      guidance: "Don't waste your seeds. What potential lies dormant? Nurture what will grow."
    }
  },
  {
    id: 23,
    name: "Dagaz",
    symbol: "ᛞ",
    phonetic: "D",
    meaning: "Day, Dawn",
    keywords: ["breakthrough", "awakening", "balance", "clarity"],
    phoneticSound: "D",
    divinity: "Baldur",
    element: "Fire",
    astrology: "Cancer, Leo",
    upright: {
      brief: "Dawn breaks. Clarity and balance emerge.",
      meaning: "Dagaz represents day and the dawn that ends darkness. This rune signifies breakthrough, awakening, and the balance between opposites. It speaks of the moment when night transforms to day, and clarity emerges from confusion.",
      guidance: "The dawn has come. Balance is achieved. Step into the light of new understanding."
    },
    reversed: {
      brief: "False dawn or stuck in twilight.",
      meaning: "Reversed Dagaz suggests a dawn that doesn't fully come, or being stuck between states.",
      guidance: "The light is coming—don't despair. Twilight passes. True dawn approaches."
    }
  },
  {
    id: 24,
    name: "Othala",
    symbol: "ᛟ",
    phonetic: "O",
    meaning: "Heritage, Estate",
    keywords: ["heritage", "home", "inheritance", "law"],
    phoneticSound: "O",
    divinity: "Odin",
    element: "Earth",
    astrology: "Capricorn",
    upright: {
      brief: "Your heritage is claimed. Home and law are secured.",
      meaning: "Othala represents heritage, home, and ancestral land. This rune signifies inherited qualities, the family we create and are born into, and the sacred law that binds. It speaks of roots, property, and the spiritual homeland.",
      guidance: "Honor your heritage. Build your home. Your ancestral gifts strengthen you."
    },
    reversed: {
      brief: "Disputed inheritance or homeless.",
      meaning: "Reversed Othala suggests lost heritage, disputed inheritance, or being without home.",
      guidance: "What has been taken? Claim your rightful place. Home is where your roots grow."
    }
  }
];

export const getRuneById = (id) => runes.find(r => r.id === id);

export const getRandomRune = () => {
  const id = Math.floor(Math.random() * runes.length) + 1;
  return getRuneById(id);
};

export const castRunes = (count = 3) => {
  const selected = [];
  const available = [...runes];
  
  for (let i = 0; i < count && available.length > 0; i++) {
    const index = Math.floor(Math.random() * available.length);
    selected.push(available.splice(index, 1)[0]);
  }
  
  return selected;
};
