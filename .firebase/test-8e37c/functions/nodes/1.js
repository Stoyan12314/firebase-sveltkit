

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.59ec1a99.js","_app/immutable/chunks/scheduler.37b8a958.js","_app/immutable/chunks/index.e829ca3c.js","_app/immutable/chunks/stores.a7eb5a2b.js","_app/immutable/chunks/singletons.b518e254.js","_app/immutable/chunks/index.42e2e98c.js"];
export const stylesheets = [];
export const fonts = [];
