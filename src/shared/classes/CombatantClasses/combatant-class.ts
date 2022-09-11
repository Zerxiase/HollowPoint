import { Players, ReplicatedFirst, ReplicatedStorage, RunService as RS, Workspace } from "@rbxts/services";
import { AnimationClass } from "../AnimationClasses/animations-class";
const AC = new AnimationClass();

const connection = RS.RenderStepped.Connect(() => {});
const CurrentCamera = Workspace.CurrentCamera as Camera;

export class CombatantClass {
	public PrimaryWeapon: Model;
	public SecondaryWeapon: Model;
	constructor() {
		const defaultWeapon = ReplicatedStorage.FindFirstChild("ViewModels")!.FindFirstChild("AK47")!.Clone() as Model;
		const defaultSecWeapon = ReplicatedStorage.FindFirstChild("ViewModels")!
			.FindFirstChild("MAC10")!
			.Clone() as Model;
		this.PrimaryWeapon = defaultWeapon;
		this.SecondaryWeapon = defaultSecWeapon;
	}
	processWeapon(primaryWeapon: string, secondaryWeapon: string) {
		const primary = ReplicatedStorage.FindFirstChild("ViewModels")!.FindFirstChild(primaryWeapon)!.Clone() as Model;
		const secondary = ReplicatedStorage.FindFirstChild("ViewModels")!
			.FindFirstChild(secondaryWeapon)!
			.Clone() as Model;

		this.PrimaryWeapon = primary;
		this.SecondaryWeapon = secondary;
	}
	changeWeapon(Weapon: number) {
		connection.Disconnect();
		if (Weapon === 1) {
			this.SecondaryWeapon.Parent = ReplicatedFirst;
			this.PrimaryWeapon.Parent = CurrentCamera;
			AC.playIdle(this.PrimaryWeapon.Name);
			this.renderWeapon(this.PrimaryWeapon);
		} else if (Weapon === 2) {
			this.PrimaryWeapon.Parent = ReplicatedFirst;
			this.SecondaryWeapon.Parent = CurrentCamera;
			AC.playIdle(this.SecondaryWeapon.Name);
			this.renderWeapon(this.SecondaryWeapon);
		}
	}
	renderWeapon(weapon: Model) {
		RS.RenderStepped.Connect(() => {
			if (weapon) {
				weapon.SetPrimaryPartCFrame(weapon.GetPrimaryPartCFrame().Lerp(CurrentCamera.CFrame, 0.5));
			}
		});
	}

	deleteCurrentClass() {
		this.PrimaryWeapon.Destroy();
		this.SecondaryWeapon.Destroy();
	}
}
