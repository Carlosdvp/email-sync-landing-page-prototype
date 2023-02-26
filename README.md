# Email sync landing page prototype

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

******************************************************************************

## Project Links

* Netlify link: https://sparkly-dusk-69a7da.netlify.app/

* Technical design document: https://docs.google.com/document/d/1RqimqPtAHtAVySe2X1hkb83gOxQ2ElHd1WJcej9l8_I/edit?usp=sharing

*****************************************************************************

### Project Overview

Created a simple landing page for an email sync tool.

----------------------------------------------------------------

## TODO List

1. Create a private GitHub repo for the front-end
2. Write Technical Design in Google Docs
3. Make the application
	- Layout > main
	- Layout > Cards
	- Styling > Home
	- Functionality > Dropdown
	- Styling > Cards
	- Move all repeated css to the Home component
	- Arrows button should spin when clicked
		- and text should change
		- on second click button should spin in the opposite direction, and the text should change back
	-	Dropdown should't affect the size and position of any other element
		- fixed by enclosing the components in their own divs
		- creating sub-grids inside those divs
		- hard-coding sizes for certain elements, including the background image
	- Button should disable the dropdown on click
		- used $emit and props to send the event to the sibling component (Gmail card)
	- Button should rollup the disabled dropdown on click
		- used v-show tied to isClicked event
		- it should change 'state.expanded' to false if expanded (value = true)
	- When button is on 'All done!', clikcing it again should:
		- enable dropdown in Gmail card
4. Deploy to Netlify
5. Review of the code, functionality, TDD, and all deliverables

---------------------------------------------------------------------

## Detailed overview of the steps taken

If the Technical Design Document is the map, these notes detail the walking of the path on the map.

1. Created project with 'vue create' and initialized git repo locally
2. Linked to Github private repo
3. Wrote an initial draft for the Technical Design Doc
4. Cleaned up the vue project, removed default content
5. Coding the application

#### 5.1 Components

1. Create the main components:
	- Home.vue
	- Gmail.vue
	- Mailchimp.vue
	- SpinningButton.vue
2. Complete the Home Layout
	- created a separate branch to handle this step
	- used Grid CSS
	- goal is to place the elements in the right places
	- so far the ideal size for the application seems to be 980px by 540 px

#### 5.2 Cards and Dropdown

1. Cards
	- styling > make the cards look like the spec design
	- dropdown functionality >> done
	- moved repeated css to the Home component
	- set background-image width to a fixed value to keep it from stretching when the dropdown is extended

2. Dropdown
	- Text should also be a shade of grey and not the default black
	- removed method and content for the dropdown from the Chimp card, as the design spec only shows a working dropdown for the Gmail card
	- dropdown select arrow should be a dark grey triangle
		- should change between up and down triangle based on whether the dropdown is extended or not
	- checkbox checkmark should be grey and not blue

#### 5.3 SpinningButton Component

##### Create a method to do the following when clicked:

1. change the text
2. spin the image 180 deg
3. spin in reverse
4. disable / enable the gmail-card dropdown

1. To change the text
	- v-if statements to show the text based on a condition: isClicked

2. to spin the image
	- add/remove a class to rotate img element
	- use animations to rotate to the left, and then in reverse

3. to disable the dropdown in gmail card
	- add this to the spinTheWheel method
	- Button component $emits the click event to the parent component (Home), and the parent sends the event as a prop to the Gmail component

4. on click disable dropdown and make it unclickable
	- if dropdown is expanded, and state.isClicked = true, it will rollup
		- and it should also reset state.expanded to false