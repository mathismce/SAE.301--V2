
// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

export async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 3000);
  });
}


export function getCookie(name) {
  const cookies = document.cookie.split('; ')
  const value = cookies
      .find(c => c.startsWith(name + "="))
      ?.split('=')[1]
  if (value === undefined) {
      return null
  } 
  return decodeURIComponent(value)
}