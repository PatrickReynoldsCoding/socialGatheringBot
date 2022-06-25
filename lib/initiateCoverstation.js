
const initiateConversation = (choice) => {
  switch (choice) {
    case 1: 
      return "Hey, how are you?";
    case 2:
      return "omg, it's so good to see you!"
    case 3:
      return "No way!!! come here! how you doing mate!!!"
    case 4:
      return "Hi."
  }
}

module.exports = initiateConversation