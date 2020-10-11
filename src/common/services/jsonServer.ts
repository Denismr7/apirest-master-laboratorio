export const postData = async (url: string, body: any, type: string = 'POST') => {
    const response = await fetch(url, { method: type, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)});
  }