import { Controller, OnStart } from "@flamework/core";
import { Players, CollectionService as CS, UserInputService as UIS } from "@rbxts/services";
import { CombatantClass } from "shared/classes/CombatantClasses/combatant-class";
const CC = new CombatantClass();

@Controller({})
export class CombatantController implements OnStart {
	onStart() {
		CC.processWeapon("AK47", "MAC10");
		UIS.InputBegan.Connect((input: InputObject, isTyping: boolean) => {
			if (isTyping) return;
			if (input.KeyCode === Enum.KeyCode.One) {
				CC.changeWeapon(1);
			} else if (input.KeyCode === Enum.KeyCode.Two) {
				CC.changeWeapon(2);
			} else if (input.KeyCode === Enum.KeyCode.Three) {
				return;
			}
		});
	}
}
