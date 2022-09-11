export const Data = {
	prestige: 0,
	rank: 1,
	xp: 100,
	points: 0,
	equips: {
		slot1: {
			PrimaryWeapon: "None",
			SecondaryWeapon: "None",
			Perks: {},
			scorestreaks: {},
		},
		slot2: {
			PrimaryWeapon: "None",
			SecondaryWeapon: "None",
			Perks: {},
			scorestreaks: {},
		},
		slot3: {
			PrimaryWeapon: "None",
			SecondaryWeapon: "None",
			Perks: {},
			scorestreaks: {},
		},
		slot4: {
			PrimaryWeapon: "None",
			SecondaryWeapon: "None",
			Perks: {},
			scorestreaks: {},
		},
		slot5: {
			PrimaryWeapon: "None",
			SecondaryWeapon: "None",
			Perks: {},
			scorestreaks: {},
		},
		slot6: {
			PrimaryWeapon: "None",
			SecondaryWeapon: "None",
			Perks: {},
			scorestreaks: {},
		},
		slot7: {
			PrimaryWeapon: "None",
			SecondaryWeapon: "None",
			Perks: {},
			scorestreaks: {},
		},
		slot8: {
			PrimaryWeapon: "None",
			SecondaryWeapon: "None",
			Perks: {},
			scorestreaks: {},
		},
	},
	weapons: {
		["AK47"]: {
			isUnlocked: false,
			buyPrice: 100,
			skin: "",

			hasAttachments: true,

			attachments: {
				["EOTECH"]: {
					isUnlocked: false,
					buyPrice: 100,
				},
			},
		},
		["Combat Knife"]: {
			isUnlocked: false,
			buyPrice: 100,
			hasAttachments: false,

			skin: "",
		},
	},
	playerconfig: {
		ClanTag: {
			color: {
				R: 0,
				G: 0,
				B: 0,
			},
			Name: "",
		},
		Wildcards: {},

		Kills: {
			TDM: 0,
		},
		Assists: {
			TDM: 0,
		},
		Wins: {
			TDM: 0,
		},
		wildcards: {},
	},
} as const;
