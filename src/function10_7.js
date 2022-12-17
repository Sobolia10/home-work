export const function10_7 = (arr1, arr2) => {
    let result = {
        byConcat: [],
        byPush: [],
        byApply: [],
        bySpread: [],
        bySplice: arr1,
        byForEach: []
    }


    result.byConcat = arr1.concat(arr2)

    //TODO: byApply

    result.bySpread = [...arr1, ...arr2]

    //TODO: Check it. Do it
    result.bySplice.splice(arr1.length, 0, arr2)


    arr2.forEach(el => {
        arr1.push(el)
    })

    debugger

    return result;
}