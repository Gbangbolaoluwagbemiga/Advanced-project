// To reject if its taking too long to load
export const timeout = function (sec) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${sec} second`));
    }, sec * 1000);
  });
};

//  To get Json
export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(15)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data;
  } catch (error) {
    console.log(`This is the ${error}`);
    throw error;
  }
};
