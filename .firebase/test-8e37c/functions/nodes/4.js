

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.ff0ce54d.js","_app/immutable/chunks/scheduler.37b8a958.js","_app/immutable/chunks/index.e829ca3c.js","_app/immutable/chunks/firebase.bc1fd833.js","_app/immutable/chunks/index.42e2e98c.js"];
export const stylesheets = [];
export const fonts = [];
