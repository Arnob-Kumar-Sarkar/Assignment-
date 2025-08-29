1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
    "getElementById" Selects one element by unique ID and returns Element or null. On the other hand, "getElementsByClassName" Selects all elements by class and returns live HTMLCollection.

    "querySelector" Selects first element by CSS selector and returns Element or null. Whereas, "querySelectorAll" Selects all elements by CSS selector and returns non-live NodeList.


2. How do you create and insert a new element into the DOM?

Ans:
    i. In the beginning, I need to call a variable and by document.createElement("the element"), I'll create the element and that would be the value of the variable.

    ii. After that, I'll add some content to the variable or element.

    iii. Finally, I'll insert it into the DOM by appendChild().


    Giving an example,

    At First,
        let newDiv = document.createElement("div");

    Secondly,
        newDiv.textContent = "Hi, I'm gonna add now a new element into the DOM.";

    Then insert into the DOM,
        document.body.appendChild(newDiv);


3.What is Event Bubbling and how does it work?

Ans:
    Event Bubbling means when an event happens on an element, it first runs on that element, then moves up to its parent, and continue moving to the parent’s parent until it reaches body or html tag.

    First click on a child element.Then the event first runs on that child.Then it moves up to the parent. After that to the parent’s parent and so on keep moving all the way up to body or html tag.


4.What is Event Delegation in JavaScript? Why is it useful?

Ans:
    Event Delegation means adding one listener to the parent, instead of adding event listeners to many child elements.

    It is useful because, 
    1. we don’t need separate listeners for every button/item.
    2. it Saves memory when we have lots of elements.



5.What is the difference between preventDefault() and stopPropagation() methods?

Ans:
    preventDefault()  stop the browser’s default behavior.
    On the other hand, stopPropagation() stop the event from moving to parent.