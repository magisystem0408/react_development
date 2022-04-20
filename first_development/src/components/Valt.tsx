import { proxy, useSnapshot } from 'valtio'

const state = proxy({count: 0, text: 'hello'});

setInterval(()=>{
    ++state.count
},1000)

// https://www.npmjs.com/package/valtio
export const Valt = () => {
    const snapshot = useSnapshot(state)

    return(
        <>
            {snapshot.count}
        </>
    )

}