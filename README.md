# A selection menu

Just a UI for now. ~~Stolen from~~ Inspired by the inventory menu from BOTW.  
![alt text](https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-hd/7/79/3.jpg?width=640)

- The top row enables sliding left and right through pages.
- The grid enables the user to selct an item and see more information.
- The details area on the right shows the selected item with additional information.
- Top and bottom bar are not relevant at this point.

## First steps:

I've hashed together a set of social media icons. Currently I am working on getting these to display correctly in a grid, with an empty area next to them for details later. The 'gallery' component is where the grid lives, and the 'details' component does nothing yet. Both of these componenets are children of the 'Menu' component. This will manage state for both components.  
Tomorow I need to get a grip on where the images will be stored, and how the app will access them.

## Rough plan:

1. Layout the 3x3 grid correctly, and have the details box update with the name of the icon when I click it.
2. Add the 'selected' feature to the icons, current idea is to layer a reticule over the icon using z-index.
3. Show larger icon and description for selected item in details area.
4. Add another page, any random theme, and ensure changes persist when switching betweeen pages.
5. Add breadcrumbs style bar at the top to show which page you are on.
6. Add summary page, showing all selections together in medium detail.
7. Add sort buttons for menu items
8. Add support for swiping left/right between pages
9. add drag to sort... maybe.
