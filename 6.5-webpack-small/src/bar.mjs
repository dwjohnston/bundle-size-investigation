export async function bar() {
    console.log("x")

    const c = await import('./chaz.mjs');
    c.chaz();
}

