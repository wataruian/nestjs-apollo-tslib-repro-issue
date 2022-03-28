export const hello = {
  sendMessage(message: string = "") {
    console.log("This is a message from common library");

    const defaultMessage = "Hello World!";

    if (message.length === 0) {
      message = defaultMessage;
    }

    console.log(defaultMessage);
  },
};
