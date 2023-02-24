'use client';

export const subscribeNewsletter = async (email: string): Promise<string> => {
  const fetchOption: RequestInit = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email}),
  };

  try {
    const res: Response = await fetch('/api/news-letter', fetchOption);

    if (res.status === 200) {
      return res.text();
    }

    throw new Error(
      JSON.stringify({
        status: res.status,
        statusText: res.statusText,
      }),
    );
  } catch (err: any) {
    throw new Error(err);
  }
};
