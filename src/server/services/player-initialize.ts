import { Service, OnStart, OnInit } from "@flamework/core";
import { Players, CollectionService as CS } from "@rbxts/services";
import { CombatStates } from "shared/classes/CombatantClasses/combatant-states";
import { ComponentTags as Tags } from "shared/classes/tags";

@Service({})
export class PlayerInitialize implements OnStart, OnInit {
	onStart() {
		Players.PlayerAdded.Connect((Player: Player) => {
			CS.AddTag(Player, Tags.Player);
			print(CS.GetTags(Player));
		});
	}

	onInit() {}
}
