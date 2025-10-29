export interface Pokemon {
	spriteURL?: string;
	id: string;
	name: string;
	types: [];
	hasEvo: boolean;
	evolvesFrom?: string;
}