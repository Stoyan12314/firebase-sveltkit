

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.55800a07.js","_app/immutable/chunks/scheduler.37b8a958.js","_app/immutable/chunks/index.e829ca3c.js"];
export const stylesheets = ["_app/immutable/assets/0.a2642700.css"];
export const fonts = [];
