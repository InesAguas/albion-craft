import { locations, qualities } from "./constants"

const clericRobeItems = [
    { id: "T4_ARMOR_CLOTH_SET2", name: "Cleric Robe 4.0", tier: 4 },
    { id: "T5_ARMOR_CLOTH_SET2", name: "Cleric Robe 5.0", tier: 5 },
    { id: "T6_ARMOR_CLOTH_SET2", name: "Cleric Robe 6.0", tier: 6 },
    { id: "T7_ARMOR_CLOTH_SET2", name: "Cleric Robe 7.0", tier: 7 },
    { id: "T8_ARMOR_CLOTH_SET2", name: "Cleric Robe 8.0", tier: 8 },
    { id: "T4_ARMOR_CLOTH_SET2@1", name: "Cleric Robe 4.1", tier: 4.1 },
    { id: "T5_ARMOR_CLOTH_SET2@1", name: "Cleric Robe 5.1", tier: 5.1 },
    { id: "T6_ARMOR_CLOTH_SET2@1", name: "Cleric Robe 6.1", tier: 6.1 },
    { id: "T7_ARMOR_CLOTH_SET2@1", name: "Cleric Robe 7.1", tier: 7.1 },
    { id: "T8_ARMOR_CLOTH_SET2@1", name: "Cleric Robe 8.1", tier: 8.1 },
    { id: "T4_ARMOR_CLOTH_SET2@2", name: "Cleric Robe 4.2", tier: 4.2 },
    { id: "T5_ARMOR_CLOTH_SET2@2", name: "Cleric Robe 5.2", tier: 5.2 },
    { id: "T6_ARMOR_CLOTH_SET2@2", name: "Cleric Robe 6.2", tier: 6.2 },
    { id: "T7_ARMOR_CLOTH_SET2@2", name: "Cleric Robe 7.2", tier: 7.2 },
    { id: "T8_ARMOR_CLOTH_SET2@2", name: "Cleric Robe 8.2", tier: 8.2 },
    { id: "T4_ARMOR_CLOTH_SET2@3", name: "Cleric Robe 4.3", tier: 4.3 },
    { id: "T5_ARMOR_CLOTH_SET2@3", name: "Cleric Robe 5.3", tier: 5.3 },
    { id: "T6_ARMOR_CLOTH_SET2@3", name: "Cleric Robe 6.3", tier: 6.3 },
    { id: "T7_ARMOR_CLOTH_SET2@3", name: "Cleric Robe 7.3", tier: 7.3 },
    { id: "T8_ARMOR_CLOTH_SET2@3", name: "Cleric Robe 8.3", tier: 8.3 },
    { id: "T4_ARMOR_CLOTH_SET2@4", name: "Cleric Robe 4.4", tier: 4.4 },
    { id: "T5_ARMOR_CLOTH_SET2@4", name: "Cleric Robe 5.4", tier: 5.4 },
    { id: "T6_ARMOR_CLOTH_SET2@4", name: "Cleric Robe 6.4", tier: 6.4 },
    { id: "T7_ARMOR_CLOTH_SET2@4", name: "Cleric Robe 7.4", tier: 7.4 },
    { id: "T8_ARMOR_CLOTH_SET2@4", name: "Cleric Robe 8.4", tier: 8.4 }
];

const mageRobeItems = [
    { id: "T4_ARMOR_CLOTH_SET3", name: "Mage Robe 4.0", tier: 4 },
    { id: "T5_ARMOR_CLOTH_SET3", name: "Mage Robe 5.0", tier: 5 },
    { id: "T6_ARMOR_CLOTH_SET3", name: "Mage Robe 6.0", tier: 6 },
    { id: "T7_ARMOR_CLOTH_SET3", name: "Mage Robe 7.0", tier: 7 },
    { id: "T8_ARMOR_CLOTH_SET3", name: "Mage Robe 8.0", tier: 8 },
    { id: "T4_ARMOR_CLOTH_SET3@1", name: "Mage Robe 4.1", tier: 4.1 },
    { id: "T5_ARMOR_CLOTH_SET3@1", name: "Mage Robe 5.1", tier: 5.1 },
    { id: "T6_ARMOR_CLOTH_SET3@1", name: "Mage Robe 6.1", tier: 6.1 },
    { id: "T7_ARMOR_CLOTH_SET3@1", name: "Mage Robe 7.1", tier: 7.1 },
    { id: "T8_ARMOR_CLOTH_SET3@1", name: "Mage Robe 8.1", tier: 8.1 },
    { id: "T4_ARMOR_CLOTH_SET3@2", name: "Mage Robe 4.2", tier: 4.2 },
    { id: "T5_ARMOR_CLOTH_SET3@2", name: "Mage Robe 5.2", tier: 5.2 },
    { id: "T6_ARMOR_CLOTH_SET3@2", name: "Mage Robe 6.2", tier: 6.2 },
    { id: "T7_ARMOR_CLOTH_SET3@2", name: "Mage Robe 7.2", tier: 7.2 },
    { id: "T8_ARMOR_CLOTH_SET3@2", name: "Mage Robe 8.2", tier: 8.2 },
    { id: "T4_ARMOR_CLOTH_SET3@3", name: "Mage Robe 4.3", tier: 4.3 },
    { id: "T5_ARMOR_CLOTH_SET3@3", name: "Mage Robe 5.3", tier: 5.3 },
    { id: "T6_ARMOR_CLOTH_SET3@3", name: "Mage Robe 6.3", tier: 6.3 },
    { id: "T7_ARMOR_CLOTH_SET3@3", name: "Mage Robe 7.3", tier: 7.3 },
    { id: "T8_ARMOR_CLOTH_SET3@3", name: "Mage Robe 8.3", tier: 8.3 },
    { id: "T4_ARMOR_CLOTH_SET3@4", name: "Mage Robe 4.4", tier: 4.4 },
    { id: "T5_ARMOR_CLOTH_SET3@4", name: "Mage Robe 5.4", tier: 5.4 },
    { id: "T6_ARMOR_CLOTH_SET3@4", name: "Mage Robe 6.4", tier: 6.4 },
    { id: "T7_ARMOR_CLOTH_SET3@4", name: "Mage Robe 7.4", tier: 7.4 },
    { id: "T8_ARMOR_CLOTH_SET3@4", name: "Mage Robe 8.4", tier: 8.4 }
];

const scholarRobeItems = [
    { id: "T2_ARMOR_CLOTH_SET1", name: "Scholar Robe 2.0", tier: 2 },
    { id: "T4_ARMOR_CLOTH_SET1", name: "Scholar Robe 4.0", tier: 4 },
    { id: "T5_ARMOR_CLOTH_SET1", name: "Scholar Robe 5.0", tier: 5 },
    { id: "T6_ARMOR_CLOTH_SET1", name: "Scholar Robe 6.0", tier: 6 },
    { id: "T7_ARMOR_CLOTH_SET1", name: "Scholar Robe 7.0", tier: 7 },
    { id: "T8_ARMOR_CLOTH_SET1", name: "Scholar Robe 8.0", tier: 8 },
    { id: "T4_ARMOR_CLOTH_SET1@1", name: "Scholar Robe 4.1", tier: 4.1 },
    { id: "T5_ARMOR_CLOTH_SET1@1", name: "Scholar Robe 5.1", tier: 5.1 },
    { id: "T6_ARMOR_CLOTH_SET1@1", name: "Scholar Robe 6.1", tier: 6.1 },
    { id: "T7_ARMOR_CLOTH_SET1@1", name: "Scholar Robe 7.1", tier: 7.1 },
    { id: "T8_ARMOR_CLOTH_SET1@1", name: "Scholar Robe 8.1", tier: 8.1 },
    { id: "T4_ARMOR_CLOTH_SET1@2", name: "Scholar Robe 4.2", tier: 4.2 },
    { id: "T5_ARMOR_CLOTH_SET1@2", name: "Scholar Robe 5.2", tier: 5.2 },
    { id: "T6_ARMOR_CLOTH_SET1@2", name: "Scholar Robe 6.2", tier: 6.2 },
    { id: "T7_ARMOR_CLOTH_SET1@2", name: "Scholar Robe 7.2", tier: 7.2 },
    { id: "T8_ARMOR_CLOTH_SET1@2", name: "Scholar Robe 8.2", tier: 8.2 },
    { id: "T4_ARMOR_CLOTH_SET1@3", name: "Scholar Robe 4.3", tier: 4.3 },
    { id: "T5_ARMOR_CLOTH_SET1@3", name: "Scholar Robe 5.3", tier: 5.3 },
    { id: "T6_ARMOR_CLOTH_SET1@3", name: "Scholar Robe 6.3", tier: 6.3 },
    { id: "T7_ARMOR_CLOTH_SET1@3", name: "Scholar Robe 7.3", tier: 7.3 },
    { id: "T8_ARMOR_CLOTH_SET1@3", name: "Scholar Robe 8.3", tier: 8.3 },
    { id: "T4_ARMOR_CLOTH_SET1@4", name: "Scholar Robe 4.4", tier: 4.4 },
    { id: "T5_ARMOR_CLOTH_SET1@4", name: "Scholar Robe 5.4", tier: 5.4 },
    { id: "T6_ARMOR_CLOTH_SET1@4", name: "Scholar Robe 6.4", tier: 6.4 },
    { id: "T7_ARMOR_CLOTH_SET1@4", name: "Scholar Robe 7.4", tier: 7.4 },
    { id: "T8_ARMOR_CLOTH_SET1@4", name: "Scholar Robe 8.4", tier: 8.4 }
];

const royalRobeItems = [
    { id: "T4_ARMOR_CLOTH_ROYAL", name: "Royal Robe 4.0", tier: 4 },
    { id: "T5_ARMOR_CLOTH_ROYAL", name: "Royal Robe 5.0", tier: 5 },
    { id: "T6_ARMOR_CLOTH_ROYAL", name: "Royal Robe 6.0", tier: 6 },
    { id: "T7_ARMOR_CLOTH_ROYAL", name: "Royal Robe 7.0", tier: 7 },
    { id: "T8_ARMOR_CLOTH_ROYAL", name: "Royal Robe 8.0", tier: 8 },
    { id: "T4_ARMOR_CLOTH_ROYAL@1", name: "Royal Robe 4.1", tier: 4.1 },
    { id: "T5_ARMOR_CLOTH_ROYAL@1", name: "Royal Robe 5.1", tier: 5.1 },
    { id: "T6_ARMOR_CLOTH_ROYAL@1", name: "Royal Robe 6.1", tier: 6.1 },
    { id: "T7_ARMOR_CLOTH_ROYAL@1", name: "Royal Robe 7.1", tier: 7.1 },
    { id: "T8_ARMOR_CLOTH_ROYAL@1", name: "Royal Robe 8.1", tier: 8.1 },
    { id: "T4_ARMOR_CLOTH_ROYAL@2", name: "Royal Robe 4.2", tier: 4.2 },
    { id: "T5_ARMOR_CLOTH_ROYAL@2", name: "Royal Robe 5.2", tier: 5.2 },
    { id: "T6_ARMOR_CLOTH_ROYAL@2", name: "Royal Robe 6.2", tier: 6.2 },
    { id: "T7_ARMOR_CLOTH_ROYAL@2", name: "Royal Robe 7.2", tier: 7.2 },
    { id: "T8_ARMOR_CLOTH_ROYAL@2", name: "Royal Robe 8.2", tier: 8.2 },
    { id: "T4_ARMOR_CLOTH_ROYAL@3", name: "Royal Robe 4.3", tier: 4.3 },
    { id: "T5_ARMOR_CLOTH_ROYAL@3", name: "Royal Robe 5.3", tier: 5.3 },
    { id: "T6_ARMOR_CLOTH_ROYAL@3", name: "Royal Robe 6.3", tier: 6.3 },
    { id: "T7_ARMOR_CLOTH_ROYAL@3", name: "Royal Robe 7.3", tier: 7.3 },
    { id: "T8_ARMOR_CLOTH_ROYAL@3", name: "Royal Robe 8.3", tier: 8.3 },
    { id: "T4_ARMOR_CLOTH_ROYAL@4", name: "Royal Robe 4.4", tier: 4.4 },
    { id: "T5_ARMOR_CLOTH_ROYAL@4", name: "Royal Robe 5.4", tier: 5.4 },
    { id: "T6_ARMOR_CLOTH_ROYAL@4", name: "Royal Robe 6.4", tier: 6.4 },
    { id: "T7_ARMOR_CLOTH_ROYAL@4", name: "Royal Robe 7.4", tier: 7.4 },
    { id: "T8_ARMOR_CLOTH_ROYAL@4", name: "Royal Robe 8.4", tier: 8.4 }
];


const druidRobeItems = [
    { id: "T4_ARMOR_CLOTH_KEEPER", name: "Druid Robe 4.0", tier: 4 },
    { id: "T5_ARMOR_CLOTH_KEEPER", name: "Druid Robe 5.0", tier: 5 },
    { id: "T6_ARMOR_CLOTH_KEEPER", name: "Druid Robe 6.0", tier: 6 },
    { id: "T7_ARMOR_CLOTH_KEEPER", name: "Druid Robe 7.0", tier: 7 },
    { id: "T8_ARMOR_CLOTH_KEEPER", name: "Druid Robe 8.0", tier: 8 },
    { id: "T4_ARMOR_CLOTH_KEEPER@1", name: "Druid Robe 4.1", tier: 4.1 },
    { id: "T5_ARMOR_CLOTH_KEEPER@1", name: "Druid Robe 5.1", tier: 5.1 },
    { id: "T6_ARMOR_CLOTH_KEEPER@1", name: "Druid Robe 6.1", tier: 6.1 },
    { id: "T7_ARMOR_CLOTH_KEEPER@1", name: "Druid Robe 7.1", tier: 7.1 },
    { id: "T8_ARMOR_CLOTH_KEEPER@1", name: "Druid Robe 8.1", tier: 8.1 },
    { id: "T4_ARMOR_CLOTH_KEEPER@2", name: "Druid Robe 4.2", tier: 4.2 },
    { id: "T5_ARMOR_CLOTH_KEEPER@2", name: "Druid Robe 5.2", tier: 5.2 },
    { id: "T6_ARMOR_CLOTH_KEEPER@2", name: "Druid Robe 6.2", tier: 6.2 },
    { id: "T7_ARMOR_CLOTH_KEEPER@2", name: "Druid Robe 7.2", tier: 7.2 },
    { id: "T8_ARMOR_CLOTH_KEEPER@2", name: "Druid Robe 8.2", tier: 8.2 },
    { id: "T4_ARMOR_CLOTH_KEEPER@3", name: "Druid Robe 4.3", tier: 4.3 },
    { id: "T5_ARMOR_CLOTH_KEEPER@3", name: "Druid Robe 5.3", tier: 5.3 },
    { id: "T6_ARMOR_CLOTH_KEEPER@3", name: "Druid Robe 6.3", tier: 6.3 },
    { id: "T7_ARMOR_CLOTH_KEEPER@3", name: "Druid Robe 7.3", tier: 7.3 },
    { id: "T8_ARMOR_CLOTH_KEEPER@3", name: "Druid Robe 8.3", tier: 8.3 },
    { id: "T4_ARMOR_CLOTH_KEEPER@4", name: "Druid Robe 4.4", tier: 4.4 },
    { id: "T5_ARMOR_CLOTH_KEEPER@4", name: "Druid Robe 5.4", tier: 5.4 },
    { id: "T6_ARMOR_CLOTH_KEEPER@4", name: "Druid Robe 6.4", tier: 6.4 },
    { id: "T7_ARMOR_CLOTH_KEEPER@4", name: "Druid Robe 7.4", tier: 7.4 },
    { id: "T8_ARMOR_CLOTH_KEEPER@4", name: "Druid Robe 8.4", tier: 8.4 }
];

const fiendRobeItems = [
    { id: "T4_ARMOR_CLOTH_HELL", name: "Fiend Robe 4.0", tier: 4 },
    { id: "T5_ARMOR_CLOTH_HELL", name: "Fiend Robe 5.0", tier: 5 },
    { id: "T6_ARMOR_CLOTH_HELL", name: "Fiend Robe 6.0", tier: 6 },
    { id: "T7_ARMOR_CLOTH_HELL", name: "Fiend Robe 7.0", tier: 7 },
    { id: "T8_ARMOR_CLOTH_HELL", name: "Fiend Robe 8.0", tier: 8 },
    { id: "T4_ARMOR_CLOTH_HELL@1", name: "Fiend Robe 4.1", tier: 4.1 },
    { id: "T5_ARMOR_CLOTH_HELL@1", name: "Fiend Robe 5.1", tier: 5.1 },
    { id: "T6_ARMOR_CLOTH_HELL@1", name: "Fiend Robe 6.1", tier: 6.1 },
    { id: "T7_ARMOR_CLOTH_HELL@1", name: "Fiend Robe 7.1", tier: 7.1 },
    { id: "T8_ARMOR_CLOTH_HELL@1", name: "Fiend Robe 8.1", tier: 8.1 },
    { id: "T4_ARMOR_CLOTH_HELL@2", name: "Fiend Robe 4.2", tier: 4.2 },
    { id: "T5_ARMOR_CLOTH_HELL@2", name: "Fiend Robe 5.2", tier: 5.2 },
    { id: "T6_ARMOR_CLOTH_HELL@2", name: "Fiend Robe 6.2", tier: 6.2 },
    { id: "T7_ARMOR_CLOTH_HELL@2", name: "Fiend Robe 7.2", tier: 7.2 },
    { id: "T8_ARMOR_CLOTH_HELL@2", name: "Fiend Robe 8.2", tier: 8.2 },
    { id: "T4_ARMOR_CLOTH_HELL@3", name: "Fiend Robe 4.3", tier: 4.3 },
    { id: "T5_ARMOR_CLOTH_HELL@3", name: "Fiend Robe 5.3", tier: 5.3 },
    { id: "T6_ARMOR_CLOTH_HELL@3", name: "Fiend Robe 6.3", tier: 6.3 },
    { id: "T7_ARMOR_CLOTH_HELL@3", name: "Fiend Robe 7.3", tier: 7.3 },
    { id: "T8_ARMOR_CLOTH_HELL@3", name: "Fiend Robe 8.3", tier: 8.3 },
    { id: "T4_ARMOR_CLOTH_HELL@4", name: "Fiend Robe 4.4", tier: 4.4 },
    { id: "T5_ARMOR_CLOTH_HELL@4", name: "Fiend Robe 5.4", tier: 5.4 },
    { id: "T6_ARMOR_CLOTH_HELL@4", name: "Fiend Robe 6.4", tier: 6.4 },
    { id: "T7_ARMOR_CLOTH_HELL@4", name: "Fiend Robe 7.4", tier: 7.4 },
    { id: "T8_ARMOR_CLOTH_HELL@4", name: "Fiend Robe 8.4", tier: 8.4 }
];

const cultistRobeItems = [
    { id: "T4_ARMOR_CLOTH_MORGANA", name: "Cultist Robe 4.0", tier: 4 },
    { id: "T5_ARMOR_CLOTH_MORGANA", name: "Cultist Robe 5.0", tier: 5 },
    { id: "T6_ARMOR_CLOTH_MORGANA", name: "Cultist Robe 6.0", tier: 6 },
    { id: "T7_ARMOR_CLOTH_MORGANA", name: "Cultist Robe 7.0", tier: 7 },
    { id: "T8_ARMOR_CLOTH_MORGANA", name: "Cultist Robe 8.0", tier: 8 },
    { id: "T4_ARMOR_CLOTH_MORGANA@1", name: "Cultist Robe 4.1", tier: 4.1 },
    { id: "T5_ARMOR_CLOTH_MORGANA@1", name: "Cultist Robe 5.1", tier: 5.1 },
    { id: "T6_ARMOR_CLOTH_MORGANA@1", name: "Cultist Robe 6.1", tier: 6.1 },
    { id: "T7_ARMOR_CLOTH_MORGANA@1", name: "Cultist Robe 7.1", tier: 7.1 },
    { id: "T8_ARMOR_CLOTH_MORGANA@1", name: "Cultist Robe 8.1", tier: 8.1 },
    { id: "T4_ARMOR_CLOTH_MORGANA@2", name: "Cultist Robe 4.2", tier: 4.2 },
    { id: "T5_ARMOR_CLOTH_MORGANA@2", name: "Cultist Robe 5.2", tier: 5.2 },
    { id: "T6_ARMOR_CLOTH_MORGANA@2", name: "Cultist Robe 6.2", tier: 6.2 },
    { id: "T7_ARMOR_CLOTH_MORGANA@2", name: "Cultist Robe 7.2", tier: 7.2 },
    { id: "T8_ARMOR_CLOTH_MORGANA@2", name: "Cultist Robe 8.2", tier: 8.2 },
    { id: "T4_ARMOR_CLOTH_MORGANA@3", name: "Cultist Robe 4.3", tier: 4.3 },
    { id: "T5_ARMOR_CLOTH_MORGANA@3", name: "Cultist Robe 5.3", tier: 5.3 },
    { id: "T6_ARMOR_CLOTH_MORGANA@3", name: "Cultist Robe 6.3", tier: 6.3 },
    { id: "T7_ARMOR_CLOTH_MORGANA@3", name: "Cultist Robe 7.3", tier: 7.3 },
    { id: "T8_ARMOR_CLOTH_MORGANA@3", name: "Cultist Robe 8.3", tier: 8.3 },
    { id: "T4_ARMOR_CLOTH_MORGANA@4", name: "Cultist Robe 4.4", tier: 4.4 },
    { id: "T5_ARMOR_CLOTH_MORGANA@4", name: "Cultist Robe 5.4", tier: 5.4 },
    { id: "T6_ARMOR_CLOTH_MORGANA@4", name: "Cultist Robe 6.4", tier: 6.4 },
    { id: "T7_ARMOR_CLOTH_MORGANA@4", name: "Cultist Robe 7.4", tier: 7.4 },
    { id: "T8_ARMOR_CLOTH_MORGANA@4", name: "Cultist Robe 8.4", tier: 8.4 }
];


const feyscaleRobeItems = [
    { id: "T4_ARMOR_CLOTH_FEY", name: "Feyscale Robe 4.0", tier: 4 },
    { id: "T5_ARMOR_CLOTH_FEY", name: "Feyscale Robe 5.0", tier: 5 },
    { id: "T6_ARMOR_CLOTH_FEY", name: "Feyscale Robe 6.0", tier: 6 },
    { id: "T7_ARMOR_CLOTH_FEY", name: "Feyscale Robe 7.0", tier: 7 },
    { id: "T8_ARMOR_CLOTH_FEY", name: "Feyscale Robe 8.0", tier: 8 },
    { id: "T4_ARMOR_CLOTH_FEY@1", name: "Feyscale Robe 4.1", tier: 4.1 },
    { id: "T5_ARMOR_CLOTH_FEY@1", name: "Feyscale Robe 5.1", tier: 5.1 },
    { id: "T6_ARMOR_CLOTH_FEY@1", name: "Feyscale Robe 6.1", tier: 6.1 },
    { id: "T7_ARMOR_CLOTH_FEY@1", name: "Feyscale Robe 7.1", tier: 7.1 },
    { id: "T8_ARMOR_CLOTH_FEY@1", name: "Feyscale Robe 8.1", tier: 8.1 },
    { id: "T4_ARMOR_CLOTH_FEY@2", name: "Feyscale Robe 4.2", tier: 4.2 },
    { id: "T5_ARMOR_CLOTH_FEY@2", name: "Feyscale Robe 5.2", tier: 5.2 },
    { id: "T6_ARMOR_CLOTH_FEY@2", name: "Feyscale Robe 6.2", tier: 6.2 },
    { id: "T7_ARMOR_CLOTH_FEY@2", name: "Feyscale Robe 7.2", tier: 7.2 },
    { id: "T8_ARMOR_CLOTH_FEY@2", name: "Feyscale Robe 8.2", tier: 8.2 },
    { id: "T4_ARMOR_CLOTH_FEY@3", name: "Feyscale Robe 4.3", tier: 4.3 },
    { id: "T5_ARMOR_CLOTH_FEY@3", name: "Feyscale Robe 5.3", tier: 5.3 },
    { id: "T6_ARMOR_CLOTH_FEY@3", name: "Feyscale Robe 6.3", tier: 6.3 },
    { id: "T7_ARMOR_CLOTH_FEY@3", name: "Feyscale Robe 7.3", tier: 7.3 },
    { id: "T8_ARMOR_CLOTH_FEY@3", name: "Feyscale Robe 8.3", tier: 8.3 },
    { id: "T4_ARMOR_CLOTH_FEY@4", name: "Feyscale Robe 4.4", tier: 4.4 },
    { id: "T5_ARMOR_CLOTH_FEY@4", name: "Feyscale Robe 5.4", tier: 5.4 },
    { id: "T6_ARMOR_CLOTH_FEY@4", name: "Feyscale Robe 6.4", tier: 6.4 },
    { id: "T7_ARMOR_CLOTH_FEY@4", name: "Feyscale Robe 7.4", tier: 7.4 },
    { id: "T8_ARMOR_CLOTH_FEY@4", name: "Feyscale Robe 8.4", tier: 8.4 }
];


const robeOfPurityItems = [
    { id: "T4_ARMOR_CLOTH_AVALON", name: "Robe of Purity 4.0", tier: 4 },
    { id: "T5_ARMOR_CLOTH_AVALON", name: "Robe of Purity 5.0", tier: 5 },
    { id: "T6_ARMOR_CLOTH_AVALON", name: "Robe of Purity 6.0", tier: 6 },
    { id: "T7_ARMOR_CLOTH_AVALON", name: "Robe of Purity 7.0", tier: 7 },
    { id: "T8_ARMOR_CLOTH_AVALON", name: "Robe of Purity 8.0", tier: 8 },
    { id: "T4_ARMOR_CLOTH_AVALON@1", name: "Robe of Purity 4.1", tier: 4.1 },
    { id: "T5_ARMOR_CLOTH_AVALON@1", name: "Robe of Purity 5.1", tier: 5.1 },
    { id: "T6_ARMOR_CLOTH_AVALON@1", name: "Robe of Purity 6.1", tier: 6.1 },
    { id: "T7_ARMOR_CLOTH_AVALON@1", name: "Robe of Purity 7.1", tier: 7.1 },
    { id: "T8_ARMOR_CLOTH_AVALON@1", name: "Robe of Purity 8.1", tier: 8.1 },
    { id: "T4_ARMOR_CLOTH_AVALON@2", name: "Robe of Purity 4.2", tier: 4.2 },
    { id: "T5_ARMOR_CLOTH_AVALON@2", name: "Robe of Purity 5.2", tier: 5.2 },
    { id: "T6_ARMOR_CLOTH_AVALON@2", name: "Robe of Purity 6.2", tier: 6.2 },
    { id: "T7_ARMOR_CLOTH_AVALON@2", name: "Robe of Purity 7.2", tier: 7.2 },
    { id: "T8_ARMOR_CLOTH_AVALON@2", name: "Robe of Purity 8.2", tier: 8.2 },
    { id: "T4_ARMOR_CLOTH_AVALON@3", name: "Robe of Purity 4.3", tier: 4.3 },
    { id: "T5_ARMOR_CLOTH_AVALON@3", name: "Robe of Purity 5.3", tier: 5.3 },
    { id: "T6_ARMOR_CLOTH_AVALON@3", name: "Robe of Purity 6.3", tier: 6.3 },
    { id: "T7_ARMOR_CLOTH_AVALON@3", name: "Robe of Purity 7.3", tier: 7.3 },
    { id: "T8_ARMOR_CLOTH_AVALON@3", name: "Robe of Purity 8.3", tier: 8.3 },
    { id: "T4_ARMOR_CLOTH_AVALON@4", name: "Robe of Purity 4.4", tier: 4.4 },
    { id: "T5_ARMOR_CLOTH_AVALON@4", name: "Robe of Purity 5.4", tier: 5.4 },
    { id: "T6_ARMOR_CLOTH_AVALON@4", name: "Robe of Purity 6.4", tier: 6.4 },
    { id: "T7_ARMOR_CLOTH_AVALON@4", name: "Robe of Purity 7.4", tier: 7.4 },
    { id: "T8_ARMOR_CLOTH_AVALON@4", name: "Robe of Purity 8.4", tier: 8.4 }
];

export async function getClericRobePrices() {
    return await getPrices(clericRobeItems);
}

export async function getMageRobePrices() {
    return await getPrices(mageRobeItems);
}

export async function getScholarRobePrices() {
    return await getPrices(scholarRobeItems);
}

export async function getRoyalRobePrices() {
    return await getPrices(royalRobeItems);
}

export async function getDruidRobePrices() {
    return await getPrices(druidRobeItems);
}

export async function getFiendRobePrices() {
    return await getPrices(fiendRobeItems);
}

export async function getCultistRobePrices() {
    return await getPrices(cultistRobeItems);
}

export async function getFeyscaleRobePrices() {
    return await getPrices(feyscaleRobeItems);
}

export async function getRobeOfPurityPrices() {
    return await getPrices(robeOfPurityItems);
}




export async function getPrices(items) {
    const itemNames = items.map(item => item.id).join(',');
    const url = `https://europe.albion-online-data.com/api/v2/stats/prices/${itemNames}.json?locations=${locations.join(',')}&qualities=${qualities.join(',')}`;

    const lymhurstLowest = {}
    const thetfordLowest = {}
    const fortLowest = {}
    const caerleonLowest = {}
    const martlockLowest = {}
    const bridgewatchLowest = {}


    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const itemsReceived = await response.json();

        itemsReceived.forEach(item => {
            if (item.sell_price_min > 0) {

                if (item.city == "Lymhurst") {
                    if (!lymhurstLowest[item.item_id] || item.sell_price_min < lymhurstLowest[item.item_id].sell_price_min) {
                        lymhurstLowest[item.item_id] = {
                            item_id: item.item_id,
                            city: item.city,
                            sell_price_min: item.sell_price_min
                        };
                    }
                } else if (item.city == "Thetford") {
                    if (!thetfordLowest[item.item_id] || item.sell_price_min < thetfordLowest[item.item_id].sell_price_min) {
                        thetfordLowest[item.item_id] = {
                            item_id: item.item_id,
                            city: item.city,
                            sell_price_min: item.sell_price_min
                        };
                    }
                } else if (item.city == "Fort Sterling") {
                    if (!fortLowest[item.item_id] || item.sell_price_min < fortLowest[item.item_id].sell_price_min) {
                        fortLowest[item.item_id] = {
                            item_id: item.item_id,
                            city: item.city,
                            sell_price_min: item.sell_price_min
                        };
                    }
                } else if (item.city == "Caerleon") {
                    if (!caerleonLowest[item.item_id] || item.sell_price_min < caerleonLowest[item.item_id].sell_price_min) {
                        caerleonLowest[item.item_id] = {
                            item_id: item.item_id,
                            city: item.city,
                            sell_price_min: item.sell_price_min
                        };
                    }
                } else if (item.city == "Martlock") {
                    if (!martlockLowest[item.item_id] || item.sell_price_min < martlockLowest[item.item_id].sell_price_min) {
                        martlockLowest[item.item_id] = {
                            item_id: item.item_id,
                            city: item.city,
                            sell_price_min: item.sell_price_min
                        };
                    }
                } else if (item.city == "Bridgewatch") {
                    if (!bridgewatchLowest[item.item_id] || item.sell_price_min < bridgewatchLowest[item.item_id].sell_price_min) {
                        bridgewatchLowest[item.item_id] = {
                            item_id: item.item_id,
                            city: item.city,
                            sell_price_min: item.sell_price_min
                        };
                    }
                }
            }

        });

        items.forEach(robe => {
            let temp = [lymhurstLowest[robe.id], thetfordLowest[robe.id], fortLowest[robe.id], caerleonLowest[robe.id], martlockLowest[robe.id], bridgewatchLowest[robe.id]];
            temp = temp.filter(item => item !== undefined);

            //console.log(temp)

            const objectWithMaxValue = temp.reduce((maxObject, currentObject) => {
                const currentValue = currentObject.sell_price_min;
                if (currentValue > maxObject.sell_price_min) {
                    return currentObject;
                } else {
                    return maxObject;
                }
            }, temp[0]); // Initialize with the first object in the array

            if (objectWithMaxValue) {
                robe.min_city = objectWithMaxValue.city;
                robe.sell_price_min = objectWithMaxValue.sell_price_min;
            } else {
                robe.min_city = "Not found"
                robe.sell_price_min = -100
            }

        });


        return items
    } catch (error) {
        console.error('Error fetching robe prices:', error);
        throw error;
    }

}
