# Convention Guide

## Table Of Contents

1. [Folder structure]()


## 1. Folder Structure

![](./Screenshot%202024-05-29%20at%204.27.51%20PM.png)

## 2. File Naming Rule

- Use `lowercase` for folder and file name.
- Use `dash` (-) to seperate word of folder or file.
- Name folder and file according to its purpose.
- Name should be meaningful.

## 3. HTML Convention

## 3.1 Indentation

- Indent your code with 2 spaces 
### Ex:

<div>
  <p>
    content here
  </p>
</div>

## 3.2 Avoid Long codes line

Keep lines of HTML code reasonably short for readability.
Avoid excessively long lines that require horizontal scrolling.

## 4. CSS Convention

## 4.1 Class and Id 

- class and id should be named by its purpose or feature as well as connected with hyphens(-) if it is more than one word. The name should be in lowercase.

Ex: .blue-navigator

#menu-list

.icon-home

- It can be used in shortcut form but make sure to give comments above the declaration.

Ex : /* nav = navigator */

.nav

#nav

- **Inline code and internal code are not allowed.**
- **Css combinator can be used:**
- Descendant Combinator :

### Ex : 

.class1 .class2 {

property: value;

}

- Direct Child Combinator:

Ex: .class1 > .class2 {

property: value;

}

- **:nth-child() selector: This is optional**

Ex : a:nth-child(n) {

property: value;

}

## 5. Java Script Convention

- All variables should be declared on the top of each section with const declaration.

### Ex:

//function to return sum

const a = 1;

const b = 2;

function(a,b){

…..

}

//function to return subtraction

const c = 1;

const d = 2;

function(c,d){

…..

}

- Variables will be declared in full meaning. If the variable consists of one understandable word, it is written in lowercase. Otherwise, it will be written in camel format. Whereas global variables will be written in uppercase.

### Ex:

const celsius ; (one word variable)

const buttonToggle; (multiple word variable)

const RADIUS; (global variable)

- The function's name will be in camel format in general except it is a constructor function we use pascal format.

### Ex:

function firstName (){

code here

} ****

**// general function**

function FirstName (){

code here

}

 **//constructor function**

- Use Multi-line for Object declaration.

### Ex: let person {

name : ----,

age : ----

}

- Script file or js file should be at the end of the body tag (<body></body>).
- Make sure to give comments of function’s purpose above the function declaration

### Ex:
 	
// Return sum of two values

function (a, b){

return a + b;

}

## 8. Comment Notation

- Use only single line comments in css and javascript to demonstrate the purpose of style and function.

### Ex: 

*/* common h1 size */*

	*.h1{*

*...*

*}*

*// function return sum*

	*function sum(){*

	*...*

*}*

- Use 2 lines comment in html to demonstrate the purpose of section

### Ex:  
*/*---------- start navigation bar section ----------*/*

		 *Code here*

*/*---------- end of navigation bar section----------*/*

## 9. Injecting Common Components

Inside your target html file, place include tag where you want to inject another html file, and set the src property point to the html file where you want to use.

```html
<!-- the src path start from root -->
<include src="path"></include>
```