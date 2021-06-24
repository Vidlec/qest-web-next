export default function numberOrNull(value?: string | null | number): number | null {
    if (value === undefined || value === null) return null

    const valueParsed = parseFloat(value.toString())
    return isNaN(valueParsed) ? null : valueParsed
}
