export const isDefined = <Value>(maybeDefined: Value | undefined | null): maybeDefined is Value =>
  !!maybeDefined
