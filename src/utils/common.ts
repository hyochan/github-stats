export const isValidURL = (url: string): boolean => {
  const match =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/gm;

  return match.test(url);
};

export const validateEmail = (email: string): boolean => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
};

export const randomColor = (): string => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const lightOrDark = (color: string): boolean => {
  // Variables for red, green, blue values
  let r: any, g: any, b: any, hsp;
  let hex = color;

  // Check the format of the color, HEX or RGB?
  if (hex.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    // @ts-ignore
    hex = hex.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
    );

    r = hex[1];
    g = hex[2];
    b = hex[3];
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    const hexNum = +(
      '0x' +
      hex.slice(1).replace(
        // @ts-ignore
        hex.length < 5 && /./g,
        '$&$&',
      )
    );

    // eslint-disable-next-line no-bitwise
    r = hexNum >> 16;
    // eslint-disable-next-line no-bitwise
    g = (hexNum >> 8) & 255;
    // eslint-disable-next-line no-bitwise
    b = hexNum & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return true;
  } else {
    return false;
  }
};

export const numberWithCommas = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * To get actual scroll height of an element.
 * https://stackoverflow.com/questions/58693386/why-does-scrolltop-position-not-work-on-mobile-safari
 */
export function getScrollingElement(): {
  scrollHeight: number;
  scrollTop: number;
} {
  if (document.scrollingElement) {
    return document.scrollingElement;
  }

  const docElement = document.documentElement;
  const docElementRect = docElement.getBoundingClientRect();

  return {
    scrollHeight: Math.ceil(docElementRect.height),
    scrollTop: Math.abs(docElementRect.top),
  };
}
