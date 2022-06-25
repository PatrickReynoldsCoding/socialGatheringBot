const Conversation = require('../lib/coverstation')
const initiateConversation = require('../lib/coverstation')

describe('initiateConversations', () => {
  it('returns a neutral/polite responce', () => {
    const conversation = new Conversation;

    expect(conversation.initiateConversation(1)).toBe("Hey, how are you?")
  })
  it('returns a positive/happy responce', () => {
    const conversation = new Conversation;

    expect(conversation.initiateConversation(2)).toBe("omg, it's so good to see you!")
  })
  it('returns a positive/happy responce', () => {
    const conversation = new Conversation;

    expect(conversation.initiateConversation(3)).toBe("No way!!! come here! how you doing mate!!!")
  })
  it('returns a positive/happy responce', () => {
    const conversation = new Conversation;

    expect(conversation.initiateConversation(4)).toBe("Hi.")
  })
  it('returns a positive/happy responce', () => {
    const conversation = new Conversation;
    
    expect(conversation.tone).toBe(null)
  })
  it('returns a positive/happy responce', () => {
    const conversation = new Conversation;
    
    expect(conversation.tone).toBe(null)
  })
})