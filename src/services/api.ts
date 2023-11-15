/* eslint-disable @typescript-eslint/no-unused-vars */
export const _fetch = async (url: string, _options: any) => {
  const promise = new Promise((_resolve, _reject) => {
    /*
    setTimeout(
       () =>
       _reject(),
       500
     );
     */
    setTimeout(
      () =>
        _resolve({
          status: 200,
          success: true,
        }),
      500
    );
  });
  return promise;
};

export const requestAuth = async (params: any) => {
  try {
    const response: any = await _fetch('https://reqbin.com/echo/post/json', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};
