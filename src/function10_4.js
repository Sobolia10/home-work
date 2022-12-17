export const function10_4 = (arr) => {
    let resultMap = {
        sumByMap: 0,
        sumByForEach: 0,
        multipleByMap: 1,
        multipleByForEach: 1
    }

    arr.map(el => {
            if (!isNaN(parseInt(el))) {
                resultMap.sumByMap += parseInt(el)
            }
        }
    )
    console.log(resultMap.sumByMap)

    arr.forEach(el => {
        if (!isNaN(parseInt(el))) {
            resultMap.sumByForEach += parseInt(el)
        }
    })
    console.log(resultMap.sumByForEach)

    arr.map(el => {
            if (!isNaN(parseInt(el))) {
                resultMap.multipleByMap *= el
            }
        }
    )
    console.log(resultMap.multipleByMap)

    arr.forEach(el => {
        if (!isNaN(parseInt(el))) {
            resultMap.multipleByForEach *= parseInt(el)
        }
    })

    return resultMap;
}