export const function10_3 = (ar) => {
    let result = {
        teamA : [],
        teamH: []
    }

    for (let i = 0; i < ar.length; i++) {
        if (ar[i].includes('a'))
            result.teamA.push(ar[i])

        if (ar[i].includes('H'))
            result.teamH.push(ar[i])
    }
    return result;
}