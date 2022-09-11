import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { ComponentTags as Tags } from "shared/classes/tags";

@Component({
	tag: Tags.Player,
	defaults: {},
})
export class CombatantComponenet extends BaseComponent<{}> implements OnStart {
	constructor() {
		super();
	}
	onStart() {}
}
