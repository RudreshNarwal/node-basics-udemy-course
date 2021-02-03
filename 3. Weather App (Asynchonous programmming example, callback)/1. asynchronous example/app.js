console.log('Starting')

setTimeout(() => {
    console.log('2 Second Timer') // node run this thread behind the scene
}, 2000)

setTimeout(() => {
    console.log('0 Second Timer')
}, 0)

console.log('Stopping')