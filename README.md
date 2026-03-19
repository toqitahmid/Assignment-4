1 
Difference between getElementById, getElementsByClassName, 
querySelector, querySelectorAll
Answer:
> getElementById() = selets one element by id;
> getElementsByClassName() = selects multiple elements;
> querySelectorAll() = Selects all matching elements
> querySlector() = Select first matching elements;


2
How to create and insert a new element into the DOM
Answer:
>first create element using: document.createElement("tag");
>then add content using: innertext or innerhtml;
>use appendchild() to append with parent;


3
What is Event Bubbling?
Answer:
Event bubbling means an event moves from child->parent->grandparent;


4
What is Event Delegation? why is in useful?
Answer:
>Event delegation means adding one evnet listener to a parent;
>useful for dynamic elements


5
Difference between preventDefault() and stopPropagation()
Answer:
>preventDefault() -> stops default browser behavior
>stopPropagration() -> stops event bubbling
