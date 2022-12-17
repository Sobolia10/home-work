export const function10_6 = (arr) => {
    let result = {
        byForEach: 0,
        byReduce: 0,
        byMap: 0
    }


    let forEachCounter = 0;
    arr.forEach(el => {
        if (el.id > 120) {
            forEachCounter++
            result.byForEach += el.marks
        }
    })
    result.byForEach = result.byForEach / forEachCounter;

    //TODO: make by Reduce
    result.byReduce = 9999


    let mapCounter = 0;
    arr.map(el => {
        if (el.id > 120) {
            mapCounter++
            result.byMap += el.marks
        }
    })

    result.byMap = result.byMap / forEachCounter;
    return result
}