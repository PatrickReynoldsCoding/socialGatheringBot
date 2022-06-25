# Social Gathering Bot

```
This bot will speak for you at social gatherings!

to load the correct state, you start by telling the bot:

- Where you are?
- How many people are there?
- What type of conversation would you like to initiate 

The user will enter 1, 2, 3 or 4 to generate pre written messages to start a conversation

The user will update the bot with the tone of the friends response and will dynamically generate 4 more messages for the user.

This loop continues.

```

## DESIGN

```
input/output table

1.  expect(initiateConversation.one).toBe("Hey, how are you?")

2.  expect(initiateConversation.two).toBe("omg, it's so good to see you!")

3.  expect(initiateConversation.three).toBe("No way!!! come here! how you doing mate!!!")

4.  expect(initiateConversation.four).toBe("Hi.")
```