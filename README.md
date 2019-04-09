LOUISVILLE CITY GUIDE
https://godaged.github.io/CodeLouFEWD/

## Description
```
This is louisville city guide page. It has links to most attractions in the city. 
It gives a user to explore different areas of the city and get an idea about the city.
Technologies used:
    HTML, CSS, JavaScript
    Used SASS to convert Main.css to styles.scss file then generated styles.css
```
## Custom CSS Classes
```
The class(es) I created are:

1.  .main-header -> Includes Site Name and main Navigation Bar
    Sets the background color, image, size and padding for the heading
    Background image gradient was set to match with the body background

2.  .mobile, .mobile-bar, .mobile-barX -> open and close mobile menu

3.  .mobile-nav -> mobile navigation menus when the screen size les than 650 pixels
4.  .main-nav -> desktop/laptop screen navigation menu when the screen size greater than 650 pixels
5.  .list-hotel, .list-museum, .list-food -> sub menus in main menu
6.  .background-color -> set background color if needed to change background color
7.  .welcome -> Welcome message
8.  .intro-slide-show, .intro-slide-show-img -> slide show animation
9.  .metro -> metro section
10. .first-line -> highlights first line of the paragraph
11. .main-content --controls the main section of the site
12. .pic-container -> pictures of the Explre Louisville section
13. .pic-rows, .pic-columns -> uses flex-box and controls columns of the page to responsive when resize
14. .main-footer -> footer section color, background image and mix the background image and body color
15. .social-media -> Social media icons on the footer and uses flex-box
16. .home & .explore -> this will navigate to internal links ID #pic & #home when click home & Explore buttons on the menu
```
## Custom JavaScript Functions
```
The javascript functions I created are:


1. Mouseover & mouseout functions to show and hide drop down menus and sub menus
2. click function to show and hide mobile menu
3. resize & scroll functions to hide mobile menus if did not close by the user
4. slide show functions - fade in & fade out slides within 5 seconds also it animates image toggling to left for all images and then starts image overlay for all iamages.
5. Navigate to internal links ID #pic & #home when click home & Explore buttons on the menu
```
Pattern	Represents	Description	Level
*	any element	Universal selector	2
E	an element of type E	Type selector	1
E[foo]	an E element with a "foo" attribute	Attribute selectors	2
E[foo="bar"]	an E element whose "foo" attribute value is exactly equal to "bar"	Attribute selectors	2
E[foo~="bar"]	an E element whose "foo" attribute value is a list of whitespace-separated values, one of which is exactly equal to "bar"	Attribute selectors	2
E[foo^="bar"]	an E element whose "foo" attribute value begins exactly with the string "bar"	Attribute selectors	3
E[foo$="bar"]	an E element whose "foo" attribute value ends exactly with the string "bar"	Attribute selectors	3
E[foo*="bar"]	an E element whose "foo" attribute value contains the substring "bar"	Attribute selectors	3
E[foo|="en"]	an E element whose "foo" attribute has a hyphen-separated list of values beginning (from the left) with "en"	Attribute selectors	2
E:root	an E element, root of the document	Structural pseudo-classes	3
E:nth-child(n)	an E element, the n-th child of its parent	Structural pseudo-classes	3
E:nth-last-child(n)	an E element, the n-th child of its parent, counting from the last one	Structural pseudo-classes	3
E:nth-of-type(n)	an E element, the n-th sibling of its type	Structural pseudo-classes	3
E:nth-last-of-type(n)	an E element, the n-th sibling of its type, counting from the last one	Structural pseudo-classes	3
E:first-child	an E element, first child of its parent	Structural pseudo-classes	2
E:last-child	an E element, last child of its parent	Structural pseudo-classes	3
E:first-of-type	an E element, first sibling of its type	Structural pseudo-classes	3
E:last-of-type	an E element, last sibling of its type	Structural pseudo-classes	3
E:only-child	an E element, only child of its parent	Structural pseudo-classes	3
E:only-of-type	an E element, only sibling of its type	Structural pseudo-classes	3
E:empty	an E element that has no children (including text nodes)	Structural pseudo-classes	3
E:link			
E:visited	an E element being the source anchor of a hyperlink of which the target is not yet visited (:link) or already visited (:visited)	The link pseudo-classes	1
E:active			
E:hover			
E:focus	an E element during certain user actions	The user ACTION pseudo-classes	1 and 2
E:target	an E element being the target of the referring URI	The target pseudo-class	3
E:lang(fr)	an element of type E in language "fr" (the document language specifies how language is determined)	The :lang() pseudo-class	2
E:enabled			
E:disabled	a user interface element E which is enabled or disabled	The UI element states pseudo-classes	3
E:checked	a user interface element E which is checked (for instance a radio-button or checkbox)	The UI element states pseudo-classes	3
E::first-line	the first formatted line of an E element	The ::first-line pseudo-element	1
E::first-letter	the first formatted letter of an E element	The ::first-letter pseudo-element	1
E::before	generated content before an E element	The ::before pseudo-element	2
E::after	generated content after an E element	The ::AFTER pseudo-element	2
E.warning	an E element whose class is "warning" (the document language specifies how class is determined).	Class selectors	1
E#myid	an E element with ID equal to "myid".	ID selectors	1
E:not(s)	an E element that does not match simple selector s	Negation pseudo-class	3
E F	element descendant of an E element	Descendant combinator	1
E > F	an F element child of an E element	Child combinator	2
E + F	an F element immediately preceded by an E element	Next-sibling combinator	2
E ~ F	an F element preceded by an E element	Subsequent-sibling combinator	3
