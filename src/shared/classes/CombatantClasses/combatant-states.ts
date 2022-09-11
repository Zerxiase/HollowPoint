const combatant_states = {
	Health: 100,
	MaxHealth: 100,
	Armor: 50,
	MaxArmor: 50,
	HealthRegen: 0.5,
	HealthRegenTime: 0.5,
	InCombat: false,
};

export type CombatStates = ReturnType<typeof combatant_states>;
