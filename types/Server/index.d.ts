export namespace ChickynoidServer {
	/** @client */
	export interface ServerConfig {
		/** Theoretical max, use a byte for player id */
		maxPlayers: number;
		fpsMode: FpsMode;
		serverHz: number;
	}

	export const enum FpsMode {
		Uncapped,
		Hybrid,
		Fixed60,
	}

	export let config: ServerConfig;

	/**
	 * Creates connections so that Chickynoid can run on the client. Specifically, it connects to relevant networking and
	 * RunService events.
	 *
	 * @client
	 */
	export function Setup(): void;
}