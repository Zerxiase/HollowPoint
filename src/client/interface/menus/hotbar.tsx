import Roact, { Component } from "@rbxts/roact";

export class HotbarInterface extends Component {
	public render() {
		return (
			<screengui Key="Hotbar" ResetOnSpawn={false}>
				<frame
					Key="Main"
					Position={new UDim2(0, 0, 0, 0)}
					Size={new UDim2(0, 0, 0, 0)}
					BackgroundTransparency={0}
				>
					<imagelabel Key="Weapon" Position={new UDim2(0, 0, 0, 0)} Size={new UDim2(0, 0, 0, 0)}>
						<textlabel
							Key="Ammo"
							Position={new UDim2(0, 0, 0, 0)}
							Size={new UDim2(0, 0, 0, 0)}
							TextColor3={Color3.fromRGB(255, 255, 255)}
						></textlabel>
						<textlabel
							Key="MaxAmmo"
							Position={new UDim2(0, 0, 0, 0)}
							Size={new UDim2(0, 0, 0, 0)}
							TextColor3={Color3.fromRGB(125, 122, 122)}
						></textlabel>
					</imagelabel>
				</frame>
			</screengui>
		);
	}
}
