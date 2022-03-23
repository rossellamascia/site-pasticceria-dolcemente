export const setCookie = (cname: string, cvalue: string, exMonth: number) => {
  const d = new Date();
  d.setTime(d.getTime() + exMonth * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};
export const social = {
  facebook: 'https://www.facebook.com/dolcementepasticceria',
  instagram: 'https://www.instagram.com/dolcementepasticceria/',
};

export const getCookie = (cname: string): string => {
  let name = cname + '=';
  if (typeof window !== 'undefined') {
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return '';
};
