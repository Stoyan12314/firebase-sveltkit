

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.12520694.js","_app/immutable/chunks/scheduler.37b8a958.js","_app/immutable/chunks/index.e829ca3c.js"];
export const stylesheets = [];
export const fonts = [];
