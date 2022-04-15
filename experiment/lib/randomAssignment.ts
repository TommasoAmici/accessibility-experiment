/**
 * https://stackoverflow.com/a/52171480/5008494
 * @param str
 * @param seed
 * @returns a number representing the hash of the given string
 */
const cyrb53 = (str: string, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

export const randomAssignment = (remoteAddress: string | undefined) => {
  if (remoteAddress === undefined) {
    throw new Error("Failed to assign client to experiment");
  }
  const hash = cyrb53(remoteAddress);
  if (hash % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
