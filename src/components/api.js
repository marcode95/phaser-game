const APIHandler = (() => {
  const postData = async (url, object) => {
    try {
      const response = await fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
      });
      return response.json();
    } catch (error) {
      return error;
    }
  };

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      return error;
    }
  };

  return { postData, getData };
})();

export default APIHandler;