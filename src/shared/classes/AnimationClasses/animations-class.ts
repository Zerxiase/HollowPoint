import { Animation } from "@rbxts/animation";
import { Players, Workspace } from "@rbxts/services";

const LocalPlayer = Players.LocalPlayer as Player;
const Character = LocalPlayer.Character || (LocalPlayer.CharacterAdded.Wait()[0] as Model);

const Animations = {
	["AK47"]: Animation.createAnimations({ idle: 10404337311, equip: 10824812795, reload: 0, sprint: 0 }),
	["MAC10"]: Animation.createAnimations({ idle: 10678096265, equip: 0, reload: 0, sprint: 0 }),
} as const;

export class AnimationClass {
	public playIdle(weapon: string) {
		const myWeap = weapon as "MAC10";
		const myAnimator = Workspace.CurrentCamera!.FindFirstChild(weapon)!
			.FindFirstChild("Animation")!
			.FindFirstChild("Animator") as Animator;

		Animation.loadAnimator(myAnimator! as Animator, Animations)[myWeap].idle.Play();
	}

	public playEquip(weapon: string) {
		// FUCK IT
		const myWeap = weapon as "AK47";
		const myAnimator = Workspace.CurrentCamera!.FindFirstChild(weapon)!
			.FindFirstChild("Animation")!
			.FindFirstChild("Animator") as Animator;

		Animation.loadAnimator(myAnimator! as Animator, Animations)[myWeap].equip.Play();
	}

	public playReload(weapon: string) {
		const myWeap = weapon as "AK47";
		const myAnimator = Workspace.CurrentCamera!.FindFirstChild(weapon)!
			.FindFirstChild("Animation")!
			.FindFirstChild("Animator") as Animator;

		Animation.loadAnimator(myAnimator! as Animator, Animations)[myWeap].reload.Play();
	}

	public playSprint(weapon: string) {
		const myWeap = weapon as "AK47";
		const myAnimator = Workspace.CurrentCamera!.FindFirstChild(weapon)!
			.FindFirstChild("Animation")!
			.FindFirstChild("Animator") as Animator;

		Animation.loadAnimator(myAnimator! as Animator, Animations)[myWeap].sprint.Play();
	}

	public stopWeaponAnimation() {}
}
