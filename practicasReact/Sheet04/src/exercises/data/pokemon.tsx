export interface Pokemon {
	sprite?: string;
	id: string;
	name: string;
	types: [];
	hasEvo: boolean;
	evolvesFrom?: string;
}