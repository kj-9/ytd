function getRequestUrl(url: string, params: Record<string, any>): string {
  let requestUrl = url + '?';
  for (const p in params) {
    if (params[p] === null) {
      continue;
    }

    requestUrl += `${p}=${params[p].toString()}&`;
  }
  // pop
  requestUrl = requestUrl.slice(0, -1);
  return requestUrl;
}

export async function playlistItems(
  playlistId: string,
  apiKey: string,
): Promise<any[]> {
  const params: { [key: string]: string | number | null } = {
    key: apiKey,
    part: 'contentDetails,id,snippet',
    playlistId,
    maxResults: 50,
    pageToken: null,
  };

  const baseUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';
  const init = { headers: { 'Accept': 'application/json' } };

  let items: any[] = [];
  let nextPageToken = 'true';

  while (nextPageToken) {
    const requestUrl = getRequestUrl(baseUrl, params);
    console.log(requestUrl);

    const result = await fetch(requestUrl, init);
    const data = await result.json();

    if (data?.items) {
      items = items.concat(data.items);
    }

    if (data?.nextPageToken) {
      nextPageToken = data.nextPageToken;
      params.pageToken = nextPageToken;
    } else {
      break;
    }
  }

  return items;
}
