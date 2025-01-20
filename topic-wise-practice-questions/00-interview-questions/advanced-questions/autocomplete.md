# Design Exercise: Autocomplete

While it's often summarized as an architecture exercise, the scope is a bit narrower than that. It's more of an end-to-end feature design and implementation exercise targeted at senior-level candidates. There is more below than can be covered in 45 minutes, so feel free to speed through or even skip some parts. At some point you should intentionally pursue some unfamiliar ground to see if the candidate can work their way toward or deduce a good answer.

## Context

The candidate is playing the role of tech lead on a front-end team. The product team (PM) has come to them and asked that an email autocompletion feature be added to a website. To keep things simple, it's an internal website and the email addresses are stored in a corporate directory.

**Question 1:** What other teams would you talk to before getting started, and what would you ask of them? The company is assumed to be big enough to have all the typical software engineering roles populated.

Here's what we're looking for, in roughly decreasing order of importance:

- Server team, to work out an API for autocomplete requests and responses. This is the bare minimum.
- Product team, to establish requirements.
- Design team (UX and/or designer, may be same person) to provide wireframes/mockups.
- Project manager / scrummaster
- QA, to create a test plan
- Docs team
- Support

The goal of the question is to gauge how comfortable and knowledgable the candidate is regarding the software development process. If they have led projects before, or even worked at a senior level, they should be able to come up with several teams that will be involved.

## Setup

**Question 2:** We now have an API (at least a starting one), requirements, and a design. It's time to start development. We are using plain JavaScript without any libraries or frameworks. How would you begin?

Most candidates start right in on implementation details, often declaring a three-letter minimum before making a request. I try to get them to see that there's no need for that now, as it's premature optimization - we have no evidence of performance issues at this point. A much better approach is to break down the problem before worrying about implementation. Even without an underlying framework, it's useful to think in terms of components (areas of responsibility). In this case, there are two: the input for the user to type into, and the popup that shows matches. Not many candidates pause to look at the big picture, so it's a good sign if they do.

## Implementation

**Question 3:** At this point it's time to get into details. Their knowledge of JavaScript and Ajax will be tested. Listed below are various tasks and bits of associated knowledge, ordered from basic (must know) to advanced (bonus points).

### The input

## MUST

- INPUT element of type "text"
- Needs a handler (onchange or any of the three key events - onkeydown, onkeypress, onkeyup)

  - Can add handler via element.addEventListener(), or attribute
  - Can get handle to INPUT via document.getElementById()

- Text is in INPUT.value

## SHOULD

- Handler gets passed event as argument
- Element that received event is in event.target

## BONUS

- Text before input should be in LABEL element

---

### Getting data

## MUST

- Need to make API call to get matches for INPUT value
- XmlHttpRequest (XHR) or fetch API provided by browser
- Call is async
- Pass callback that will get response as argument

## SHOULD

- Response will likely be encoded as JSON (request too)
- JSON used for performance and ease of use
- Cleaner to use Promise to handle result of async call

## BONUS

- Call XHR.open() then XHR.send(), check for readystate=4; better yet, use much simpler fetch API
- Check status, look in XHR.responseText

---

### Showing matches

## MUST

- Popup is probably just a DIV
- Can position absolute, use left/top based on location of INPUT
- Show/hide using display:block and display:none (visibility will not do what we want)
- Current item could be indicated via colored background, bold, etc

## SHOULD

- Results shown in popup with a row for each match
- To handle Enter, up/down arrow keys, easiest to use INPUT handler since the INPUT has focus
- Browsers will now let non-input elements have focus, so could give current LI focus and attach handler to it

## BONUS

- UL/LI is better than DIVs since it is semantic HTML (better for accessibility, testing tools, etc)

---

### Optimization

## MUST

- An API request for every keystroke will probably not scale
- Only send request if string has changed (ie not on typing non-printing character)
- Requiring say three characters or more is okay but not great; user may want to search on one or two characters
  - Still has issue with fast typing beyond three characters

## SHOULD

- Recognize that there should be a clear need for optimization before optimizing
- API call should have a "limit" clause; we don't need more than 10-20 results (depends on requirements)
- Figure out that waiting for the user to pause is the key to optimizing
- Use setTimeout() to enforce a delay (maybe 500-1000ms) before request is made
  - Algorithm: set timer that sends request when it expires; if key event comes before that, cancel and create new timer

## BONUS

- Mention and understand debouncing
- Describe client-side caching/searching. When can it be used?
  - Client can search its cache if it has all the results for the string; API response could have a "hasMore" flag
