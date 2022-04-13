import React, { Suspense } from 'react'

//TODO Suspendはloading中の画面で表示されない時に使用する

//TODO 時間を止める関数
const timeSleep =(ms:number)=>{
    return new Promise((resolve) =>{
        setTimeout(resolve,ms)
    })
}

const AlwaysSuspend:React.VFC =()=>{
    //todo ↓をコメントアウトするとsuspendが起動する
    // throw timeSleep(1000)
    return <div>正常に表示されています。</div>
}



const Loading =()=>{
    return <div>ローディング中</div>
}

export const SuspendExer =()=>{
    return (
        <Suspense fallback={<Loading/>}>
            <AlwaysSuspend />
        </Suspense>
    )
}