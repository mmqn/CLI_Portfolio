// mutating `content`, could probably optimize
const generateData = () => {
  const title = prompt("Title (or enter `x` to cancel)");
  if (title !== "x") {
    const description = prompt("Description (optional)");
    const contentSet = [];
    let content = prompt("Content (append comma if adding multiple to set)");

    if (/.+,/i.test(content)) {
      const parsedContent = content.replace(/,$/g, '');
      contentSet.push(parsedContent);
    } else {
      contentSet.push(content);
    }

    while (/.+,/g.test(content)) {
      content = prompt("Adding more content");
      if (/.+,/i.test(content)) {
        const parsedContent = content.replace(/,$/g, '');
        contentSet.push(parsedContent);
      } else {
        contentSet.push(content);
      }
    }

    const outputObj = {};
    outputObj[title] = {
      Title: title,
      Description: description,
      Content: contentSet
    };
    console.log(
      "%cStore this object as a global variable (via right click) and use `copy(temp1)`.",
      "background: #242424; color: #ffab3d;"
    );
    console.log(outputObj);

    alert("Check console for object.");
  }
};

export default generateData;
