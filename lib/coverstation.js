class Conversation {
  constructor() {
    this.tone = null;
  }

  initiateConversation(choice) {
    switch (choice) {
      case 1:
        return "Hey, how are you?";e
      case 2:
        return "omg, it's so good to see you!";
      case 3:
        return "No way!!! come here! how you doing mate!!!";
      case 4:
        return "Hi.";
    }
  }

  editTone(choice) {
    switch (choice) {
      case 1:
        this.tone = "goodNews";
        break;
      case 2:
        this.tone = "neutral";
        break;
      case 3:
        this.tone = "badNews";
        break;
    }
  }
}

module.exports = Conversation;
