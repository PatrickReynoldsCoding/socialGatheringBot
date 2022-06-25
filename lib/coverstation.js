class Conversation {
  constructor() {
    this.tone = null;
  }

  initiateConversation(choice) {
    switch (choice) {
      case 1:
        return "Hey, how are you?";
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
        return "goodNews";
      case 2:
        return "neutral";
      case 3:
        return "badNews";
    }
  }

  verifyTone(choice) {
    let newTone = this.editTone(choice)
    if (newTone == null) {
      return "Pick again. There are only 3 options:\n1 = good news\n2 = neutral\n3 = bad news"
    } else {
    this.tone = newTone
    }
  }

  //refactor this to be used on all switch/case functions
}

module.exports = Conversation;
