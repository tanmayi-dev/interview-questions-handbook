### Tag : Flipkart

# Whatsapp web

Time : 90 minutes (coding) + 30 minutes (discussion)

### Implement frontend of a chat application, similar to web.whatsapp.com

- Allowed Tech stack : Vanilla JS and plain CSS
- Api endpoint url returns mock data required. It has array of objects with contact details and message list.
- Using Object Oriented JavaScript can be used to create reusable components

```
[
  {
    "id": 1,
    "title": "title",
    "imageURL": "someUrl",
    "orderId": "OD123",
    "messageList": [
      {
        "messageId": "msg1",
        "message": "Hi",
        "messageType": "text"
      },
      {
        "messageId": "msg2",
        "message": "need assistance",
        "messageType": "text"
      }
    ]
  },
  {
    "id": 2,
    "title": "title2",
    "imageURL": "someUrl2",
    "orderId": "OD1234",
    "messageList": []
  },
]
```

- Required Features

  - left view / panel
    - contains scrollable list of contacts with image, title, date, etc
    - has a search box which can be used to search contact by id and title
  - right view / panel
    - on click of any contact open a chat window which shows previous messages as well as input to send messages that need to be persisted (used localStorage)
  - style according to design provided (similar to whatsapp web)

- Bonus Features
  - attach images, files and videos to the chat
  - clicking on link opens it in new tab (youtube or other links)
