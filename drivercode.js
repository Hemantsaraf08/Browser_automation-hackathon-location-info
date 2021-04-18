module.exports={gettabledetails, getdist};

async function gettabledetails(tab, place) {
    try {
        await tab.waitForSelector("#searchboxinput");
        await tab.click("#searchboxinput");
        await tab.waitForNavigation({ waitUntil: ["networkidle0", "load", "domcontentloaded"] });
        await tab.keyboard.down("Control");
        await tab.keyboard.press("a");
        await tab.keyboard.up("Control");
        await tab.type("#searchboxinput", place, { delay: 299 });
        await tab.keyboard.press("Enter");
        await tab.waitForNavigation({ waitUntil: ["networkidle0", "load", "domcontentloaded"] });
        await tab.waitForTimeout();
        let selector = "div.tYZdQJV9xeh__title-container";
        await tab.waitForSelector(selector);

        let extracteditems = await tab.evaluate(consolefn, selector);
        return extracteditems;

    } catch (err) { console.log(err) }
}
function consolefn(selector) {
    let a = document.querySelectorAll(selector);
    let textarr = [];
    for (let i = 0; i < a.length; i++) {
        let Name = a[i].innerText;
        textarr.push({ Name });
    }
    return textarr;
}
async function getdist(tab, distof) {
    await tab.click("button[data-value='Directions']");
    await tab.waitForNavigation({ visible: true, waitUntil:["networkidle0", "load", "domcontentloaded"]});
    await tab.waitForSelector("input.tactile-searchbox-input");
    await tab.waitForTimeout();
    await tab.keyboard.down("Control");
    await tab.keyboard.press("a");
    await tab.keyboard.up("Control");
    await tab.type("input.tactile-searchbox-input", distof, { delay: 200 });
    await tab.keyboard.press("Enter");
    await tab.waitForNavigation({ visible: true, waitUntil: "networkidle0" });
    await tab.waitForSelector(".section-directions-trip-distance.section-directions-trip-secondary-text");
    let dist = await tab.evaluate(() => {
        let a = document.querySelector(".section-directions-trip-distance.section-directions-trip-secondary-text")
        return a.innerText;
    })
    await tab.goBack({waitUntil:"networkidle0"});
    await tab.waitForSelector("button[data-value='Directions']");
    return dist;
}