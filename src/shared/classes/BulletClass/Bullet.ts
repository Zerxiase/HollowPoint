export class BulletClass {
	private Bullet: Part;
	constructor() {
		this.Bullet = new Instance("Part");
		this.Bullet.Color = Color3.fromRGB(227, 171, 28);
		this.Bullet.Size = new Vector3(0.05, 0.05, 0);
		this.Bullet.Material = Enum.Material.Neon;
	}
}

/* 
	the animation class in shared/classes/AnimationClass/animations is where all the animations will be at, it'll also be a class to play animations
	by calling the function inside it.

	import FastCast, it should already be imported
/*/
// put this on the top:  import FastCast from "@rbxts/fastcast";
