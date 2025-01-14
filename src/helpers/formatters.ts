export const formatDid = (
  did: string | undefined | null,
  startChars = 6,
  endChars = 4,
) => {
  if (!did) return '';
  // Ensure startChars and endChars are greater than mins
  const formattedStartChars = Math.max(5, startChars);
  const formattedEndChars = Math.max(3, endChars);
  if (startChars + endChars >= did.length) return did;
  return `${did.slice(0, formattedStartChars)}...${did.slice(
    did.length - formattedEndChars,
  )}`;
};

export const formatKey = (key: string, startChars = 5, endChars = 5) => {
  const formattedStartChars = Math.max(3, startChars);
  const formattedEndChars = Math.max(3, endChars);
  if (startChars + endChars >= key.length) return key;
  return `${key.slice(0, formattedStartChars)}...${key.slice(
    key.length - formattedEndChars,
  )}`;
};

export const formatBalance = (balance: string | number, decimals = 6) => {
  return Number(balance).toLocaleString(undefined, {
    maximumFractionDigits: decimals,
  });
};

export const stringToColor = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = str.charCodeAt(i) + ((hash << 2) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i += 1) {
    // eslint-disable-next-line no-bitwise
    const value = (hash >> (i * 3)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
};

export const splitByCapitalLetters = (text: string) => {
  return (
    text
      .match(/([A-Z]?[^A-Z]*)/g)
      ?.slice(0, -1)
      .join(' ') || text
  );
};

export const truncateText = (
  text: string | undefined | null,
  maxLength: number,
): string => {
  if (!text) return '';
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength)}...`;
};
