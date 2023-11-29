export const ranks = [
    '🌸 Citizen',
    '🔎 Cleric',
    '🔎 Cleric II',
    '🔎 Cleric III',
    '🔮 Wizard',
    '🔮 Wizard II',
    '🔮 Wizard III',
    '♦️ Mage',
    '♦️ Mage II',
    '♦️ Mage III',
    '🎯 Noble',
    '🎯 Noble II',
    '✨ Elite',
    '✨ Elite II',
    '✨ Elite III',
    '🔶️ Ace',
    '🔶️ Ace II',
    '🔶️ Ace III',
    '🔶️ Ace IV',
    '☣ Knight',
    '☣ Knight II',
    '☣ Knight III',
    '☣ Knight IV',
    '☣ Knight V',
    '🌀 Hero',
    '🌀 Hero II',
    '🌀 Hero III',
    '🌀 Hero IV',
    '🌀 Hero V',
    '💎 Supreme',
    '💎 Supreme II',
    '💎 Supreme III',
    '💎 Supreme IV',
    '💎 Supreme V',
    '❄️ Mystic',
    '❄️ Mystic II',
    '❄️ Mystic III',
    '❄️ Mystic IV',
    '❄️ Mystic V',
    '🔆 Legendary',
    '🔆 Legendary II',
    '🔆 Legendary III',
    '🔆 Legendary IV',
    '🔆 Legendary V',
    '🛡 Guardian',
    '🛡 Guardian II',
    '🛡 Guardian III',
    '🛡 Guardian IV',
    '🛡 Guardian V',
    '♨ Valor',
    '♨ Valor Alpha',
    '♨ Valor Gama',
    '♨ Valor Ulta',
    '♨ Valor Ulta Max',
    '♨ Valor Infinty'
]

/**
 * @param {number} level
 * @returns {{requiredXpToLevelUp: number, rank: string}}
 */

export const getStats = (level) => {
    let required = 100
    for (let i = 1; i <= level; i++) required += 5 * (i * 50) + 100 * i * (i * (i + 1)) + 300
    const rank = level > ranks.length ? ranks[ranks.length - 1] : ranks[level - 1]
    return {
        requiredXpToLevelUp: required,
        rank
    }
}
