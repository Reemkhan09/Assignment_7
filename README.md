E-commerce- Project
2. Attributes and Properties
difference between 
input.value && input.getAttributes(value);
 
 -input.value returns the current value of the user.
 -input.getAttribute("value") returns the original value of html
 3. Parsing : mean how the browser reads and understand html code 
 4. Tokenization: mean breaking code into small pieces 
 5.Dom tree  : it stands for document object model mean html code is parse the  or it understands the html code then it gives them small small chunks which is called tokenization  is called DOM tree
 it is related to only html

 6.CSSOM tree
  it stands for css object model ,it creates tree  by browser using css code

  7. Render tree
  DOM Tree + CSSOM Tree = render tree

  8.Event bubbling
  means event travels from bottom to the top eg:- child ->parent ->grandparent
  9.Event Capturing
  means event travels from top to targe to bottom
  eg:- grandparent -> parent -> child
 10. event delegation
  it means adding one listener to parent instead of adding to each child is event delegation
  