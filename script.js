
async function Prom() {
    let promise = new Promise(resolve => {
        let x = 1;
        x && setTimeout(_ => resolve('Resolve'), 2000);
    })

    console.log(await promise);
}
Prom();