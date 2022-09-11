import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { Players } from "@rbxts/services";
import { ComponentTags as Tags } from "shared/classes/tags";
import { Data } from "shared/classes/data";
import { Profile } from "@rbxts/profileservice/globals";
import ProfileService from "@rbxts/profileservice";

const version = 0.1;

const ProfileStore = ProfileService.GetProfileStore(`PlayerData_${version}`, Data);

interface Attributes {
	isLoaded: boolean;
}

@Component({
	tag: Tags.Player,
	defaults: {
		isLoaded: false,
	},
})
export class PlayerData extends BaseComponent<Attributes, Player> implements OnStart {
	private Profiles: Map<Player, Profile<typeof Data, unknown>> = new Map();
	constructor() {
		super();
		const profile = ProfileStore.LoadProfileAsync(`Player_${this.instance.UserId}`);
		if (profile !== undefined) {
			profile.AddUserId(this.instance.UserId);
			profile.Reconcile();
			profile.ListenToRelease(() => {
				this.Profiles.delete(this.instance);

				this.instance.Kick();
			});
			if (this.instance.IsDescendantOf(Players)) {
				this.Profiles.set(this.instance, profile);
				print(this.Profiles.get(this.instance));
			} else {
				profile.Release();
			}
		} else {
			this.instance.Kick();
		}
	}
	onStart() {
		Players.PlayerRemoving.Connect((Player: Player) => {
			const profile_ = this.Profiles.get(Player);
			if (profile_ !== undefined) {
				profile_.Release();
			}
		});
	}
}
