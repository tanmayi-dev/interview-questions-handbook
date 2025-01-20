# Random Pick Weighted by Country Population <a id="q1"></a>

This is the standardized phone screen question that Scalyr used and EventDB continues to use. It is the most “well-studied”, having been used for several years by the same small group of people. It leans towards algorithms (e.g. big-O notation) and is similar to the [this leetcode question](https://leetcode.com/problems/random-pick-with-weight/description/) .

I frame it like this:

_I’m going to give you the specification of a function, and then you’ll tell me how you’d implement it. There are various approaches with differing runtime & space characteristics, we should talk through many of them._

_This function takes two parameters: an array of strings, holding country names, and an array of longs, holding the populations of the respective country. You can also think of the input as a map from string to long, that works too, the main point is that each country is paired with its population._

_The function should return a single string, which is one of the country names from the input. The name should be **randomly chosen** from the input, but - and this is the “problem” part of the problem” - we do not choose each country with equal probability - instead, countries with higher populations should be returned more frequently. In other words, the likelihood of a particular country being returned should match its share of the global population, and these should exactly match - if one country has 32.34% of the world’s population, it should be returned 32.34% of the time._

=

_I have a couple more minor things to say, and then I’ll pass the mic to you._

- _Some solutions benefit from a setup step that creates a data structure to speed up the random selection, and we’ll want to talk about the runtime of the setup as distinct from the random selection. So our function will be called with input that doesn’t change - maybe it’s better to think of this as a class that is constructed with the input, and then there’s a function called `getRandomCountry` that takes no arguments. Point being: you can do a possibly-expensive “setup” phase to make the random selection (”query”) phase quicker._

- _You have at your disposal the standard library random routines; in particular you can get random floating point number between 0 and 1 **or** you can provide an upper bound, and the random function will return a whole number between 0 and that upper bound. The whole number form is the “roll an X-sided die” version of randomness, where X is 6 or 11 or 4 billion or whatever._

- _Finally: as you think through various approaches, don’t censor yourself. We want to talk about a few different ways of doing this, so if you think of something that works but is inelegant, that’s fine - go ahead & say it anyway._

### The three main Solutions

**O(n)**

| Phase     | Runtime | Notes                                                                                     |
| --------- | ------- | ----------------------------------------------------------------------------------------- |
| Setup     | O(n)    | Determine total population, K                                                             |
| Selection | O(1)    | Take randome number R in range [0, K)                                                     |
| Selection | O(1)    | Walk the array, keeping cumulative total, until cumulative total > R. That's your country |

**O(log n)**

| Phase     | Runtime  | Notes                                                                    |
| --------- | -------- | ------------------------------------------------------------------------ |
| Setup     | O(n)     | Determine total population, K, while building array of cumulative totals |
| Selection | O(1)     | Take randome number R in range [0, K)                                    |
| Selection | O(log n) | Use binary search to find "slot" for country                             |

_People often want to use a BinarySerachTree / RangeTree / Heap / etc. These are O(n log n) setup. Point this out, and ask for a O(n) setup instead._

**O(1) with O(K) space**

| Phase     | Runtime | Notes                                                                            |
| --------- | ------- | -------------------------------------------------------------------------------- |
| Setup     | O(n)    | Determine total population, K                                                    |
| Setup     | O(K)    | Building array of size K (one slot per person, pointing @ country)               |
| Selection | O(1)    | Take randome number R in range [0, K), return that country from the K-size array |

## IMP : The nobody-count-ever-get-unless-they-already-knew-it-solution

## O(1) with O(N) space

The **Alias Method** ([non-uniform-random-numbers](https://web.archive.org/web/20210508054017/https://oroboro.com/non-uniform-random-numbers/), [index.html](http://cgi.cs.mcgill.ca/~enewel3/posts/alias-method/index.html), [Alias_method](https://en.wikipedia.org/wiki/Alias_method)) is an awesome solution to this problem, and makes all kinds of intuitive sense once you grok it... but we don't expect anyone to figure this out on the fly, so it's not really apropos.

That said, with good candidates who nail all 3 solutions quickly, I often end up discussing the Alias Method as a follow-on. Those smart candidates tend to find it fascinating, and they particularly like that **we implemented and used the alias method in our code** (FastWeightedRandom.java#L13, although the callsite has since been deleted, so we not longer use it - although we may end up adding it as a variant of ServiceDiscoveryManager randome-routing). Getting to this phase of the discussion, when it happens, tends to end the phone screen on a fun positive note and leaves the candidate excited about joining the team.
