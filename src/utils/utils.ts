function createData(
    keyQuery: string,
    organicPosition: number,
    promoPosition: number,
    boost: number,
    advertisingType: string,
    rateCPM?: number | undefined,
) {
    return { keyQuery, organicPosition, promoPosition, boost, advertisingType, rateCPM };
}

export { createData };
