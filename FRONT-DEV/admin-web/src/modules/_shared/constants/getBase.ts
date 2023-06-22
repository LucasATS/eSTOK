const getBase64 = (file: any): Promise<string> => {
  return new Promise((resolve) => {
    try {
      let baseURL = '';
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        console.log('Called', reader);
        baseURL = reader.result as string;

        console.log(baseURL);
        resolve(baseURL);
      };
    } catch (error) {}
  });
};

export default getBase64;
