const initiateConversation = require('../lib/initiateCoverstation')

describe('initiateConversations', () => {
  it('returns a neutral/polite responce', () => {
    expect(initiateConversation(1)).toBe("Hey, how are you?")
  })
  it('returns a positive/happy responce', () => {
    expect(initiateConversation(2)).toBe("omg, it's so good to see you!")
  })
  it('returns a positive/happy responce', () => {
    expect(initiateConversation(3)).toBe("No way!!! come here! how you doing mate!!!")
  })
  it('returns a positive/happy responce', () => {
    expect(initiateConversation(4)).toBe("Hi.")
  })
})