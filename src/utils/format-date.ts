const formatDate = (date: number) => {
    let j = date % 10, k = date % 100;

    if (j === 1 && k !== 11)
        return `${date}st`
    else if (j === 2 && k !==12)
        return `${date}nd`
    else if (j === 3 && k !==13)
        return `${date}rd`
    else
        return `${date}th`
}

export default formatDate