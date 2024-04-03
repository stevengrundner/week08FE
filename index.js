// I'm creating a class called Beer with two constructors below. The two constructors are name and style. Then i decribed them with a console.log so that i can just use 'name'.describe() below so that i don't have to console.log it everytime. The doulbe lines of **** are there just to make it easier for me to read the code

class Beer { 
        constructor(name, style) {
            this.name = name;
            this.style = style;
        }
        describe() {
            console.log(`${this.name} is a ${this.style}`);
        }
    }
// *********************************************************************
// *********************************************************************

// Below i'm trying out my class of Beer to make sure the above of my class and describe method work when information is entered into it

    let Locovore = new Beer('HopKiss', 'American West Coast IPA');
    let LivingTheDream = new Beer ('7Speed', 'American West Coast IPA');
    let Coors = new Beer('Coors Light', 'American Light Lager');
    
    Locovore.describe();
    Coors.describe();
    LivingTheDream.describe();

// *********************************************************************
// *********************************************************************

// Now below, I'm creating a class called Brewery with two constructors below. The two constructors are name and a blank beer array. When adding a new beer to the array if it meets the instance of Beer than it pushes it into the array.



    class Brewery {
        constructor(name) {
            this.name = name;
            this.beers = [];
        }
    
    addBeer(beer) {
        if (beer instanceof Beer) {
        this.beers.push(beer);
    } else {
        throw new Error(`You can only add a Beer. 
        argument is not a beer: ${beer}`);
        }
    }
        describe() {
            return `${this.name} has ${this.beers.length} beers.`; // ${this. } adds whatever what put into the array and completes the sentance on what was written in the previous line
        }
    }

// *********************************************************************
// *********************************************************************

// Below i have the menu class which has two constructors in it one is the brewery array and the other is the selected bewery so that you can only work with one at a time.

    class Menu { 
        constructor() {
            this.breweries = [];
            this.selectedBrewery = null;
        }       
    
// *********************************************************************
// *********************************************************************

// Below is the starting point to the application which states the main order of the application, in which case to complete, or whether to move onto the next step.

    start() { // entry point to application
        let selection = this.showMainMenuOptions(); 
        while (selection != 0) {        //as long at the selection is not 0 the application goes to the next step
            switch(selection) {
                case '1' :
                    this.createBrewery(); 
                    break;
                case '2' :
                    this.viewBrewery();
                    break;
                case '3' :
                    this.deleteBrewery();
                    break;
                case '4' :
                    this.displayBreweries();
                    break;
                default:
                    selection = 0;
            }
        selection = this.showMainMenuOptions();
    }
        alert('Goodbye!');          // if the user selects option 0 the user is now exiting the application
    }
    
// *********************************************************************
// *********************************************************************

// The menu options which the user will see are all written each on their own line so it comes across cleaner and is easier to read. Even though they all fall in the same return prompt.

    showMainMenuOptions() {     
        return prompt(`
            0) exit
            1) create a new brewery
            2) view a brewery
            3) delete a brewery
            4) display all breweries
        `);
    }
    
// *********************************************************************
// *********************************************************************

// This menu shows the options withing the brewery

    showBreweryMenuOptions(breweryInfo) {
        return prompt(`
            0) back
            1) add a new beer
            2) delete a beer
            -----------------
            ${breweryInfo}
            `);
        }
    
// *********************************************************************
// *********************************************************************

// This menu displays all of the breweries within the array

    displayBreweries() {
        let breweriestring = '';
        for (let i = 0; i < this.breweries.length; i++) {
            breweriestring += i+ ') ' + this.breweries[i].name + '\n';
        }
        alert(breweriestring);
    }
    

// *********************************************************************
// *********************************************************************

// This menu is creating the new breweries and adding them to the array

    createBrewery() {
        let name = prompt('Enter name for new brewery: ');
        this.breweries.push(new Brewery(name));
    }
    
// *********************************************************************
// *********************************************************************

// This allows you to view the brewery you want to based on it's index number, and then when within that brewery option you are now able to open up the next set of options and lets you add or delete beer to the selected the brewery

    viewBrewery() {
        let index = prompt("Enter the index of the brewery that you want to view:");
        if (index > -1 && index < this.breweries.length) {
        this.selectedBrewery = this.breweries[index];
        let description = 'Brewery Name: ' + this.selectedBrewery.name + '\n';
            description += ' ' + this.selectedBrewery.describe() + '\n ';
        for (let i = 0; i < this.selectedBrewery.beers.length; i++) {
            description += i + ') ' + this.selectedBrewery.beers[i].describe() + '\n';
    }
            let selection1 = this.showBreweryMenuOptions(description);
                switch (selection1) {
                    case '1' :
                        this.createBeer();
                        break;
                    case '2' :
                        this.deleteBeer();
                 }
            } 
} // This curley brace is closing out the viewBrewery 
    
// *********************************************************************
// *********************************************************************

    // This option allows you to delete a brewery 
    deleteBrewery() {
        let index = prompt('Enter the index of the brewery to delete: ');
        if (index > -1 && index < this.breweries.length) {
        this.breweries.splice(index,1);
        }
    }
    
// *********************************************************************
// *********************************************************************
  
// This option allows you to create a beer when within the brewery index
    createBeer() {
        let name = prompt('Enter name of a new beer: ');
        let style = prompt('Enter style for new beer: ');
        this.selectedBrewery.addBeer(new Beer(name,style));
    }
    
// *********************************************************************
// *********************************************************************

// This is the delete beer option, which allows you to delete a beer when inside of the brewery index
    deleteBeer() {
        let index = prompt('Enter the index of the beer to delete: ');
        if (index > -1 && index < this.selectedBrewery.beers.length) { this.selectedBrewery.beers.splice(index,1);
        }
    }
} // This curley brace is closing out everything within the entire menu class and everything within it

    let menu = new Menu();
    menu.start();       // This starts the menu option on the webpage