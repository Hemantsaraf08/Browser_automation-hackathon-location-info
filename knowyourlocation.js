/*  
    Program to get general information about your location including distance from Airport, Railway Station
    and list of nearby public amenities using browser automation through Puppeteer, here we scrap data from Google 
    Maps. Input location string is given by user and output is in "AboutYourLocation.pdf"
    
    To run use command node knowyourlocation.js > AboutYourLocation.pdf
*/
const location = "Parimala trinity Apartment, bangalore";
const puppeteer = require("puppeteer");
const {gettabledetails, getdist}=require("./drivercode");
let detailsOF = ["Schools", "Colleges", "Library", "Hospitals", "malls & shopping center", "restaurants", "Bus stand", "Parks", "Parks"];
(async function () {
    try {

        let browser = await puppeteer.launch({
            defaultViewport: null,
            headless: false,
            args: ["--start-maximized"]
        })
        console.log(`Below you wil find the data regarding public amenities near your desired location: ${location}`);
        let tab = await browser.newPage();
        await tab.goto("https://www.google.com/maps");
        await tab.waitForNavigation({ visible: true });
        await tab.type("#searchboxinput", location, { delay: 100 });
        await tab.keyboard.press("Enter");
        await tab.waitForNavigation({ visible: true, waitUntil: "networkidle0" });
        await tab.waitForSelector("div[data-value='Nearby']");
        
        //get distance from your location to Airport using getdist fn.
        let dist1=await getdist(tab, "Airport");
        console.log(`
        Approx. Distance from your location to Airport is ${dist1}
        `);

        //get distance from your location to railway station using getdist fn.
        let dist2=await getdist(tab, "City Railway Station");
        console.log(`
        Approx. Distance from your location to Railway Station is ${dist2}
        `);

        //get info of Nearby public amenities listed in detailsOF array, calling fn gettabledetails for each amenity
        await tab.waitForSelector("div[data-value='Nearby']");
        await tab.click("button[data-value='Nearby']");
        await tab.waitForNavigation({ visible: true, waitUntil: "networkidle0" });
        for (let i = 0; i <= detailsOF.length; i++) {
            if (i == 0) {
                let detailsarr = await gettabledetails(tab, detailsOF[i]);
            } else if (i == detailsOF.length) { }
            else {
                console.log(`Details of (top 5) ${detailsOF[i - 1]} are below:`);
                let detailsarr = await gettabledetails(tab, detailsOF[i]);
                console.table(detailsarr);
            }
        }
        await tab.waitForTimeout();
        await browser.close();
    } catch (err) {
        console.log(err);
    }
})();